"use client";

import { useState } from "react";
import { ToggleSwitch } from "@clovirtualfashion/components/toggleSwitch";
import { Typography } from "@clovirtualfashion/components/typography";

/** Figma: ANNUAL + 브랜드 토글 — `bg-primary` → MD는 Yellow/Solid/Yellow6 (`app/plan/layout.tsx`) */
export function AnnualToggle() {
  const [active, setActive] = useState(true);
  return (
    <div className="flex items-center gap-[8px]">
      <Typography
        typoName="Normal/Body/4/Normal"
        colorToken="Grayscale/Solid/G7"
        productTheme="md"
        as="span"
        className="whitespace-nowrap"
      >
        ANNUAL
      </Typography>
      <ToggleSwitch
        isActive={active}
        type="none"
        size="s"
        isActivated
        onChange={(_, next) => setActive(next)}
      />
    </div>
  );
}
