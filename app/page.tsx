import { redirect } from "next/navigation";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (session) {
    return redirect("/tracker/habits");
  } else {
    return redirect("/sign-in");
  }
}
