"use client";

import { useState } from "react";
import { Typography } from "@clovirtualfashion/components/typography";

const imgGroup41 =
  "https://www.figma.com/api/mcp/asset/38659194-a65a-405f-a4c3-065dc6c334a8";
const imgCommunityHoverGo =
  "https://www.figma.com/api/mcp/asset/ea430074-d9f7-4c9b-a228-0430a5a1feb1";
const imgCommunityHoverEllipse =
  "https://www.figma.com/api/mcp/asset/bee6c80e-8025-4442-a93e-b86566dfdc5f";

function EmblemTransparentPrimary({ className }: { className?: string }) {
  return (
    <div className={className ?? "relative size-[72px]"} data-name="Emblem / Transparent / Primary">
      <div className="absolute inset-[20%_13.33%_20.42%_13.33%] overflow-clip">
        <div className="absolute inset-[0_-0.01%_0.02%_0]">
          <img alt="" className="absolute block size-full max-w-none" src={imgGroup41} />
        </div>
      </div>
    </div>
  );
}

const easeOut = "cubic-bezier(0.33, 1, 0.68, 1)";

export function ConnectCommunityCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-name="card"
      className="relative box-border flex h-[221px] w-[380px] shrink-0 cursor-pointer flex-col items-start gap-[24px] overflow-clip rounded-[12px] bg-[#19191c] p-[36px]"
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: hovered ? "#FF8A00" : "#525259",
        boxShadow: hovered ? "inset 0 -80px 110px -42px rgba(255, 138, 0, 0.32)" : "none",
        transition: `border-color 280ms ${easeOut}, box-shadow 280ms ${easeOut}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          opacity: hovered ? 1 : 0,
          transition: `opacity 280ms ${easeOut}`,
        }}
        aria-hidden
      >
        <div className="absolute left-[35px] top-[74px] h-[247px] w-[328px] max-w-[calc(100%-70px)]">
          <div className="absolute max-w-none" style={{ inset: "-68.83% -51.83%" }}>
            <img alt="" className="block size-full max-w-none" src={imgCommunityHoverEllipse} />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col items-start gap-[24px]">
        <div
          className="relative flex size-[52px] shrink-0 items-center justify-center rounded-full"
          style={{
            backgroundColor: hovered ? "#FF8A00" : "#121214",
            transition: `background-color 280ms ${easeOut}`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{
              opacity: hovered ? 0 : 1,
              transition: `opacity 280ms ${easeOut}`,
            }}
            aria-hidden={hovered}
          >
            <EmblemTransparentPrimary className="relative size-[42px] shrink-0" />
          </div>
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{
              opacity: hovered ? 1 : 0,
              transition: `opacity 280ms ${easeOut}`,
            }}
            aria-hidden={!hovered}
          >
            <div className="relative size-[24px] shrink-0 overflow-hidden">
              <div className="absolute inset-[16.67%_5.56%]">
                <img alt="" className="absolute block size-full max-w-none" src={imgCommunityHoverGo} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[8px] leading-[0]">
          <Typography
            typoName="Normal/Title/4/Bold"
            colorToken="Grayscale/Solid/G10"
            productTheme="md"
            as="p"
            className="w-full leading-[1.7]"
          >
            CONNECT Community
          </Typography>
          <Typography
            typoName="Normal/Body/1/Normal"
            colorToken="Grayscale/Opacity/BLevel6"
            productTheme="md"
            as="p"
            className="w-full leading-[1.7]"
          >
            Get information from other users
          </Typography>
        </div>
      </div>
    </div>
  );
}
