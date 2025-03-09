import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import HabitForm from "./HabitForm";

export function HabitDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          New Habit
        </Button>
      </DialogTrigger>
      <HabitForm />
    </Dialog>
  );
}
