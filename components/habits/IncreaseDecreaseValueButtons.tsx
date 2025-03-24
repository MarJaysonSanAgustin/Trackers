import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";

interface IncreaseDecreaseValueButtonsProps {
  initialValue: number;
  maximumValue?: number;
  onChange: (value: number) => void;
}

export default function IncreaseDecreaseValueButtons({
  initialValue,
  maximumValue = 7,
  onChange,
}: IncreaseDecreaseValueButtonsProps) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    if (value < 1) {
      return;
    }

    onChange(value);
  }, [value, onChange]);

  const handleIncreaseValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecreaseValue = () => {
    if (value < 2) {
      return;
    }
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div className="flex gap-1">
      <Button type="button" onClick={handleDecreaseValue} disabled={value < 2}>
        <MinusIcon />
      </Button>
      <Button
        type="button"
        onClick={handleIncreaseValue}
        disabled={value >= maximumValue}
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
