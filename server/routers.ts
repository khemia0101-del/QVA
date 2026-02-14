import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createLead, addToMailingList } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().min(10, "Valid phone is required"),
        creditScore: z.string().min(3, "Credit score is required"),
        creditReportFile: z.string().nullable().optional(),
        creditReportFileName: z.string().nullable().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await createLead({
            name: input.name,
            email: input.email,
            phone: input.phone,
            creditScore: input.creditScore,
            creditReportFile: input.creditReportFile || null,
            creditReportFileName: input.creditReportFileName || null,
          });

          // Notify owner of new lead
          const fileInfo = input.creditReportFileName ? ` | Credit Report: ${input.creditReportFileName}` : '';
          await notifyOwner({
            title: "New Credit Partnership Lead",
            content: `New lead submission from ${input.name} (${input.email}). Credit Score: ${input.creditScore}. Phone: ${input.phone}${fileInfo}`,
          });

          return { success: true };
        } catch (error) {
          console.error("Failed to submit lead:", error);
          throw new Error("Failed to submit application");
        }
      }),
  }),

  mailing: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email("Valid email is required"),
        source: z.enum(["blog", "podcast"]).optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await addToMailingList({
            email: input.email,
            source: input.source || "blog",
          });
          return { success: true };
        } catch (error) {
          // Silently fail if email already exists (unique constraint)
          if (error instanceof Error && error.message.includes("Duplicate")) {
            return { success: true }; // Already subscribed
          }
          console.error("Failed to add to mailing list:", error);
          throw new Error("Failed to subscribe");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
