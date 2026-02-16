import React from "react";
import { cn } from "@/lib/utils";

interface CardType {
  title: string;
  src: string;
}

const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered,
}: {
  card: CardType;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-2xl relative bg-card overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out border border-border/5",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity"
    />
    <div
      className={cn(
        "absolute inset-0 bg-background/60 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-background-50 to-background-200 font-display">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

export default function MenuGallery() {
  const items = [
    { title: "Abyssal King Crab", src: "/images/crab.png" },
    { title: "Bioluminescent Jelly", src: "/images/jelly-dessert.png" },
    { title: "Midnight Oysters", src: "/images/oysters.png" },
    { title: "Trench-Aged Tuna", src: "/images/tuna.png" },
    { title: "Thermal Vent Lobster", src: "/images/lobster.png" },
    { title: "Coral Reef Salad", src: "/images/salad.png" },
  ];

  return (
    <section className="py-24 bg-background relative" id="menu">
       {/* Background accent */}
       <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
       
       <div className="container mx-auto px-4 relative z-10">
         <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">Chef's Collection</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Sourced from the deepest, coldest waters. Prepared with techniques as old as the tides and as new as tomorrow.
            </p>
         </div>
         <FocusCards cards={items} />
       </div>
    </section>
  );
}
