import Foundation from "@/components/home/Foundation";
import Hero from "@/components/home/Hero";
import InMotion from "@/components/home/InMotion";
import Purpose from "@/components/home/Purpose";
import Work from "@/components/home/Work";

export default function Home() {
    return (
        <main className="flex-1">
            <Hero />
            <Foundation />
            <Work />
            <InMotion />
            <Purpose />
        </main>
    );
}
