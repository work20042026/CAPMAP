import { lazy, Suspense, useEffect, useState } from "react";
import type { CapEntry } from "@/lib/caps";

const CapMapClient = lazy(() => import("./CapMapClient").then((m) => ({ default: m.CapMapClient })));

export function CapMap({
  entries,
  selected,
  onSelect,
}: {
  entries: CapEntry[];
  selected: CapEntry | null;
  onSelect: (e: CapEntry) => void;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
        Loading map…
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="flex h-full items-center justify-center text-sm text-muted-foreground">Loading map…</div>}>
      <CapMapClient entries={entries} selected={selected} onSelect={onSelect} />
    </Suspense>
  );
}
