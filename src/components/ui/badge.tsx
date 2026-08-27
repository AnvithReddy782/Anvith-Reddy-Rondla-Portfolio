import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono font-medium uppercase tracking-[0.08em] transition-colors focus:outline-none focus:ring-2 focus:ring-accent",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-accent text-[var(--color-accent-contrast)]",
        secondary:
          "border border-line bg-sunk text-secondary",
        outline:
          "border border-line-strong text-text",
        signal:
          "border border-signal/25 bg-signal/10 text-signal font-semibold",
        accent:
          "border border-accent/25 bg-accent/10 text-accent font-semibold",
        muted:
          "border border-line/60 bg-sunk/60 text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
