"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CtaButton from "@/components/shared/CtaButton";

const navItems = [
    { label: "About", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
] as const;

const navStyles = {
    desktop: "px-3 py-2 font-sans text-alic-gold transition-colors hover:text-alic-navy",
    mobile: "block border-b border-alic-gold/20 py-4 text-lg text-alic-gold",
} as const;

export default function ResponsiveNav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const close = () => setMobileOpen(false);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header className="sticky top-0 z-50 w-full bg-alic-cream shadow-md">
            <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
                <Link href="/" className="shrink-0" aria-label="Homepage">
                    <Image
                        src="/alic-logo.svg"
                        alt="ALIC Group"
                        width={209}
                        height={66}
                        priority
                        className="h-10 w-auto sm:h-12 lg:h-[66px]"
                    />
                </Link>

                <nav aria-label="Site" className="hidden flex-1 items-center justify-center md:flex">
                    <ul className="flex items-center gap-1 lg:gap-2">
                        {navItems.map((item) => (
                            <li key={item.href} className="flex items-center">
                                <Link href={item.href} className={navStyles.desktop}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-3 sm:gap-4">
                    <CtaButton className="hidden sm:inline-flex" />
                    <button
                        type="button"
                        className="inline-flex rounded-sm p-2 text-xl text-alic-gold md:hidden"
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {mobileOpen ? (
                <div className="md:hidden">
                    <button
                        type="button"
                        aria-label="Close menu"
                        className="fixed inset-0 z-40 bg-alic-navy/40"
                        onClick={close}
                    />
                    <nav
                        aria-label="Mobile"
                        className="mobile-nav-panel border-t border-alic-gold/20 bg-alic-cream px-4 pb-8 shadow-lg"
                    >
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={navStyles.mobile}
                                        onClick={close}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <CtaButton className="mt-6 w-full justify-center" onClick={close} />
                    </nav>
                </div>
            ) : null}
        </header>
    );
}
