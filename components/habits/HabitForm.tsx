"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MultipleSelect from "@/components/ui/multiple-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CATEGORIES_OPTIONS,
  COLOR_OPTIONS,
  HABIT_FORM_SCHEMA,
  StreakGoals,
} from "@/constants/habit-form.schema";
import { CheckIcon } from "lucide-react";
import CompletionsPerDayButtons from "./CompletionsPerDayButtons";
import { IconName, IconPicker, Icon } from "../ui/icon-picker";
import { iconsData } from "../ui/icons";

export default function HabitForm() {
  const form = useForm<z.infer<typeof HABIT_FORM_SCHEMA>>({
    resolver: zodResolver(HABIT_FORM_SCHEMA),
    defaultValues: {
      name: "",
      description: "",
      streakGoal: StreakGoals.Daily,
      categories: [],
      completionsPerDay: 1,
      icon: "",
      color: "",
    },
  });

  function onSubmit(values: z.infer<typeof HABIT_FORM_SCHEMA>) {
    console.log(values);
  }

  const handleCompletionsPerDayMutatorChange = (value: number) => {
    form.setValue("completionsPerDay", value);
  };

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
                          <SelectValue placeholder="Select Interval" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(StreakGoals).map((streakGoal) => (
                          <SelectItem key={streakGoal} value={streakGoal}>
                            <div className="capitalize">{streakGoal}</div>
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
                        readOnly
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CompletionsPerDayButtons
                form={form}
                onChange={handleCompletionsPerDayMutatorChange}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categories</FormLabel>
                <FormControl>
                  <MultipleSelect
                    {...field}
                    defaultOptions={CATEGORIES_OPTIONS}
                    placeholder="Organize habits by categorizing them"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <div className="w-full">
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <IconPicker
                        onValueChange={field.onChange}
                        defaultValue={field.value as IconName}
                        iconsList={iconsData}
                      >
                        <Button className="w-full h-full">
                          {field.value ? (
                            <Icon name={field.value as IconName} />
                          ) : (
                            "Select Icon"
                          )}
                        </Button>
                      </IconPicker>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full">
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Color</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a color" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[...COLOR_OPTIONS].map((color) => (
                          <SelectItem key={color.value} value={color.value}>
                            <div className="flex gap-2 items-center">
                              <div
                                className={`${color.value} w-4 h-4 rounded`}
                              />
                              <span className="capitalize">{color.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

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
