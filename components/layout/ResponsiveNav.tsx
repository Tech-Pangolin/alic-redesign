"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CtaButton from "@/components/shared/CtaButton";

type NavLink = { label: string; href: string };
type NavGroup = { label: string; href: string; items: NavLink[] };

const navGroups: NavGroup[] = [
    {
        label: "About",
        href: "/about",
        items: [
            { label: "Our Story", href: "/about/our-story" },
            { label: "Mission & Vision", href: "/about/mission-vision" },
            { label: "Community Impact", href: "/about/community-impact" },
        ],
    },
    {
        label: "Solutions",
        href: "/solutions/livebalanced",
        items: [
            { label: "LiveBalanced\u2122", href: "/solutions/livebalanced" },
            {
                label: "LiveBalanced\u2122 Studio",
                href: "/solutions/livebalanced-studio",
            },
            { label: "Reinsurance", href: "/solutions/reinsurance" },
        ],
    },
    {
        label: "Resources",
        href: "/resources/employees",
        items: [
            { label: "Employees", href: "/resources/employees" },
            { label: "Employers", href: "/resources/employers" },
            { label: "Carriers & Brokers", href: "/resources/carriers-brokers" },
        ],
    },
];

const navStyles = {
    trigger:
        "inline-flex items-center gap-1 px-3 py-2 font-sans text-alic-gold transition-colors hover:text-alic-navy",
    submenuLink:
        "block whitespace-nowrap rounded-md px-3 py-2 font-sans text-alic-navy transition-colors hover:bg-alic-warm/40",
    mobileGroupButton:
        "flex w-full items-center justify-between border-b border-alic-gold/20 py-4 text-lg text-alic-gold",
    mobileSubLink: "block py-3 pl-4 text-base text-alic-navy",
} as const;

export default function ResponsiveNav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openGroup, setOpenGroup] = useState<string | null>(null);
    const close = () => {
        setMobileOpen(false);
        setOpenGroup(null);
    };

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

                <nav
                    aria-label="Site"
                    className="hidden flex-1 items-center justify-center md:flex"
                >
                    <ul className="flex items-center gap-1 lg:gap-2">
                        {navGroups.map((group) => (
                            <li key={group.label} className="group relative flex items-center">
                                <Link
                                    href={group.href}
                                    className={navStyles.trigger}
                                    aria-haspopup="true"
                                >
                                    {group.label}
                                    <span aria-hidden="true" className="text-lg leading-none">
                                        ▾
                                    </span>
                                </Link>
                                <div className="invisible absolute left-1/2 top-full z-50 min-w-[14rem] -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                                    <ul className="rounded-xl border border-alic-gold/20 bg-alic-cream p-2 shadow-lg">
                                        {group.items.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className={navStyles.submenuLink}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                        <li className="flex items-center">
                            <Link href="/contact" className={navStyles.trigger}>
                                Contact
                            </Link>
                        </li>
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
                            {navGroups.map((group) => {
                                const expanded = openGroup === group.label;
                                return (
                                    <li key={group.label}>
                                        <button
                                            type="button"
                                            className={navStyles.mobileGroupButton}
                                            aria-expanded={expanded}
                                            onClick={() =>
                                                setOpenGroup(
                                                    expanded ? null : group.label,
                                                )
                                            }
                                        >
                                            {group.label}
                                            <span aria-hidden="true" className="text-sm">
                                                {expanded ? "−" : "+"}
                                            </span>
                                        </button>
                                        {expanded ? (
                                            <ul className="border-b border-alic-gold/20 pb-2">
                                                {group.items.map((item) => (
                                                    <li key={item.href}>
                                                        <Link
                                                            href={item.href}
                                                            className={navStyles.mobileSubLink}
                                                            onClick={close}
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </li>
                                );
                            })}
                            <li>
                                <Link
                                    href="/contact"
                                    className={navStyles.mobileGroupButton}
                                    onClick={close}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <CtaButton className="mt-6 w-full justify-center" onClick={close} />
                    </nav>
                </div>
            ) : null}
        </header>
    );
}
