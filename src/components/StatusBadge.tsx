export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[var(--color-signal)]/10 text-[var(--color-signal)] border border-[var(--color-signal)]/20">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-signal)]" aria-hidden="true" />
      {status}
    </span>
  );
}
