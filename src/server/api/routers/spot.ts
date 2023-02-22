import { z } from "zod";
import { prisma } from "~/server/db";
import { completeSpot, findGame } from "~/utils/spotSettings";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const spotRouter = createTRPCRouter({
  validateSpot: protectedProcedure.input(z.string().min(1)).mutation(async ({ ctx, input }) => {
    const id: string | undefined = input.split("/").pop();
    if (!id) {
      return {
        error: "Spot not found",
      };
    }

    const spot = await prisma.spot.findFirst({
      where: {
        id,
      },
    });
    if (!spot) {
      return {
        error: "Spot not found",
      };
    }

    //check user game
    const game = await prisma.game.findFirst({
      where: {
        userId: ctx.session.user.id,
        completedSpot: true,
      },
      include: {
        currentSpot: true,
      },
    });

    if (!game) {
      return {
        error: "Game not found",
      };
    }

    if (spot.number !== game.currentSpot.number + 1) {
      return {
        error: "Spot is not next",
      };
    }

    await prisma.game.update({
      where: {
        id: game.id,
      },
      data: {
        spotId: spot.id,
        completedSpot: false,
      },
    });

    return spot;
  }),

  checkAnswer4: protectedProcedure
    .input(z.object({ first: z.string(), second: z.string() }))
    .mutation(async ({ ctx, input }) => {
      if (input.first.toLowerCase() === "vitamín d" && input.first.toLowerCase() === "vitamínu d") {
      }
    }),

  checkAnswer3: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    const game = await findGame(ctx.session.user.id);
    await completeSpot(game?.id || "");
  }),
});
