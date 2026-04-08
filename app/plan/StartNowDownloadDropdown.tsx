"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Poppins } from "next/font/google";
import { Button } from "@clovirtualfashion/components/button";
import { DropdownDownIcon, DropdownUpIcon } from "@clovirtualfashion/components/icon";
import { MenuList, type MenuListItem } from "@clovirtualfashion/components/menuList";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const GAP_PX = 4;
/** Trigger보다 좁으면 L 사이즈 라벨이 말줄임 됨 — 한 줄 전체 표시용 최소 너비 */
const MENU_LIST_MIN_WIDTH_PX = 300;

const MENU_ITEMS: MenuListItem[] = [
  { id: "mac", label: "Mac Download" },
  { id: "win", label: "Windows Download" },
];

type TriggerSize = "l" | "xl";

/** 뷰포트 기준 앵커: `placement="bottom-left"` + `offset`으로 버튼 하단에서 간격 적용 */
type ViewportAnchor = [left: number, bottom: number];

function readButtonViewportAnchor(root: HTMLElement | null): ViewportAnchor | null {
  if (!root) return null;
  const btn = root.querySelector("button");
  const el = btn instanceof HTMLButtonElement ? btn : root;
  const r = el.getBoundingClientRect();
  return [r.left, r.bottom];
}

export function StartNowDownloadDropdown({
  buttonSize = "xl",
}: {
  /** M375 plan card (Figma 5228:3003): `l` — desktop row keeps `xl`. */
  buttonSize?: TriggerSize;
} = {}) {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState<ViewportAnchor | null>(null);
  const [portalClient, setPortalClient] = useState(false);
  const [menuPortalHost, setMenuPortalHost] = useState<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  /** MenuList는 RefObject만 받으므로, state 노드와 동기화 */
  const portalContainerRef = useRef<HTMLDivElement | null>(null);
  portalContainerRef.current = menuPortalHost;

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setOpen((o) => !o);
  }, []);

  /** 열릴 때·스크롤·리사이즈마다 뷰포트 기준 [left, bottom] 갱신 → 메뉴가 버튼 아래 4px에 고정 */
  useLayoutEffect(() => {
    if (!open) {
      setAnchor(null);
      return;
    }
    const sync = () => {
      const next = readButtonViewportAnchor(wrapRef.current);
      if (next) setAnchor(next);
    };
    sync();
    window.addEventListener("scroll", sync, true);
    window.addEventListener("resize", sync);
    const ro = new ResizeObserver(sync);
    const node = wrapRef.current;
    if (node) ro.observe(node);
    return () => {
      window.removeEventListener("scroll", sync, true);
      window.removeEventListener("resize", sync);
      ro.disconnect();
    };
  }, [open]);

  useEffect(() => {
    setPortalClient(true);
  }, []);

  /** 커스텀 portalContainer 사용 시 라이브러리가 menu-portal에 data-theme을 안 붙임 → 다크 강제 (MenuList 포털은 useEffect에서 생성) */
  useEffect(() => {
    if (!open || !menuPortalHost) return;
    const apply = () => {
      const portal = menuPortalHost.querySelector('[role="menu-portal"]');
      if (portal instanceof HTMLElement) {
        portal.setAttribute("data-theme", "dark");
        portal.setAttribute("data-theme-product", "md");
      }
    };
    apply();
    const id = requestAnimationFrame(() => apply());
    const mo = new MutationObserver(apply);
    mo.observe(menuPortalHost, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(id);
      mo.disconnect();
    };
  }, [open, menuPortalHost, anchor]);

  /** M375: 트리거와 같은 너비. 데스크톱 좁은 열: 최소 너비로 오른쪽으로 펼침. */
  const matchWidth = buttonSize === "l";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <>
      {portalClient
        ? createPortal(
            <div
              ref={setMenuPortalHost}
              className="pointer-events-none"
              data-theme="dark"
              data-theme-product="md"
              style={{
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 999998,
              }}
              aria-hidden
            />,
            document.body,
          )
        : null}
      <div ref={wrapRef} className="relative z-10 w-full">
      <Button
        styleType={open ? "point" : "mono"}
        size={buttonSize}
        radius="r1"
        variant="solid"
        type="button"
        iconAfter={open ? DropdownUpIcon : DropdownDownIcon}
        aria-expanded={open}
        aria-haspopup="menu"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        style={{
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
          whiteSpace: "nowrap",
        }}
      >
        Start Now
      </Button>
      <MenuList
        isOpen={open && anchor !== null && menuPortalHost !== null}
        size="l"
        items={MENU_ITEMS}
        containerRef={wrapRef}
        portalContainer={portalContainerRef}
        placement="bottom-left"
        offset={GAP_PX}
        position={anchor ?? undefined}
        matchWidth={matchWidth}
        width={matchWidth ? undefined : MENU_LIST_MIN_WIDTH_PX}
        portalZIndex={999999}
        closeOnClickOutside
        onClose={closeMenu}
        onMenuEvent={(params) => {
          if (params.type === "click") closeMenu();
        }}
        data-theme="dark"
        data-theme-product="md"
        aria-label="Download options"
        className={`${poppins.className} pointer-events-auto [&_.truncate]:overflow-visible [&_.truncate]:text-clip [&_.truncate]:whitespace-nowrap`}
        style={{
          fontFamily: `${poppins.style.fontFamily}, Pretendard, system-ui, sans-serif`,
        }}
      />
      </div>
    </>
  );
}
