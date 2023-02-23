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
      { label: "První", x: 50, y: 50, active: false },
      { label: "Druhý", x: 100, y: 50, active: false },
      { label: "Třetí", x: 150, y: 50, active: false },
      { label: "Čtvrtý", x: 200, y: 50, active: false },
      { label: "Pátý", x: 250, y: 50, active: false },
      { label: "Šestý", x: 500, y: 50, active: false },
      { label: "Sedmý", x: 500, y: 70, active: false },
      { label: "Osmý", x: 800, y: 90, active: false },
      { label: "Devátý", x: 910, y: 20, active: false },
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
});
