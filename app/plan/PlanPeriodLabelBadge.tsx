import { LabelBadge } from "@clovirtualfashion/components/badge";

/** Plan period chip — dark: fill Grayscale/Solid/G3, stroke G7 (`data-theme=dark` CSS vars). */
export function PlanPeriodLabelBadge({ text }: { text: string }) {
  return (
    <LabelBadge
      text={text}
      color="custom"
      variant="stroke"
      size="l"
      bgColor="var(--color-grayscale-solid-g3)"
      textColor="var(--color-grayscale-solid-g7)"
      strokeColor="var(--color-grayscale-solid-g7)"
      className="shrink-0"
    />
  );
}
