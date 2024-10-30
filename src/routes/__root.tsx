import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import AppSidebar from "@/components/AppSidebar";

export const Route = createRootRoute({
  component: () => {
    return (
      <SidebarProvider>
        <main className="flex flex-row w-full">
          <SidebarTrigger
            className="fixed top-0 left-0"
            onClick={() => console.log("hi")}
          />
          <Outlet />
        </main>
        <AppSidebar />

        <TanStackRouterDevtools />
      </SidebarProvider>
    );
  },
});
