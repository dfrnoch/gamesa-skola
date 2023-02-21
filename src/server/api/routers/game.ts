import { z } from "zod";
import { prisma } from "~/server/db";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const gameRouter = createTRPCRouter({
  startGame: protectedProcedure.mutation(async ({ ctx }) => {
    return prisma.game.create({
      data: {
        userId: ctx.session.user.id,
        hasStarted: true,
      },
    });
  }),

  getGame: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.session?.user) {
      return null;
    }

    return prisma.game.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  checkQrCode: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    if (!ctx.session?.user) {
      return null;
    }

    return prisma.spot.findUnique({
      where: {
        id: input,
      },
    });
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
});
