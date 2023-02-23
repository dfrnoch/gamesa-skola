import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma } from "~/server/db";
import { completeSpot, removeHeart } from "~/utils/spotSettings";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const spotRouter = createTRPCRouter({
  validateSpot: protectedProcedure.input(z.string().min(1)).mutation(async ({ ctx, input }) => {
    const id: string | undefined = input.split("/").pop();
    if (!id) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Invalid spot id",
      });
    }

    const spot = await prisma.spot.findFirst({
      where: {
        id,
      },
    });
    if (!spot) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Spot not found",
      });
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
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Game not found",
      });
    }

    if (spot.number !== game.currentSpot.number + 1) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Invalid spot",
      });
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
        await completeSpot(ctx.session.user.id);
        return {
          correct: true,
        };
      }
      await removeHeart(ctx.session.user.id);
      return {
        correct: false,
      };
    }),

  checkAnswer2: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {

  }),

  checkAnswer3: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    if (input === "D") {
      await completeSpot(ctx.session.user.id);
      return {
        correct: true,
      };
    } else {
      await removeHeart(ctx.session.user.id);
      return {
        correct: false,
      };
    }
  }),

  checkAnswer1: protectedProcedure.mutation(async ({ ctx }) => {
    await completeSpot(ctx.session.user.id);
    return {
      correct: true,
    };
  }),

  checkAnswer6: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    if (input === "C") {
      await completeSpot(ctx.session.user.id);
      return {
        correct: true,
      };
    } else {
      await removeHeart(ctx.session.user.id);
      return {
        correct: false,
      };
    }
  }),

  checkAnswer9: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    if (input === "A") {
      await completeSpot(ctx.session.user.id);
      return {
        correct: true,
      };
    } else {
      await removeHeart(ctx.session.user.id);
      return {
        correct: false,
      };
    }
  }),

  checkAnswer7: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    if (input.toLowerCase() === "hrachový protein") {
      await completeSpot(ctx.session.user.id);
      return {
        correct: true,
      };
    } else {
      await removeHeart(ctx.session.user.id);
      return {
        correct: false,
      };
    }
  }),
});
