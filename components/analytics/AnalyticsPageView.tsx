"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/ga";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    window.gtag?.("config", GA_MEASUREMENT_ID, { page_path: pathname });
  }, [pathname]);

  return null;
}
