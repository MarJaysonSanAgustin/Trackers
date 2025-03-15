import React from "react";
import { HABIT_FORM_SCHEMA } from "@/constants/habit-form.schema";
import { MinusIcon, PlusIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

interface CompletionsPerDayButtonsProps {
  form: UseFormReturn<z.infer<typeof HABIT_FORM_SCHEMA>>;
  onChange: (value: number) => void;
}

export default function CompletionsPerDayButtons({
  form,
  onChange,
}: CompletionsPerDayButtonsProps) {
  const [completionsPerDay, setCompletionsPerDay] = React.useState(
    +form.getValues().completionsPerDay,
  );

  React.useEffect(() => {
    if (completionsPerDay < 1) {
      return;
    }

    onChange(completionsPerDay);
  }, [completionsPerDay, onChange]);

  const handleIncreaseCompletionPerDay = () => {
    setCompletionsPerDay((prevValue) => prevValue + 1);
  };

  const handleDecreaseCompletionPerDay = () => {
    if (completionsPerDay < 2) {
      return;
    }
    setCompletionsPerDay((prevValue) => prevValue - 1);
  };

  return (
    <div className="flex gap-1">
      <Button
        type="button"
        onClick={handleDecreaseCompletionPerDay}
        disabled={completionsPerDay < 2}
      >
        <MinusIcon />
      </Button>
      <Button type="button" onClick={handleIncreaseCompletionPerDay}>
        <PlusIcon />
      </Button>
    </div>
  );
}
