import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anna · 임시",
  description: "임시 페이지",
};

export default function AnnaPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 dark:bg-black">
      <main className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          /anna
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          임시 페이지
        </h1>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          나중에 내용을 채우면 됩니다.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
        >
          ← 홈으로
        </Link>
      </main>
    </div>
  );
}
