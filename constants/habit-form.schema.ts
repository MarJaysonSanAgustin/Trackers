"use client";

import { z } from "zod";

import { Option } from "@/components/ui/multiple-select";

export enum StreakGoals {
  None = "none",
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}

const StreakGoalsEnum = z.nativeEnum(StreakGoals);

type StreakGoalsEnum = z.infer<typeof StreakGoalsEnum>;

const CATEGORIES_SCHEMA = z.object({
  label: z.string(),
  value: z.string(),
});

export const HABIT_FORM_SCHEMA = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  streakGoal: StreakGoalsEnum.default(StreakGoals.Daily),
  completionsPerStreak: z.number().min(1).max(31).default(1),
  categories: z.array(CATEGORIES_SCHEMA).min(1),
  completionsPerDay: z.number().min(1).default(1),
  icon: z.string().min(2).max(50),
  color: z.string().min(2).max(50),
});

export const CATEGORIES_OPTIONS: Option[] = [
  { label: "Art", value: "art" },
  { label: "Finances", value: "finances" },
  { label: "Fitness", value: "fitness" },
  { label: "Health", value: "health" },
  { label: "Nutrition", value: "nutrition" },
  { label: "Social", value: "social" },
  { label: "Study", value: "study" },
  { label: "Work", value: "work" },
  { label: "Morning", value: "morning" },
  { label: "Day", value: "day" },
  { label: "Evening", value: "evening" },
  { label: "Other", value: "other" },
];

export const COLOR_OPTIONS = [
  { label: "red", value: "bg-red-500" },
  { label: "orange", value: "bg-orange-500" },
  { label: "amber", value: "bg-amber-500" },
  { label: "yellow", value: "bg-yellow-500" },
  { label: "lime", value: "bg-lime-500" },
  { label: "green", value: "bg-green-500" },
  { label: "emerald", value: "bg-emerald-500" },
  { label: "teal", value: "bg-teal-500" },
  { label: "cyan", value: "bg-cyan-500" },
  { label: "sky", value: "bg-sky-500" },
  { label: "blue", value: "bg-blue-500" },
  { label: "indigo", value: "bg-indigo-500" },
  { label: "violet", value: "bg-violet-500" },
  { label: "purple", value: "bg-purple-500" },
  { label: "pink", value: "bg-pink-500" },
  { label: "gray", value: "bg-gray-500" },
];

export const COLOR_VALUES: Record<string, string> = COLOR_OPTIONS.reduce(
  (acc, { label, value }) => {
    acc[label] = value;
    return acc;
  },
  {} as Record<string, string>,
);
