import React from "react";
import { cn } from "@/lib/style";

interface testButtonProps {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Button = ({ size, children, ...props }: testButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700",
        {
          "text-sm px-4 py-2": size === "small",
          "text-base px-16 py-8": size === "medium",
          "text-lg px-32 py-16": size === "large",
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
