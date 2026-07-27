import { assets } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <div className="bg-foreground">
            <footer className="m-10 flex flex-col items-center justify-between rounded-2xl bg-background px-8 py-6 font-sans text-alic-navy md:flex-row">
                <div className="flex flex-col items-center gap-4 md:items-start">
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
                                            className="h-full w-full"
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
