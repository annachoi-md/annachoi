import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Poppins } from "next/font/google";
import "@clovirtualfashion/components/styles/globals.css";
import "./trusted-logos-marquee.css";
import "./plan-viewport.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plan · Marvelous Designer",
  description: "Choosing the right plan for you",
};

export default function PlanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${poppins.className} w-full min-w-0 flex-1 overflow-x-auto bg-[#121214]`}
      data-theme="dark"
      data-theme-product="md"
      style={
        {
          fontFamily: `${poppins.style.fontFamily}, Pretendard, system-ui, sans-serif`,
          // MD: Yellow/Solid/Yellow6 = #FF8A00 (CLO token hex differs in dark theme)
          ["--color-yellow-solid-yellow6" as string]: "#FF8A00",
          ["--color-primary" as string]: "#FF8A00",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
