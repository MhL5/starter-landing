import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "orange" | "emerald" | "rose" | "blue";
  className?: string;
  pulse?: boolean;
}

export function Badge({
  children,
  variant = "default",
  className,
  pulse = false,
}: BadgeProps) {
  const variants = {
    default: "bg-slate-100 border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",
    orange: "bg-orange-50 border-orange-100 text-orange-600 dark:bg-orange-900/30 dark:border-orange-800 dark:text-orange-400",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400",
    rose: "bg-rose-50 border-rose-100 text-rose-600 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",
    blue: "bg-blue-50 border-blue-100 text-blue-600 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest",
        variants[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              variant === "orange" && "bg-orange-400",
              variant === "emerald" && "bg-emerald-400",
              variant === "rose" && "bg-rose-400",
              variant === "blue" && "bg-blue-400",
              variant === "default" && "bg-slate-400"
            )}
          />
          <span
            className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              variant === "orange" && "bg-orange-500",
              variant === "emerald" && "bg-emerald-500",
              variant === "rose" && "bg-rose-500",
              variant === "blue" && "bg-blue-500",
              variant === "default" && "bg-slate-500"
            )}
          />
        </span>
      )}
      {children}
    </div>
  );
}
