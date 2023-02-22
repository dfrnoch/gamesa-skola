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

export const removeHeart = async (gameId: string) => {
  const data = await prisma.game.update({
    where: {
      id: gameId,
    },
    data: {
      health: {
        decrement: 1,
      },
    },
  });
  if (data.health === 0) {
    return false;
  }

  return true;
};

export const findGame = async (userId: string) => {
  return prisma.game.findFirst({
    where: {
      userId,
    },
    include: {
      currentSpot: true,
    },
  });
};
