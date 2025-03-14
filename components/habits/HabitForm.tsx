"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { HABIT_FORM_SCHEMA, StreakGoals } from "@/constants/habit-form.schema";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { CheckIcon, PlusIcon, MinusIcon } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function HabitForm() {
  const form = useForm<z.infer<typeof HABIT_FORM_SCHEMA>>({
    resolver: zodResolver(HABIT_FORM_SCHEMA),
    defaultValues: {
      name: "",
      description: "",
      streakGoal: StreakGoals.Daily,
      categories: "",
      completionsPerDay: 1,
      icon: "",
      color: "",
    },
  });

  function onSubmit(values: z.infer<typeof HABIT_FORM_SCHEMA>) {
    console.log(values);
  }

  return (
    <DialogContent className="sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle>New Habit</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <div className="w-full">
              <FormField
                control={form.control}
                name="streakGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Streak Goal</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder="Select Interval"
                            className="capitalize"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(StreakGoals).map((streakGoal) => (
                          <SelectItem
                            key={streakGoal}
                            value={streakGoal}
                            className="capitalize"
                          >
                            {streakGoal}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full flex gap-2 items-end">
              <FormField
                control={form.control}
                name="completionsPerDay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Completions Per Day</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Completions Per Day"
                        {...field}
                        type="number"
                        min={1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-1">
                <Button type="button" disabled>
                  <MinusIcon />
                </Button>
                <Button type="button">
                  <PlusIcon />
                </Button>
              </div>
            </div>
          </div>

          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categories</FormLabel>
                <FormControl>
                  <Input placeholder="Categories" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="icon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Icon</FormLabel>
                <FormControl>
                  <Input placeholder="Icon" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder="Color" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button type="submit">
              <CheckIcon /> Submit
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
