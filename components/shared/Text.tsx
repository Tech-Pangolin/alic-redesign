interface TextProps {
    children: React.ReactNode;
    size?: "md" | "lg" | "base" | "sm";
    color?: "navy" | "cream" | "gold";
    serif?: boolean;
}

const sizeClass = {
    sm: "text-sm",
    base: "text-base",
    md: "text-md",  
    lg: "text-lg",
  } as const;
  
  const colorClass = {
    navy: "text-alic-navy",
    cream: "text-alic-cream",
    gold: "text-alic-gold",
  } as const;

export default function Text({ children, size = "base", color = "navy", serif = false }: TextProps) {
    return (
        <p className={`${sizeClass[size]} ${colorClass[color]} ${serif ? "font-serif" : "font-sans"}`}>
            {children}
        </p>
    );
}