import { Button } from "@clovirtualfashion/components/button";
import { Typography } from "@clovirtualfashion/components/typography";
import { PlanPeriodLabelBadge } from "./PlanPeriodLabelBadge";
import { AnnualToggle } from "./AnnualToggle";
import { ConnectCommunityCard } from "./ConnectCommunityCard";
import { StartNowDownloadDropdown } from "./StartNowDownloadDropdown";
import { TrustedByLogoMarquee } from "./TrustedByLogoMarquee";
import { PlanDesktopResponsiveWrap } from "./PlanDesktopResponsiveWrap";
import PlanScreenMobile375 from "./PlanScreenMobile375";

/** Figma ooZfmJHT3eToaXmzD2a0Dd · node 5206:2697 — MCP asset URLs (token fallbacks = design values) */
const img02 = "https://www.figma.com/api/mcp/asset/126ad3b3-7406-461c-956a-ff7e70c302e6";
const img01 = "https://www.figma.com/api/mcp/asset/d134e5fb-1ab9-4587-815d-1eaa1069eb02";

const imgSymbols =
  "https://www.figma.com/api/mcp/asset/bd999d0f-569c-4916-99cd-cbcb61dc1c2f";
const imgWordmark =
  "https://www.figma.com/api/mcp/asset/8f3ffc10-594f-447a-9ed4-7b0d9f5d872c";
const imgVector =
  "https://www.figma.com/api/mcp/asset/e3e10ce6-067f-4d14-b192-5f4cd2a5477e";
const imgShape2 =
  "https://www.figma.com/api/mcp/asset/d4cbb014-5466-4249-ad6c-6473de8b2794";
const imgVector1 =
  "https://www.figma.com/api/mcp/asset/fd82712c-2517-40df-9dc7-255c5ef3af62";
const imgShape3 =
  "https://www.figma.com/api/mcp/asset/2edf5301-3041-4e7e-b4db-065dc850098e";
const imgWordmark1 =
  "https://www.figma.com/api/mcp/asset/eeae2142-0f46-4420-91b5-a127d83363a1";
const imgShape4 =
  "https://www.figma.com/api/mcp/asset/d0d80cf8-de55-42b9-883f-d8b59c535b55";
const imgVector309 =
  "https://www.figma.com/api/mcp/asset/dd9f82e1-69cd-4cda-84aa-dd9d35c34a9b";

function Symbol({ className }: { className?: string }) {
  return (
    <div className={className ?? "relative h-[56px] w-[50px]"}>
      <div className="absolute inset-[0.54%_0_0.6%_0]">
        <div className="absolute inset-[30.38%_0_0.6%_0]">
          <img alt="" className="absolute block size-full max-w-none" src={img02} />
        </div>
        <div className="absolute inset-[0.54%_0_49.97%_0]">
          <img alt="" className="absolute block size-full max-w-none" src={img01} />
        </div>
      </div>
    </div>
  );
}

function MdSymbolPrimary({ className }: { className?: string }) {
  return (
    <div className={className ?? "relative size-[18px] overflow-clip"}>
      <Symbol className="absolute inset-[0_4.74%_0.06%_5%]" />
    </div>
  );
}

/** Grayscale/Solid/G5 — inline border beats CLO/Tailwind cascade (avoids white `currentColor` stroke). */
const PLAN_CARD_BORDER_STYLE = {
  borderWidth: 1,
  borderStyle: "solid" as const,
  borderColor: "#525259",
};

function FeatureRows() {
  return (
    <div className="flex w-[195px] flex-col gap-[8px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex w-full items-center gap-[10px]">
          <div className="relative size-[18px] shrink-0">
            <div className="absolute inset-[19.44%_11.11%_13.89%_11.11%]">
              <img alt="" className="absolute block size-full max-w-none" src={imgShape3} />
            </div>
          </div>
          <Typography
            typoName="Normal/Body/2/Normal"
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

function PriceBlock() {
  return (
    <div className="flex w-[195px] flex-col gap-[20px]">
      <div className="flex items-center gap-[8px]">
        <Typography
          typoName="UI/Headline/2/Bold"
          colorToken="Grayscale/Solid/G10"
          productTheme="md"
          as="span"
          className="whitespace-nowrap leading-[1.3]"
        >
          $99
        </Typography>
        <div className="relative h-[52px] w-[74px] shrink-0">
          <Typography
            typoName="Normal/Body/3/Normal"
            colorToken="Grayscale/Solid/G7"
            productTheme="md"
            as="span"
            className="absolute left-0 top-[20px] w-[74px] leading-[1.7]"
          >
            per month
          </Typography>
        </div>
      </div>
      <FeatureRows />
    </div>
  );
}

const planCardClass =
  "relative box-border h-[593px] w-[508px] shrink-0 overflow-clip rounded-[12px] bg-[#121214]";

function PlanScreenDesktop() {
  return (
    <div
      className="relative mx-auto h-[3517px] w-[1920px] shrink-0 bg-[#121214]"
      data-name="W1920 - Plan - renewal"
      data-node-id="5206:2697"
    >
      {/* header_gnb · y=0 h=105 */}
      <header className="absolute left-0 top-0 h-[105px] w-[1920px] overflow-clip">
        <div className="absolute left-[40px] top-[40px] flex w-[1840px] items-center justify-between rounded-[20px] py-[12px]">
          <div className="flex w-[289px] shrink-0 items-center gap-[7.455px]">
            <div className="relative h-[41px] w-[147px] shrink-0">
              <div className="absolute inset-[0_75.15%_0_0]">
                <div className="absolute inset-[0_-0.01%_0.31%_0]">
                  <img alt="Marvelous Designer" className="absolute block size-full max-w-none" src={imgSymbols} />
                </div>
              </div>
              <div className="absolute inset-[19.31%_0_18.9%_29.99%]">
                <img alt="" className="absolute block size-full max-w-none" src={imgWordmark} />
              </div>
            </div>
          </div>
          <nav className="flex shrink-0 items-center gap-[40px]">
            <Typography typoName="Normal/Subtitle/4/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="whitespace-nowrap leading-[1.7]">
              Features
            </Typography>
            <Typography typoName="Normal/Subtitle/4/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="whitespace-nowrap leading-[1.7]">
              Plan
            </Typography>
            <Typography typoName="Normal/Subtitle/4/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="whitespace-nowrap leading-[1.7]">
              Enterprise
            </Typography>
            <div className="flex items-center">
              <Typography typoName="Normal/Subtitle/4/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="whitespace-nowrap leading-[1.7]">
                Resources
              </Typography>
              <div className="relative size-[24px] shrink-0 overflow-clip">
                <div className="absolute inset-[41.67%_33.33%]">
                  <div className="absolute inset-[-17.5%_-8.75%]">
                    <img alt="" className="block size-full max-w-none" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex shrink-0 items-center gap-[8px]">
            <Button styleType="mono" size="l" radius="r1" variant="outlined" type="button">
              Start for free →
            </Button>
            <Button styleType="mono" size="l" radius="r1" variant="ghost" type="button">
              Sign in
            </Button>
            <div className="relative size-[24px] shrink-0">
              <div className="absolute inset-[2.77%_2.78%_2.79%_2.78%]">
                <img alt="" className="absolute block size-full max-w-none" src={imgShape2} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* title · x=170 y=169 w=1580 h=80 */}
      <div className="absolute left-[170px] top-[169px] flex h-[80px] w-[1580px] flex-col items-center justify-center gap-[2px] text-center leading-[0]">
        <Typography
          typoName="Normal/Headline/1/Bold"
          colorToken="Grayscale/Solid/G10"
          productTheme="md"
          as="h1"
        >
          Plan
        </Typography>
        <Typography typoName="Normal/Body/3/Normal" colorToken="Grayscale/Solid/G7" productTheme="md" as="p" className="min-w-full w-min leading-[1.7]">
          Choosing the right plan for you
        </Typography>
      </div>

      {/* list row 1 · x=170 y=313 */}
      <div className="absolute left-[170px] top-[313px] flex w-[1580px] flex-col gap-[16px]">
        <Typography typoName="Normal/Subtitle/2/Normal" colorToken="Grayscale/Solid/G9" productTheme="md" as="h2" className="w-full leading-[1.7]">
          Lower Prices for Verified Plans
        </Typography>
        <div className="flex w-full shrink-0 items-start justify-center gap-[28px]">
          {/* Personal */}
          <div style={PLAN_CARD_BORDER_STYLE} className={planCardClass}>
            <Typography
              typoName="Normal/Body/3/Normal"
              colorToken="Grayscale/Solid/G7"
              productTheme="md"
              as="p"
              className="absolute left-[50px] top-[114px] whitespace-nowrap leading-[1.7]"
            >
              A single user plan for an individual designer
            </Typography>
            <div className="absolute left-[50px] top-[50px] flex w-[408px] items-center justify-between">
              <Typography typoName="Normal/Headline/2/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="p" className="leading-[1.7]">
                Personal
              </Typography>
              <AnnualToggle />
            </div>
            <div className="absolute left-[50px] top-[174px] h-0 w-[408px]">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block size-full max-w-none" src={imgVector1} />
              </div>
            </div>
            <div className="absolute left-[50px] top-[210px]">
              <PriceBlock />
            </div>
            <div className="absolute left-[50px] top-[499px] w-[408px]">
              <Button
                styleType="mono"
                size="xl"
                radius="r1"
                variant="solid"
                type="button"
                style={{ width: "100%", minWidth: 0, boxSizing: "border-box" }}
              >
                Start Now
              </Button>
            </div>
          </div>

          {/* Network Online · Monthly */}
          <div style={PLAN_CARD_BORDER_STYLE} className={planCardClass}>
            <div className="absolute left-[50px] top-[50px] flex w-[408px] items-center justify-between">
              <Typography typoName="Normal/Headline/2/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="p" className="leading-[1.7]">
                Network Online
              </Typography>
              <PlanPeriodLabelBadge text="Monthly" />
            </div>
            <Typography
              typoName="Normal/Body/3/Normal"
              colorToken="Grayscale/Solid/G7"
              productTheme="md"
              as="p"
              className="absolute left-[50px] top-[114px] whitespace-nowrap leading-[1.7]"
            >
              A single user plan for an individual designer
            </Typography>
            <div className="absolute left-[50px] top-[174px] h-0 w-[408px]">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block size-full max-w-none" src={imgVector1} />
              </div>
            </div>
            <div className="absolute left-[50px] top-[210px]">
              <PriceBlock />
            </div>
            <div className="absolute left-[50px] top-[499px] w-[408px]">
              <Button
                styleType="mono"
                size="xl"
                radius="r1"
                variant="solid"
                type="button"
                style={{ width: "100%", minWidth: 0, boxSizing: "border-box" }}
              >
                Start Now
              </Button>
            </div>
          </div>

          {/* Network Online · Annual */}
          <div style={PLAN_CARD_BORDER_STYLE} className={planCardClass}>
            <div className="absolute left-[50px] top-[50px] flex w-[408px] items-center justify-between">
              <Typography typoName="Normal/Headline/2/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="p" className="leading-[1.7]">
                Network Online
              </Typography>
              <PlanPeriodLabelBadge text="Annual" />
            </div>
            <Typography
              typoName="Normal/Body/3/Normal"
              colorToken="Grayscale/Solid/G7"
              productTheme="md"
              as="p"
              className="absolute left-[50px] top-[114px] whitespace-nowrap leading-[1.7]"
            >
              A single user plan for an individual designer
            </Typography>
            <div className="absolute left-[50px] top-[174px] h-0 w-[408px]">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block size-full max-w-none" src={imgVector1} />
              </div>
            </div>
            <div className="absolute left-[50px] top-[210px]">
              <PriceBlock />
            </div>
            {/* Card 508px: row slightly wider than 408 content so both xl buttons stay single-line */}
            <div className="absolute left-[40px] top-[499px] flex w-[428px] gap-[8px]">
              <div className="w-[150px] shrink-0">
                <StartNowDownloadDropdown />
              </div>
              <div className="w-[270px] shrink-0">
                <Button
                  styleType="mono"
                  size="xl"
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
            </div>
          </div>
        </div>
      </div>

      {/* list row 2 · y=1056 */}
      <div className="absolute left-[170px] top-[1056px] flex w-[1580px] flex-col gap-[16px]">
        <Typography typoName="Normal/Subtitle/2/Normal" colorToken="Grayscale/Solid/G9" productTheme="md" as="h2" className="w-full leading-[1.7]">
          Lower Prices for Verified Plans
        </Typography>
        <div className="flex w-full shrink-0 items-start justify-center gap-[28px]">
          {(["Student", "Academics", "Indie"] as const).map((name) => (
            <div key={name} style={PLAN_CARD_BORDER_STYLE} className={planCardClass}>
              <div className="absolute left-[50px] top-[50px] flex w-[408px] items-center justify-between">
                <Typography typoName="Normal/Headline/2/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="p" className="leading-[1.7]">
                  {name}
                </Typography>
              </div>
              <Typography
                typoName="Normal/Body/3/Normal"
                colorToken="Grayscale/Solid/G7"
                productTheme="md"
                as="p"
                className="absolute left-[50px] top-[114px] whitespace-nowrap leading-[1.7]"
              >
                A single user plan for an individual designer
              </Typography>
              <div className="absolute left-[50px] top-[174px] h-0 w-[408px]">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block size-full max-w-none" src={imgVector1} />
                </div>
              </div>
              <div className="absolute left-[50px] top-[210px]">
                <PriceBlock />
              </div>
              <div className="absolute left-[50px] top-[499px] w-[408px]">
                <Button
                  styleType="mono"
                  size="xl"
                  radius="r1"
                  variant="solid"
                  type="button"
                  style={{ width: "100%", minWidth: 0, boxSizing: "border-box" }}
                >
                  Verify
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community · x=20 y=1899 */}
      <section
        className="absolute left-[20px] top-[1899px] h-[539px] w-[1880px] overflow-clip rounded-[20px] bg-[#19191c]"
        aria-label="Community"
      >
        <Typography
          typoName="Normal/Headline/2/Normal"
          colorToken="Grayscale/Solid/G10"
          productTheme="md"
          as="h2"
          className="absolute inset-x-0 top-[100px] w-full whitespace-nowrap text-center leading-[1.7]"
        >
          Get more information via
        </Typography>
        <div className="absolute left-[150px] top-[218px] flex items-center gap-[20px]">
          <ConnectCommunityCard />
          <ConnectCommunityCard />
          <ConnectCommunityCard />
          <ConnectCommunityCard />
        </div>
      </section>

      {/* Logos · y=2638 h=171 */}
      <div className="absolute left-0 top-[2638px] flex w-[1920px] flex-col items-center gap-[20px]">
        <Typography typoName="Normal/Body/1/Normal" colorToken="Grayscale/Solid/G9" productTheme="md" as="p" className="w-full text-center leading-[1.7]">
          Trusted every day by teams that build world-class software.
        </Typography>
        <TrustedByLogoMarquee />
      </div>

      {/* Footer · y=2892 h=625 */}
      <footer className="absolute left-0 top-[2892px] flex w-[1920px] flex-col items-start gap-[65px] overflow-clip bg-black px-[80px] py-[120px]">
        <div className="flex h-[231px] w-[1760px] shrink-0 items-start justify-between">
          <div className="flex flex-col gap-[40px]">
            <div className="flex items-center gap-[10px]">
              <MdSymbolPrimary className="relative size-[55px] shrink-0 overflow-clip" />
              <div className="relative h-[34px] w-[140px] shrink-0">
                <img alt="" className="absolute block size-full max-w-none" src={imgWordmark1} />
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[4px]">
                <div className="relative size-[18px] shrink-0 overflow-clip">
                  <div className="absolute inset-[5.56%_13.8%_5.56%_13.97%]">
                    <img alt="" className="absolute block size-full max-w-none" src={imgShape4} />
                  </div>
                </div>
                <Typography typoName="Normal/Subtitle/5/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="p" className="whitespace-nowrap leading-[1.7]">
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
                  height: 36,
                  width: 107,
                  minWidth: 0,
                  boxSizing: "border-box",
                  paddingLeft: 18,
                  paddingRight: 18,
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>

          <div className="flex shrink-0 gap-[100px] leading-[0]">
            <div className="flex w-[136px] flex-col gap-[20px]">
              <Typography typoName="Normal/Subtitle/4/Bold" colorToken="Grayscale/Solid/G6" productTheme="md" as="p" className="w-full leading-[1.7]">
                Feature
              </Typography>
              <div className="flex w-full flex-col gap-[16px] whitespace-nowrap">
                {["All", "Rigging", "Effortless & Intuitive", "Seamless Workflow", "Boost Assets"].map((t) => (
                  <Typography key={t} typoName="Normal/Body/3/Normal" colorToken="Grayscale/Solid/G9" productTheme="md" as="span" className="leading-[1.7]">
                    {t}
                  </Typography>
                ))}
              </div>
            </div>
            <div className="flex w-[67px] flex-col gap-[20px]">
              <Typography typoName="Normal/Subtitle/4/Bold" colorToken="Grayscale/Solid/G6" productTheme="md" as="p" className="w-full leading-[1.7]">
                Solution
              </Typography>
              <div className="flex w-full flex-col gap-[16px] whitespace-nowrap">
                {["Testtest", "Testtest", "Testtest"].map((t, i) => (
                  <Typography key={i} typoName="Normal/Body/3/Normal" colorToken="Grayscale/Solid/G9" productTheme="md" as="span" className="leading-[1.7]">
                    {t}
                  </Typography>
                ))}
              </div>
            </div>
            <div className="w-[67px]">
              <Typography typoName="Normal/Subtitle/4/Bold" colorToken="Grayscale/Solid/G6" productTheme="md" as="p" className="leading-[1.7]">
                Plan
              </Typography>
            </div>
            <div className="flex w-[85px] flex-col gap-[20px]">
              <Typography typoName="Normal/Subtitle/4/Bold" colorToken="Grayscale/Solid/G6" productTheme="md" as="p" className="w-full leading-[1.7]">
                Resources
              </Typography>
              <div className="flex w-full flex-col gap-[16px] whitespace-nowrap">
                {["Testtest", "Testtest", "Testtest", "Testtest"].map((t, i) => (
                  <Typography key={i} typoName="Normal/Body/3/Normal" colorToken="Grayscale/Solid/G9" productTheme="md" as="span" className="leading-[1.7]">
                    {t}
                  </Typography>
                ))}
              </div>
            </div>
            <div className="flex w-[189px] flex-col gap-[20px]">
              <Typography typoName="Normal/Subtitle/4/Bold" colorToken="Grayscale/Solid/G6" productTheme="md" as="p" className="w-full leading-[1.7]">
                Download
              </Typography>
              <div className="flex w-full flex-col gap-[16px] whitespace-nowrap">
                <Typography typoName="Normal/Body/3/Normal" colorToken="Grayscale/Solid/G9" productTheme="md" as="span" className="leading-[1.7]">
                  Download 2026.0
                </Typography>
                <Typography typoName="Normal/Body/3/Normal" colorToken="Grayscale/Solid/G9" productTheme="md" as="span" className="leading-[1.7]">
                  Download Previous Version
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-0 w-[1760px] shrink-0">
          <div className="absolute inset-[-0.5px_0]">
            <img alt="" className="block size-full max-w-none" src={imgVector309} />
          </div>
        </div>

        <div className="flex w-full shrink-0 items-center justify-between leading-[0]">
          <p className="whitespace-pre text-[0px] text-white">
            <Typography typoName="Normal/Subtitle/5/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
              Terms
            </Typography>
            <span className="select-none text-[14px] font-medium leading-[1.7] text-[#56565b]">{`   I   `}</span>
            <Typography typoName="Normal/Subtitle/5/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
              Privacy Policy
            </Typography>
            <span className="select-none text-[14px] font-medium leading-[1.7] text-[#56565b]">{`   I   `}</span>
            <Typography typoName="Normal/Subtitle/5/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
              Cookie
            </Typography>
            <span className="select-none text-[14px] font-medium leading-[1.7] text-[#56565b]">{`   I   `}</span>
            <Typography typoName="Normal/Subtitle/5/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
              Reseller
            </Typography>
            <span className="select-none text-[14px] font-medium leading-[1.7] text-[#56565b]">{`   I   `}</span>
            <Typography typoName="Normal/Subtitle/5/Normal" colorToken="Grayscale/Solid/G10" productTheme="md" as="span" className="leading-[1.7]">
              Career
            </Typography>
          </p>
          <Typography typoName="Normal/Body/3/Normal" colorToken="Grayscale/Solid/G7" productTheme="md" as="p" className="whitespace-nowrap leading-[1.7]">
            Copyright © 2009 - 2026 CLO Virtual Fashion. All Rights Reserved.
          </Typography>
        </div>
      </footer>
    </div>
  );
}

export default function PlanScreen() {
  return (
    <>
      <div className="plan-view-desktop-1920 w-full min-w-0">
        <PlanDesktopResponsiveWrap>
          <PlanScreenDesktop />
        </PlanDesktopResponsiveWrap>
      </div>
      <div className="plan-view-mobile-375">
        <PlanScreenMobile375 />
      </div>
    </>
  );
}
