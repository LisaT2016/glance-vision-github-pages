import { ArrowUpRight } from "lucide-react";

const JOIN_URL = "https://forms.gle/3zq37zf24gpu8zuFA";

export function JoinLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={JOIN_URL}
      target="_blank"
      rel="noreferrer"
      className={compact ? "join-link join-link-compact" : "join-link"}
    >
      <span>Join</span>
      <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={2.5} />
    </a>
  );
}
