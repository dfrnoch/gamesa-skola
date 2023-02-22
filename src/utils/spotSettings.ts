import { prisma } from "~/server/db";

export const completeSpot = async (gameId: string) => {
  await prisma.game.update({
    where: {
      id: gameId,
    },
    data: {
      completedSpot: true,
    },
  });

  return true;
};
