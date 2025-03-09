"use client";

import { z } from "zod";

export const HABIT_FORM_SCHEMA = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  streakGoal: z.string().min(2).max(50),
  reminder: z.string().min(2).max(50),
  categories: z.string().min(2).max(50),
  completionsPerDay: z.string().min(2).max(50),
  icon: z.string().min(2).max(50),
  color: z.string().min(2).max(50),
});
