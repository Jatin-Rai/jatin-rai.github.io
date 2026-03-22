import React from "react";
import { cn } from "../../lib/utils";

export const AnimatedButton = React.forwardRef<
  any,
  React.HTMLAttributes<HTMLElement> & {
    as?: any;
    containerClassName?: string;
    variant?: "primary" | "secondary";
    href?: string;
    target?: string;
    rel?: string;
    type?: "button" | "submit" | "reset";
  }
>(({
  children,
  className,
  containerClassName,
  as: Component = "button",
  variant = "primary",
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        "group relative inline-flex h-[50px] overflow-hidden rounded-full p-px focus:outline-hidden transition-transform active:scale-95",
        containerClassName
      )}
      {...props}
    >
      {variant === "primary" ? (
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#333333_50%,#ffffff_100%)]" />
      ) : (
        <span className="absolute inset-[-1000%] bg-white/20 transition-opacity group-hover:bg-white/40" />
      )}
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0c] px-8 py-1 font-semibold text-[0.95rem] text-white tracking-tight backdrop-blur-3xl transition-colors hover:bg-[rgba(25,25,30,0.9)] gap-2",
          className
        )}
      >
        {children}
      </span>
    </Component>
  );
});
AnimatedButton.displayName = "AnimatedButton";
