import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/style";
import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";

type NavItemProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ href, className, children }) => (
  <Link to={href} className={cn("grow", className)}>
    {children}
  </Link>
);

const navItems = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/auth/login", title: "Login" },
  { href: "/review", title: "Review" },
  { href: "/reducer", title: "Reducer" },
  { href: "/context", title: "Context" },
  { href: "/builder-demo", title: "Builder" },
  { href: "/transition", title: "Transition" },
  { href: "/queryCrud", title: "Query Crud" },
  { href: "/infiniteScroll", title: "Infinite Scroll" },
];
const AppSidebar = () => {
  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <NavItem href={item.href} className="[&.active]:font-bold">
                      <span>{item.title}</span>
                    </NavItem>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
