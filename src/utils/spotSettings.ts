import { prisma } from "~/server/db";

export const completeSpot = async (userId: string) => {
  await prisma.game.update({
    where: {
      userId,
    },
    data: {
      completedSpot: true,
    },
  });

  return true;
};

export const removeHeart = async (userId: string) => {
  const data = await prisma.game.update({
    where: {
      userId,
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
