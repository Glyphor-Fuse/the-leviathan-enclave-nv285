
import React from "react";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      quote: "Dining here isn't just a meal; it's a descent into another world. The bioluminescent ambiance is unmatched.",
      name: "Elena V.",
      role: "Food Critic, The Times",
    },
    {
      quote: "The Sonar Reservation system was surprisingly fun, but the Abyssal King Crab was the real showstopper.",
      name: "Marcus J.",
      role: "Michelin Guide",
    },
    {
      quote: "High-tech luxury meets primitive flavors. The chef's use of saltwater curing changes everything.",
      name: "Sarah L.",
      role: "Marine Biologist",
    }
  ];

  return (
    <section className="py-24 bg-card border-t border-border/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-16 text-foreground">Voices from the Deep</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-background/50 p-8 rounded-2xl border border-border/5 relative hover:border-primary/30 transition-colors group">
              <div className="absolute -top-4 left-8 bg-card px-4 text-primary border border-border/5 rounded-full py-4">
                 <div className="flex gap-1">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                 </div>
              </div>
              <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">"{review.quote}"</p>
              <div>
                <h4 className="text-foreground font-display text-xl">{review.name}</h4>
                <p className="text-sm text-primary/70 uppercase tracking-wider mt-1">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
