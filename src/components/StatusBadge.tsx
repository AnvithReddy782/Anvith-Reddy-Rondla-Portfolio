import { Badge } from "@/components/ui/badge";

export default function StatusBadge({ status }: { status: string }) {
  const isProd = status === "PRODUCTION" || status === "LIVE";
  
  return (
    <Badge variant={isProd ? "signal" : "accent"} className="rounded-full">
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </Badge>
  );
}
