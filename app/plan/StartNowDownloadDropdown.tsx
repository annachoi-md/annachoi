"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@clovirtualfashion/components/button";
import { DropdownDownIcon, DropdownUpIcon } from "@clovirtualfashion/components/icon";

const GAP_PX = 4;

const MENU_ITEMS = [
  { id: "mac", label: "Mac Download" },
  { id: "win", label: "Window Download" },
] as const;

type MenuCoords = { top: number; left: number; width: number };

function getTriggerButton(root: HTMLElement | null): HTMLButtonElement | null {
  if (!root) return null;
  const btn = root.querySelector("button");
  return btn instanceof HTMLButtonElement ? btn : null;
}

export function StartNowDownloadDropdown() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<MenuCoords | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const measure = useCallback(() => {
    const root = wrapRef.current;
    if (!root) return;
    const btn = getTriggerButton(root);
    const r = (btn ?? root).getBoundingClientRect();
    setCoords({
      top: r.bottom + GAP_PX,
      left: r.left,
      width: r.width,
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      setCoords(null);
      return;
    }
    measure();
    const id = requestAnimationFrame(() => measure());
    return () => cancelAnimationFrame(id);
  }, [open, measure]);

  useEffect(() => {
    if (!open) return;

    const onDocMouseDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (wrapRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onScrollOrResize = () => measure();

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("scroll", onScrollOrResize, true);

    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("scroll", onScrollOrResize, true);
    };
  }, [open, measure]);

  const toggle = () => setOpen((v) => !v);

  const menu =
    mounted &&
    open &&
    coords &&
    createPortal(
      <div
        ref={menuRef}
        role="menu"
        aria-label="Download options"
        data-theme="dark"
        data-theme-product="md"
        className="box-border overflow-hidden rounded-[8px] bg-[#19191c] p-1 shadow-[0_6px_12px_rgba(0,0,0,0.32)]"
        style={{
          position: "fixed",
          top: coords.top,
          left: coords.left,
          width: coords.width,
          zIndex: 999999,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(255, 255, 255, 0.12)",
          color: "#ffffff",
        }}
      >
        <div className="flex w-full flex-col gap-0">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              className="m-0 box-border flex w-full items-center rounded px-3 py-2 text-left text-[14px] font-normal leading-normal text-white transition-colors hover:bg-[rgba(255,255,255,0.08)]"
              style={{ color: "#ffffff" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>,
      document.body,
    );

  return (
    <div ref={wrapRef} className="w-full">
      <Button
        styleType="mono"
        size="xl"
        radius="r1"
        variant="solid"
        type="button"
        iconAfter={open ? DropdownUpIcon : DropdownDownIcon}
        aria-expanded={open}
        aria-haspopup="menu"
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
      {menu}
    </div>
  );
}
