export default function SectionRow({ children, backgroundColor = "navy" }: { children: React.ReactNode, backgroundColor?: "cream" | "navy" }) {
    return (
        <section className={`flex w-full flex-col items-center justify-between ${backgroundColor === "cream" ? "bg-alic-cream" : "bg-alic-navy"} py-[85px] px-[40px]`}>
            {children}
        </section>
    )
}