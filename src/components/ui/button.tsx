import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-950 shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_10px_40px_rgba(16,185,129,0.3)]",
        secondary:
          "border border-white/[0.08] bg-slate-900/30 text-secondary-foreground backdrop-blur-md hover:-translate-y-0.5 hover:border-emerald-500/25 hover:bg-slate-800/50",
        ghost: "hover:bg-white/[0.04] hover:text-foreground",
        outline:
          "border border-white/[0.1] bg-transparent hover:-translate-y-0.5 hover:border-emerald-500/25 hover:bg-slate-900/30",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
