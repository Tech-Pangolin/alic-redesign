"use client";

import { assets } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DARK_FOOTER_ROUTES = ["/solutions/livebalanced-studio"];

export default function SiteFooter() {
    const pathname = usePathname();
    const dark = DARK_FOOTER_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`),
    );

    const outerClass = dark ? "bg-alic-deep" : "bg-foreground";
    const cardClass = dark
        ? "bg-alic-navy text-alic-cream"
        : "bg-background text-alic-navy";

    return (
        <div className={outerClass}>
            <footer
                className={`px-8 py-6 m-10 font-sans flex justify-between items-center rounded-2xl md:flex-row flex-col ${cardClass}`}
            >
                <div className="flex flex-col md:items-start items-center gap-4">
                    <div>
                        <Link href="/">
                            <Image
                                src={assets.logo.src}
                                alt={assets.logo.alt}
                                width={assets.logo.width}
                                height={assets.logo.height}
                                priority
                                className="h-12 w-auto sm:h-[66px]"
                            />
                        </Link>
                    </div>
                    <div>
                        <p className="font-normal">
                            © 2026 Atlanta Life Insurance Company
                        </p>
                    </div>
                </div>
                <div className="my-4">
                    <ul className="flex items-center gap-4">
                        {Object.values(assets.social).map((img) => {
                            return (
                                <li key={img.alt}>
                                    <a
                                        href={img.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={img.alt}
                                        className="block"
                                        style={{ width: 42, height: 42 }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt=""
                                            width={img.width}
                                            height={img.height}
                                            className="w-full h-full"
                                        />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </footer>
        </div>
    );
}
