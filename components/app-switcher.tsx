"use client";

import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSwitcher({
  apps,
}: {
  apps: {
    name: string;
    logo: React.ElementType;
    plan: string;
    url: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeApp, setActiveApp] = React.useState(apps[0]);
  const pathname = usePathname();
  const router = useRouter();
  const appURLS = apps.map((app) => app.url);

  React.useEffect(() => {
    if (!pathname) {
      return;
    }

    if (!appURLS) {
      return;
    }

    const appURLIndex = appURLS.findIndex((appURL) =>
      appURL.startsWith(pathname),
    );

    if (typeof appURLIndex === "number" && appURLIndex >= 0) {
      setActiveApp(apps[appURLIndex]);
    }
  }, [apps, appURLS, pathname]);

  if (!activeApp) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground select-none"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeApp.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{activeApp.name}</span>
                <span className="truncate text-xs">{activeApp.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Apps
            </DropdownMenuLabel>
            {apps.map((app) => (
              <DropdownMenuItem
                key={app.name}
                onClick={() => router.push(app.url)}
                className={cn(
                  "gap-2 p-2 cursor-pointer",
                  pathname?.startsWith(app.url) ? "bg-muted" : "",
                )}
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <app.logo className="size-4 shrink-0" />
                </div>
                {app.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
