import { assets } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <div className="bg-foreground">
            <footer className="px-8 py-6 m-10 font-sans text-alic-navy flex justify-between items-center rounded-2xl bg-background md:flex-row flex-col">
                <div className="flex flex-col md:items-start items-center gap-4">
                    <div>
                        <Link href="/">
                            <Image src={assets.logo.src} alt={assets.logo.alt} width={assets.logo.width} height={assets.logo.height} priority className="h-12 w-auto sm:h-[66px]" />
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
                        {Object.values(assets.social).map(img => {
                            return (
                                <li key={img.alt}>
                                    <div style={{ width: 42, height: 42 }}>
                                        <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="w-full h-full" />
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </footer>
        </div>
    );
}