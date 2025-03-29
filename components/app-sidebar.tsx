"use client";

import { Settings2, SproutIcon } from "lucide-react";
import * as React from "react";

import { useSession, authClient } from "@/app/lib/auth-client";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { APPLICATIONS } from "@/constants/applications";
import { AppSwitcher } from "./app-switcher";
import { useRouter } from "next/navigation";

const data = {
  user: {
    name: "Loading User...",
    email: "please wait...",
    avatar: "/avatars/shadcn.jpg",
  },
  apps: [...APPLICATIONS],
  navMain: [
    {
      title: "Habits",
      url: "/tracker/habits",
      icon: SproutIcon,
      isActive: true,
      items: [
        {
          title: "My Habits",
          url: "/tracker/habits",
        },
        {
          title: "Analytics",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session, isPending: isLoadingSession } = useSession();
  const router = useRouter();

  const user = {
    name: session?.user.name || "",
    email: session?.user.email || "",
    avatar: session?.user.image || "",
  };

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      router.push("/sign-in");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppSwitcher apps={data.apps} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {isLoadingSession && <NavUser user={data.user} />}
        {!isLoadingSession && session && (
          <NavUser user={user} logout={handleSignOut} />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
