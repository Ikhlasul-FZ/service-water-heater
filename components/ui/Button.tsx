import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-black text-white hover:bg-neutral-800 shadow-lg",
    secondary: "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-lg shadow-[#2563eb]/20",
    outline: "border border-neutral-300 bg-transparent hover:bg-neutral-100 text-black",
    ghost: "bg-transparent hover:bg-neutral-100 text-black",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg font-semibold",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
