"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/** Figma W1920 캔버스 — 좌우 10px 여백 안에서 가로에 맞춰 비율 유지 스케일 */
const CANVAS_W = 1920;
const CANVAS_H = 3517;

export function PlanDesktopResponsiveWrap({ children }: { children: ReactNode }) {
  const slotRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = slotRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.getBoundingClientRect().width;
      setScale(w > 0 ? Math.min(1, w / CANVAS_W) : 1);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const scaledH = CANVAS_H * scale;

  return (
    <div className="box-border w-full px-[10px]">
      <div ref={slotRef} className="mx-auto w-full min-w-0 max-w-[1920px]">
        <div className="w-full overflow-hidden" style={{ height: scaledH }}>
          <div
            style={{
              width: CANVAS_W,
              height: CANVAS_H,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
