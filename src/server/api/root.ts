import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { gameRouter } from "./routers/game";
import { spotRouter } from "./routers/spot";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  game: gameRouter,
  spot: spotRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
