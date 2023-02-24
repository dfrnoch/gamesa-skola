import { z } from "zod";
import { prisma } from "~/server/db";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const gameRouter = createTRPCRouter({
  startGame: protectedProcedure.mutation(async ({ ctx }) => {
    return prisma.game.create({
      data: {
        userId: ctx.session.user.id,
        hasStarted: true,
        spotId: "cleeroxbn0000tu6p8dmeo8jo", //Prvni spot
      },
    });
  }),

  getLeaderboard: publicProcedure.query(async () => {
    const data = await prisma.game.findMany({
      where: {
        completed: true,
      },
      include: {
        user: true,
      },
      orderBy: {
        gameTime: "asc",
      },
    });

    return data;
  }),

  getGame: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.session?.user) {
      return null;
    }

    const data = await prisma.game.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        currentSpot: true,
      },
    });

    const points = [
      { label: "Dveře", x: 320, y: 50, active: false },
      { label: "Sloup", x: 830, y: 38, active: false },
      { label: "Dveře", x: 980, y: 41, active: false },
      { label: "Výtah", x: 1030, y: 78, active: false },
      { label: "Střed", x: 1200, y: 41, active: false },
      { label: "Třetí dveře", x: 1310, y: 42, active: false },
      { label: "Zeď", x: 1510, y: 41, active: false },
      { label: "Formy", x: 1620, y: 42, active: false },
      { label: "Toalety", x: 1940, y: 24, active: false },
    ];

    if (!data) {
      return null;
    }

    const activePoints = points.slice(0, data.currentSpot.number);
    activePoints.push({
      label: points[data.currentSpot.number]?.label || "",
      x: points[data.currentSpot.number]?.x || 0,
      y: points[data.currentSpot.number]?.y || 0,
      active: true,
    });

    return {
      ...data,
      points: activePoints,
    };
  }),

  checkGameSpot: protectedProcedure.input(z.string().min(1)).query(async ({ ctx, input }) => {
    if (!ctx.session?.user) {
      return null;
    }

    const game = await prisma.game.findFirst({
      where: {
        spotId: input,
      },
    });

    if (!game) {
      return null;
    }

    return game;
  }),

  checkHealth: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.session?.user) {
      return null;
    }

    const game = await prisma.game.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
    });

    if (!game) {
      return null;
    }

    return game;
  }),

  playAgain: protectedProcedure.mutation(async ({ ctx }) => {
    const game = await prisma.game.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
    });

    if (!game) {
      return null;
    }

    await prisma.user.update({
      where: {
        id: ctx.session.user.id,
      },
      data: {
        game: {
          update: {
            hasStarted: false,
            completed: false,
            spotId: "cleeroxbn0000tu6p8dmeo8jo",
            health: 5,
            completedSpot: false,
          },
        },
      },
    });

    return true;
  }),
});
