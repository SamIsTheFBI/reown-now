import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  listAll: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.product.findMany({
        include: {
          category: true,
        }
      });
    }),

  listByCategoryId: publicProcedure
    .input(z.string())
    .query(({ ctx, input: categoryName }) => {
      return ctx.db.product.findMany({
        where: {
          category: {
            name: categoryName,
          },
        },
        include: {
          category: true,
        }
      });
    }),
})
