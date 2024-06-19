import React from "react";
import { cn } from "../lib/style";

interface testButtonProps {
  label: string;

  size?: "small" | "medium" | "large";
}

// .storybook-button--small {
//     font-size: 12px;
//     padding: 10px 16px;
//   }
//   .storybook-button--medium {
//     font-size: 14px;
//     padding: 11px 20px;
//   }
//   .storybook-button--large {
//     font-size: 16px;
//     padding: 12px 24px;
//   }

const Button = ({ label, size, ...props }: testButtonProps) => {
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
    >
      {label}
    </button>
  );
};

export default Button;
