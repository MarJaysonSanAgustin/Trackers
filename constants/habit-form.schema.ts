"use client";

import { z } from "zod";

export enum StreakGoals {
  None = "none",
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}

const StreakGoalsEnum = z.nativeEnum(StreakGoals);

type StreakGoalsEnum = z.infer<typeof StreakGoalsEnum>;

export const HABIT_FORM_SCHEMA = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  streakGoal: StreakGoalsEnum.default(StreakGoals.Daily),
  completionsPerStreak: z.number().min(1).max(31).default(1),
  categories: z.string().min(2).max(50),
  completionsPerDay: z.number().min(1).default(1),
  icon: z.string().min(2).max(50),
  color: z.string().min(2).max(50),
});
