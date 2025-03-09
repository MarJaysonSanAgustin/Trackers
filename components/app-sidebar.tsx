"use client";

import { Settings2, SproutIcon } from "lucide-react";
import * as React from "react";

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

const data = {
  user: {
    name: "Mar Jayson San Agustin",
    email: "sanagustinjayson@gmail.com",
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppSwitcher apps={data.apps} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
