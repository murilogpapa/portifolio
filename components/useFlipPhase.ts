"use client";

import { useEffect, useLayoutEffect, useState } from "react";

type FlipPhase = "front" | "to-back" | "back" | "unflatten" | "to-front";

export function useFlipPhase(open: boolean, reduced: boolean) {
  const [phase, setPhase] = useState<FlipPhase>(open ? "back" : "front");

  useEffect(() => {
    if (reduced) {
      setPhase(open ? "back" : "front");
      return;
    }
    if (open) {
      setPhase((current) =>
        current === "back" || current === "to-back" ? current : "to-back",
      );
      return;
    }
    setPhase((current) => {
      if (current === "front") return "front";
      if (current === "to-front") return "to-front";
      if (current === "unflatten") return "unflatten";
      if (current === "back") return "unflatten";
      return "to-front";
    });
  }, [open, reduced]);

  useLayoutEffect(() => {
    if (reduced || phase !== "unflatten") return;
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => {
        setPhase((current) => (current === "unflatten" ? "to-front" : current));
      });
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [phase, reduced]);

  useEffect(() => {
    if (reduced || (phase !== "to-back" && phase !== "to-front")) return;
    const timeout = window.setTimeout(() => {
      setPhase((current) => {
        if (current === "to-back") return "back";
        if (current === "to-front") return "front";
        return current;
      });
    }, 700);
    return () => window.clearTimeout(timeout);
  }, [phase, reduced]);

  const flipped = reduced
    ? open
    : phase === "to-back" || phase === "back" || phase === "unflatten";
  const settled = !reduced && phase === "back";
  const snap = !reduced && phase === "unflatten";
  const animating = !reduced && (phase === "to-back" || phase === "to-front");

  const onFlipEnd = (event: {
    target: EventTarget | null;
    currentTarget: EventTarget;
    propertyName: string;
    stopPropagation: () => void;
  }) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;
    event.stopPropagation();
    setPhase((current) => {
      if (current === "to-back") return "back";
      if (current === "to-front") return "front";
      return current;
    });
  };

  return { flipped, settled, snap, animating, onFlipEnd };
}
