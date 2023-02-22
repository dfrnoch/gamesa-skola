import { z } from "zod";
import { prisma } from "~/server/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const spotRouter = createTRPCRouter({
  validateSpot: protectedProcedure.input(z.string().min(1)).mutation(async ({ ctx, input }) => {
    const spot = await prisma.spot.findFirst({
      where: {
        id: input,
      },
    });

    if (!spot) {
      return null;
    }

    return spot;
  }),


  checkAnswer4: protectedProcedure.input(z.object({first: z.string(), second: z.string()})).mutation(async ({ ctx, input }) => {
    if(input.first.toLowerCase() === "vytamín d" && input.first.toLowerCase() === "vytamínu d"){
      
    }
  }
  )
});
