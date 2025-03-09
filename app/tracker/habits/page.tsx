import { HabitDialog } from "@/components/habits/HabitDialog";

export default function HabitsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 justify-center items-center">
      <div className="w-full max-w-4xl bg-muted h-full flex flex-col gap-4">
        <div className="flex flex-row-reverse p-4">
          <HabitDialog />
        </div>
      </div>
    </div>
  );
}
