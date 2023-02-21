import { prisma } from "~/server/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const gameRouter = createTRPCRouter({
  startGame: protectedProcedure.query(async ({ ctx }) => {
    return prisma.game.create({
      data: {
        userId: ctx.session.user.id,
        hasStarted: true,
      },
    });
  }),
});
