/** Trusted-by strip + CSS marquee — shared by desktop (1920) and mobile (375) plan screens. */

const imgSuckerpunch2X =
  "https://www.figma.com/api/mcp/asset/5a689cc3-2397-4396-8a49-ecd3f6f54a72";
const imgMicrosoft2X =
  "https://www.figma.com/api/mcp/asset/811df34c-653a-49a5-851e-9b9fe9dfa1aa";
const imgPlaystation2X =
  "https://www.figma.com/api/mcp/asset/f7f292b5-0c27-4098-b31c-e0dd3303bf8c";
const imgHbo2X = "https://www.figma.com/api/mcp/asset/197fa665-f319-4da0-b6a6-361175e5f693";
const imgWbGames2X =
  "https://www.figma.com/api/mcp/asset/20827977-f5e8-43aa-a768-6d2137eccfb3";
const imgDexterStudiosB12X =
  "https://www.figma.com/api/mcp/asset/b594c63f-33fc-4004-bc0d-3d7ac4d0b0d2";
const imgNcsoft2X =
  "https://www.figma.com/api/mcp/asset/b16ada62-7aaa-463c-8d81-c3fa736b1265";
const imgPanasonic2X =
  "https://www.figma.com/api/mcp/asset/aba500cc-df03-498c-8d6e-4e19eaefddfd";
const imgIkea2X = "https://www.figma.com/api/mcp/asset/638cd308-e22e-489b-b71a-e989d5ac3bf2";
const imgBlur2X = "https://www.figma.com/api/mcp/asset/4dc1ab62-037d-4e55-943d-d8d04d9108b6";

const TRUSTED_LOGO_STRIP: { src: string; box: string }[] = [
  { src: imgSuckerpunch2X, box: "relative h-[40px] w-[53px] shrink-0" },
  { src: imgMicrosoft2X, box: "relative h-[60px] w-[120px] shrink-0" },
  { src: imgPlaystation2X, box: "relative h-[40px] w-[52.5px] shrink-0" },
  { src: imgHbo2X, box: "relative h-[28px] w-[68px] shrink-0" },
  { src: imgWbGames2X, box: "relative h-[45px] w-[43px] shrink-0" },
  { src: imgDexterStudiosB12X, box: "relative h-[28px] w-[79.5px] shrink-0" },
  { src: imgNcsoft2X, box: "relative h-[30px] w-[120px] shrink-0" },
  { src: imgPanasonic2X, box: "relative h-[24px] w-[149.5px] shrink-0" },
  { src: imgIkea2X, box: "relative h-[45px] w-[88.5px] shrink-0" },
  { src: imgBlur2X, box: "relative h-[40px] w-[31px] shrink-0" },
];

export function TrustedByLogoMarquee() {
  return (
    <div
      className="relative h-[120px] w-full overflow-hidden"
      aria-label="Brands that trust Marvelous Designer"
    >
      <div className="trusted-by-logo-marquee-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-[80px] opacity-70"
            aria-hidden={copy === 1}
          >
            {TRUSTED_LOGO_STRIP.map((logo, i) => (
              <div key={`${copy}-${i}`} className={logo.box}>
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
