/**
 * Figma ooZfmJHT3eToaXmzD2a0Dd · node 5206:3319 (M375 - Plan - renewal)
 * 픽셀·토큰은 MCP `get_design_context` 출력 기준. 브레이크포인트: &lt; md(768px).
 */
import type { ReactNode } from "react";
import { Button } from "@clovirtualfashion/components/button";
import { Typography } from "@clovirtualfashion/components/typography";
import { AnnualToggle } from "./AnnualToggle";
import { PlanPeriodLabelBadge } from "./PlanPeriodLabelBadge";
import { StartNowDownloadDropdown } from "./StartNowDownloadDropdown";
import { TrustedByLogoMarquee } from "./TrustedByLogoMarquee";

const imgGroup41 = "https://www.figma.com/api/mcp/asset/ffcb3eed-51bb-41e0-8099-f2846fb22326";
const imgShape1 = "https://www.figma.com/api/mcp/asset/c314485b-d5ef-4b49-87fc-3887af13166e";
const imgSymbols = "https://www.figma.com/api/mcp/asset/505efbad-59fe-4543-b461-b976dffc985a";
const imgShape2 = "https://www.figma.com/api/mcp/asset/5102ce78-46a7-4eeb-8613-794d65dfa9b9";
const imgShape3 = "https://www.figma.com/api/mcp/asset/7501e10c-c141-40d0-ae1e-144784f3ddfe";
/** Figma ooZfmJHT3eToaXmzD2a0Dd · node 5235:3228 (Basic / Point · View more + New Tab icon) */
const imgCommunityViewMore5235 = "https://www.figma.com/api/mcp/asset/6151999d-5862-47d5-97d8-47c95abed50d";
const img02 = "https://www.figma.com/api/mcp/asset/f3625df9-968d-416a-990f-28b46e81f25b";
const img01 = "https://www.figma.com/api/mcp/asset/9ea41872-0f6f-4f8a-b773-ec08c97bb1c4";
const imgWordmark = "https://www.figma.com/api/mcp/asset/90f45a29-854a-4322-8d59-71a560729d25";
const imgShape5 = "https://www.figma.com/api/mcp/asset/d8f9362f-f0fb-47ea-8533-c0f7fb344c5f";

const PLAN_CARD_BORDER_STYLE = {
  borderWidth: 1,
  borderStyle: "solid" as const,
  borderColor: "#525259",
};

function EmblemTransparentPrimary42({ className }: { className?: string }) {
  return (
    <div className={className ?? "relative size-[42px]"} data-name="Emblem / Transparent / Primary">
      <div className="absolute inset-[20%_13.33%_20.42%_13.33%] overflow-clip">
        <div className="absolute inset-[0_-0.01%_0.02%_0]">
          <img alt="" className="absolute block size-full max-w-none" src={imgGroup41} />
        </div>
      </div>
    </div>
  );
}

function MobileFeatureList() {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex w-full items-center gap-[10px]">
          <div className="relative size-[18px] shrink-0">
            <div className="absolute inset-[19.44%_11.11%_13.89%_11.11%]">
              <img alt="" className="absolute block size-full max-w-none" src={imgShape1} />
            </div>
          </div>
          <Typography
            typoName="Normal/Body/3/Normal"
            colorToken="Grayscale/Solid/G8"
            productTheme="md"
            as="span"
            className="whitespace-nowrap leading-[1.7]"
          >
            14 day individual trial
          </Typography>
        </div>
      ))}
    </div>
  );
}

function MobilePriceBlock() {
  return (
    <div className="flex w-[195px] flex-col gap-[12px]">
      <div className="flex items-baseline gap-[8px]">
        <Typography
          typoName="UI/Headline/4/Bold"
          colorToken="Grayscale/Solid/G10"
          productTheme="md"
          as="span"
          className="shrink-0 whitespace-nowrap leading-[1.3]"
        >
          $99
        </Typography>
        <Typography
          typoName="Normal/Body/4/Normal"
          colorToken="Grayscale/Solid/G7"
          productTheme="md"
          as="span"
          className="whitespace-nowrap leading-[1.7]"
        >
          per month
        </Typography>
      </div>
      <MobileFeatureList />
    </div>
  );
}

type MobileCardCta = "start-now" | "verify" | "dual";

function MobilePlanCard420({
  title,
  headerRight,
  cta,
}: {
  title: string;
  headerRight: ReactNode;
  cta: MobileCardCta;
}) {
  const cardHeightClass = cta === "dual" ? "h-[480px]" : "h-[420px]";
  return (
    <div
      style={PLAN_CARD_BORDER_STYLE}
      className={`relative ${cardHeightClass} w-full shrink-0 overflow-clip rounded-[8px] bg-[#121214]`}
      data-name="card"
    >
      <div className="absolute left-[19px] top-[19px] flex w-[315px] flex-col gap-[19px]">
        <div className="flex w-full shrink-0 items-center justify-between">
          <Typography
            typoName="Normal/Headline/4/Normal"
            colorToken="Grayscale/Solid/G10"
            productTheme="md"
            as="p"
            className="leading-[1.7]"
          >
            {title}
          </Typography>
          {headerRight}
        </div>
        <Typography
          typoName="Normal/Body/4/Normal"
          colorToken="Grayscale/Solid/G7"
          productTheme="md"
          as="p"
          className="text-left leading-[1.7]"
        >
          A single user plan for an individual designer
        </Typography>
        <div className="h-px w-full shrink-0 bg-[#525259]" aria-hidden />
        <div className="w-[195px] shrink-0">
          <MobilePriceBlock />
        </div>
      </div>
      {cta === "start-now" && (
        <div className="absolute bottom-[19px] left-[19px] w-[315px]">
          <Button
            styleType="mono"
            size="l"
            radius="r1"
            variant="solid"
            type="button"
            style={{ width: "100%", minWidth: 0, boxSizing: "border-box" }}
          >
            Start Now
          </Button>
        </div>
      )}
      {cta === "verify" && (
        <div className="absolute bottom-[19px] left-[19px] w-[315px]">
          <Button
            styleType="mono"
            size="l"
            radius="r1"
            variant="solid"
            type="button"
            style={{ width: "100%", minWidth: 0, boxSizing: "border-box" }}
          >
            Verify
          </Button>
        </div>
      )}
      {cta === "dual" && (
        <div className="absolute bottom-[19px] left-[19px] flex w-[315px] flex-col gap-[12px]">
          <div className="w-full shrink-0">
            <StartNowDownloadDropdown buttonSize="l" />
          </div>
          <Button
            styleType="mono"
            size="l"
            radius="r1"
            variant="outlined"
            type="button"
            style={{
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box",
              whiteSpace: "nowrap",
            }}
          >
            Contact us for Team Trial
          </Button>
        </div>
      )}
    </div>
  );
}

function CommunityCard375() {
  return (
    <div
      style={PLAN_CARD_BORDER_STYLE}
      className="relative h-[219px] w-full shrink-0 select-none overflow-clip rounded-[8px] bg-[#19191c]"
    >
      <div className="absolute left-[19px] top-[19px] flex items-center rounded-[300px] bg-white p-[5px]">
        <EmblemTransparentPrimary42 className="relative size-[42px] shrink-0" />
      </div>
      <div className="absolute left-[19px] top-[91px] flex w-[275px] flex-col gap-[8px] leading-[0]">
        <Typography
          typoName="Normal/Title/5/Bold"
          colorToken="Grayscale/Solid/G10"
          productTheme="md"
          as="p"
          className="w-full leading-[1.7]"
        >
          CONNECT Community
        </Typography>
        <Typography
          typoName="Normal/Body/3/Normal"
          colorToken="Grayscale/Opacity/BLevel6"
          productTheme="md"
          as="p"
          className="w-full leading-[1.7]"
        >
          Get information from other users
        </Typography>
      </div>
      <button
        type="button"
        data-name="Basic / Point"
        data-node-id="5235:3228"
        className="group absolute bottom-[19px] left-[19px] m-0 flex min-h-[24px] cursor-pointer touch-manipulation appearance-none items-center justify-center gap-1 rounded-[4px] border border-solid border-[#FF8A00] bg-transparent px-3 py-0 text-left shadow-none outline-none transition-[background-color,border-color,box-shadow] duration-150 ease-out active:border-[#FF8A00] active:bg-[#FF8A00] active:shadow-[0_6px_18px_rgba(0,0,0,0.45)] focus-visible:ring-2 focus-visible:ring-[#FF8A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#19191c]"
        style={{ WebkitTapHighlightColor: "transparent" }}
        aria-label="View more"
      >
        <Typography
          typoName="UI/Button/4/Normal"
          colorToken="Primary"
          productTheme="md"
          as="span"
          className="whitespace-nowrap leading-[1.3] transition-colors duration-150 group-active:!text-white"
        >
          View more
        </Typography>
        <div className="relative size-[10px] shrink-0 [&_img]:transition-[filter] duration-150">
          <div className="absolute inset-[5.56%]">
            <img
              alt=""
              className="pointer-events-none absolute block size-full max-w-none group-active:brightness-0 group-active:invert"
              src={imgCommunityViewMore5235}
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default function PlanScreenMobile375() {
  return (
    <div
      className="relative mx-auto min-h-[5477px] w-[375px] max-w-[100vw] shrink-0 overflow-x-hidden bg-[#121214]"
      data-name="M375 - Plan - renewal"
      data-node-id="5206:3319"
    >
      <div
        className="absolute left-0 top-[136px] flex h-[80px] w-[375px] flex-col items-center justify-center gap-[2px] text-center leading-[0]"
        data-name="title"
        data-node-id="5206:4153"
      >
        <Typography
          typoName="Normal/Headline/4/Bold"
          colorToken="Grayscale/Solid/G9"
          productTheme="md"
          as="h1"
          className="leading-[1.7]"
        >
          Plan
        </Typography>
        <Typography
          typoName="Normal/Body/4/Normal"
          colorToken="Grayscale/Solid/G5"
          productTheme="md"
          as="p"
          className="min-w-full w-min leading-[1.7]"
        >
          Create with unparalleled precision and ease.
        </Typography>
      </div>

      <div className="absolute left-[10px] top-[256px] flex h-[1395px] w-[355px] flex-col items-center gap-[16px]">
        <Typography
          typoName="Normal/Subtitle/4/Normal"
          colorToken="Grayscale/Solid/G9"
          productTheme="md"
          as="h2"
          className="w-full text-center leading-[1.7]"
        >
          Lower Prices for Verified Plans
        </Typography>
        <div className="flex w-full flex-col items-start gap-[16px]">
          <MobilePlanCard420
            title="Personal"
            headerRight={<AnnualToggle />}
            cta="start-now"
          />
          <MobilePlanCard420
            title="Network Online"
            headerRight={<PlanPeriodLabelBadge text="Monthly" />}
            cta="start-now"
          />
          <MobilePlanCard420
            title="Network Online"
            headerRight={<PlanPeriodLabelBadge text="Annual" />}
            cta="dual"
          />
        </div>
      </div>

      <div className="absolute left-[10px] top-[1731px] flex h-[1335px] w-[355px] flex-col items-center gap-[16px]">
        <Typography
          typoName="Normal/Subtitle/4/Normal"
          colorToken="Grayscale/Solid/G9"
          productTheme="md"
          as="h2"
          className="w-full text-center leading-[1.7]"
        >
          Lower Prices for Verified Plans
        </Typography>
        <div className="flex w-full flex-col items-start gap-[16px]">
          <MobilePlanCard420 title="Student" headerRight={<AnnualToggle />} cta="verify" />
          <MobilePlanCard420
            title="Academics"
            headerRight={<PlanPeriodLabelBadge text="Monthly" />}
            cta="verify"
          />
          <MobilePlanCard420
            title="Indie"
            headerRight={<PlanPeriodLabelBadge text="Monthly" />}
            cta="verify"
          />
        </div>
      </div>

      <section
        className="absolute left-[10px] top-[3146px] h-[1027px] w-[355px] overflow-clip rounded-[20px] bg-[#19191c]"
        aria-label="Community"
        data-node-id="5228:3165"
      >
        <div className="absolute left-0 top-[32px] flex w-full justify-center px-3">
          <Typography
            typoName="Normal/Subtitle/4/Normal"
            colorToken="Grayscale/Solid/G9"
            productTheme="md"
            as="h2"
            className="w-full max-w-[320px] text-center leading-[1.7]"
          >
            Get more information via
          </Typography>
        </div>
        <div className="absolute left-[20px] top-[76px] flex w-[315px] flex-col items-start gap-[16px]">
          <CommunityCard375 />
          <CommunityCard375 />
          <CommunityCard375 />
          <CommunityCard375 />
        </div>
      </section>

      <div
        className="absolute left-0 top-[4253px] flex w-[375px] flex-col items-center gap-[20px] px-[10px] box-border"
        data-node-id="5248:2829"
      >
        <Typography
          typoName="Normal/Body/5/Normal"
          colorToken="Grayscale/Solid/G9"
          productTheme="md"
          as="p"
          className="w-full px-2 text-center leading-[1.7]"
        >
          Trusted every day by teams that build world-class software.
        </Typography>
        <div className="w-full min-w-0">
          <TrustedByLogoMarquee />
        </div>
      </div>

      <footer
        className="absolute left-0 top-[4430px] box-border flex min-h-[1047px] w-[375px] flex-col items-stretch overflow-x-hidden bg-black px-5 pb-10 pt-[60px]"
        data-name="footer"
        data-node-id="5248:2846"
      >
        <div className="flex w-full min-w-0 flex-col items-start gap-10">
          <div className="flex items-center gap-[7.317px]">
            <div className="relative size-[40.244px] shrink-0 overflow-clip">
              <div className="absolute inset-[0_4.74%_0.06%_5%]">
                <div className="absolute inset-[0.54%_0_0.6%_0]">
                  <div className="absolute inset-[30.38%_0_0.6%_0]">
                    <img alt="" className="absolute block size-full max-w-none" src={img02} />
                  </div>
                  <div className="absolute inset-[0.54%_0_49.97%_0]">
                    <img alt="" className="absolute block size-full max-w-none" src={img01} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[24.878px] w-[102.439px] shrink-0">
              <img alt="" className="absolute block size-full max-w-none" src={imgWordmark} />
            </div>
          </div>
          <div className="flex w-full min-w-0 flex-col items-start gap-5">
            <div className="flex w-full min-w-0 items-start gap-1">
              <div className="relative mt-0.5 size-[18px] shrink-0 overflow-clip">
                <div className="absolute inset-[5.56%_13.8%_5.56%_13.97%]">
                  <img alt="" className="absolute block size-full max-w-none" src={imgShape5} />
                </div>
              </div>
              <Typography
                typoName="Normal/Body/4/Normal"
                colorToken="Grayscale/Solid/G10"
                productTheme="md"
                as="p"
                className="min-w-0 flex-1 text-left leading-[1.7] break-words"
              >
                Keep up to date with Marvelous Designer
              </Typography>
            </div>
            <Button
              styleType="point"
              variant="solid"
              size="m"
              radius="r1"
              type="button"
              style={{
                height: 28,
                minWidth: 80,
                boxSizing: "border-box",
                paddingLeft: 14,
                paddingRight: 14,
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>

        <div className="mt-[60px] flex w-full min-w-0 flex-col gap-10">
          <div className="flex w-full min-w-0 items-start gap-16 leading-[0]">
            <Typography
              typoName="Normal/Subtitle/5/Bold"
              colorToken="Grayscale/Solid/G6"
              productTheme="md"
              as="p"
              className="w-[72px] shrink-0 text-left leading-[1.7]"
            >
              Feature
            </Typography>
            <div className="flex min-w-0 flex-1 flex-col gap-[14px] text-left">
              {["All", "Rigging", "Effortless & Intuitive", "Seamless Workflow", "Boost Assets"].map((t) => (
                <Typography
                  key={t}
                  typoName="Normal/Body/4/Normal"
                  colorToken="Grayscale/Solid/G9"
                  productTheme="md"
                  as="span"
                  className="block break-words leading-[1.7]"
                >
                  {t}
                </Typography>
              ))}
            </div>
          </div>
          <div className="flex w-full min-w-0 items-start gap-16 leading-[0]">
            <Typography
              typoName="Normal/Subtitle/5/Bold"
              colorToken="Grayscale/Solid/G6"
              productTheme="md"
              as="p"
              className="w-[72px] shrink-0 text-left leading-[1.7]"
            >
              Solution
            </Typography>
            <div className="flex min-w-0 flex-1 flex-col gap-[14px] text-left">
              {["Testtest", "Testtest", "Testtest"].map((t, i) => (
                <Typography
                  key={i}
                  typoName="Normal/Body/4/Normal"
                  colorToken="Grayscale/Solid/G9"
                  productTheme="md"
                  as="span"
                  className="block break-words leading-[1.7]"
                >
                  {t}
                </Typography>
              ))}
            </div>
          </div>
          <div className="flex w-full min-w-0 items-start gap-16 leading-[0]">
            <Typography
              typoName="Normal/Subtitle/5/Bold"
              colorToken="Grayscale/Solid/G6"
              productTheme="md"
              as="p"
              className="w-[72px] shrink-0 text-left leading-[1.7]"
            >
              Plan
            </Typography>
            <div className="flex min-w-0 flex-1 flex-col gap-[14px] text-left">
              {["Testtest", "Testtest", "Testtest", "Testtest"].map((t, i) => (
                <Typography
                  key={i}
                  typoName="Normal/Body/4/Normal"
                  colorToken="Grayscale/Solid/G9"
                  productTheme="md"
                  as="span"
                  className="block break-words leading-[1.7]"
                >
                  {t}
                </Typography>
              ))}
            </div>
          </div>
          <div className="flex w-full min-w-0 items-start gap-16 leading-[0]">
            <Typography
              typoName="Normal/Subtitle/5/Bold"
              colorToken="Grayscale/Solid/G6"
              productTheme="md"
              as="p"
              className="w-[72px] shrink-0 text-left leading-[1.7]"
            >
              Resources
            </Typography>
            <div className="flex min-w-0 flex-1 flex-col gap-[14px] text-left">
              {["Testtest", "Testtest", "Testtest", "Testtest"].map((t, i) => (
                <Typography
                  key={i}
                  typoName="Normal/Body/4/Normal"
                  colorToken="Grayscale/Solid/G9"
                  productTheme="md"
                  as="span"
                  className="block break-words leading-[1.7]"
                >
                  {t}
                </Typography>
              ))}
            </div>
          </div>
          <div className="flex w-full min-w-0 items-start gap-16 leading-[0]">
            <Typography
              typoName="Normal/Subtitle/5/Bold"
              colorToken="Grayscale/Solid/G6"
              productTheme="md"
              as="p"
              className="w-[72px] shrink-0 text-left leading-[1.7]"
            >
              Download
            </Typography>
            <div className="flex min-w-0 flex-1 flex-col gap-[14px] text-left">
              <Typography
                typoName="Normal/Body/4/Normal"
                colorToken="Grayscale/Solid/G9"
                productTheme="md"
                as="span"
                className="block break-words leading-[1.7]"
              >
                Download 2026.0
              </Typography>
              <Typography
                typoName="Normal/Body/4/Normal"
                colorToken="Grayscale/Solid/G9"
                productTheme="md"
                as="span"
                className="block break-words leading-[1.7]"
              >
                Download Previous Version
              </Typography>
            </div>
          </div>
        </div>

        <div
          className="mt-10 h-[1px] w-full min-w-0 shrink-0 bg-[#525259]"
          aria-hidden
        />

        <div className="mt-8 flex w-full min-w-0 flex-wrap items-center justify-start gap-x-2 gap-y-1 text-left">
          <Typography typoName="Normal/Body/4/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
            Terms
          </Typography>
          <span className="select-none text-[12px] font-medium leading-[1.7] text-[#56565b]">|</span>
          <Typography typoName="Normal/Body/4/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
            Privacy Policy
          </Typography>
          <span className="select-none text-[12px] font-medium leading-[1.7] text-[#56565b]">|</span>
          <Typography typoName="Normal/Body/4/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
            Cookie
          </Typography>
          <span className="select-none text-[12px] font-medium leading-[1.7] text-[#56565b]">|</span>
          <Typography typoName="Normal/Body/4/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
            Reseller
          </Typography>
          <span className="select-none text-[12px] font-medium leading-[1.7] text-[#56565b]">|</span>
          <Typography typoName="Normal/Body/4/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
            Career
          </Typography>
        </div>
        <Typography
          typoName="Normal/Body/5/Normal"
          colorToken="Grayscale/Solid/G7"
          productTheme="md"
          as="p"
          className="mt-6 w-full min-w-0 text-left leading-[1.7] break-words"
        >
          Copyright © 2009 - 2026 CLO Virtual Fashion. All Rights Reserved.
        </Typography>
      </footer>

      <header
        className="absolute left-0 top-0 z-20 h-[100px] w-[375px] overflow-clip"
        data-name="header_gnb"
        data-node-id="5228:2890"
      >
        <div className="absolute left-[20px] top-[40px] flex w-[335px] items-center justify-between rounded-[20px] py-[12px]">
          <div className="relative h-[36px] w-[32px] shrink-0">
            <div className="absolute inset-[0_-0.01%_0.31%_0]">
              <img alt="Marvelous Designer" className="absolute block size-full max-w-none" src={imgSymbols} />
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            <Button styleType="mono" size="s" radius="r1" variant="outlined" type="button">
              Start for free →
            </Button>
            <div className="relative size-[24px] shrink-0">
              <div className="absolute inset-[2.78%]">
                <img alt="" className="absolute block size-full max-w-none" src={imgShape2} />
              </div>
            </div>
            <div className="relative size-[24px] shrink-0">
              <div className="absolute inset-[2.77%_2.78%_2.79%_2.78%]">
                <img alt="" className="absolute block size-full max-w-none" src={imgShape3} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
