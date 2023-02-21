import { prisma } from "~/server/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const gameRouter = createTRPCRouter({
  startGame: protectedProcedure.mutation(async ({ ctx }) => {
    return prisma.game.create({
      data: {
        userId: ctx.session.user.id,
        hasStarted: true,
      },
    });
  }),

  getGame: protectedProcedure.query(async ({ ctx }) => {
    return prisma.game.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
});
