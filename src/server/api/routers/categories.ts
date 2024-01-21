import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  list: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.category.findMany();
    }),

  listWhereRoute: publicProcedure
    .input(z.string())
    .query(({ ctx, input: route }) => {
      return ctx.db.category.findFirst({
        where: {
          route,
        },
      });
    }),
})
