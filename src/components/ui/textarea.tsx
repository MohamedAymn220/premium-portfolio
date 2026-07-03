import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-32 w-full rounded-xl border border-white/[0.08] bg-transparent px-4 py-3 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground hover:border-white/20 focus:border-emerald-500/50 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
