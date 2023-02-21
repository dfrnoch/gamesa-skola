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
});
