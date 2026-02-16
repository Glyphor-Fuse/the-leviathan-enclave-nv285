
import React from "react";
import { cn } from "@/lib/utils";
import { Fish, Leaf, Star } from 'lucide-react';

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-300 shadow-none p-4 bg-card border border-border/5 hover:border-primary/20 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-primary mb-2">
           {icon}
        </div>
        <div className="font-display font-bold text-foreground-200 mb-2 mt-2 text-xl">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default function ImmersiveFeatures() {
  const items = [
    {
      title: "360° Aquarium Views",
      description: "Dine surrounded by a living, breathing coral reef ecosystem containing over 4,000 marine species.",
      header: <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background-900 to-background-800 bg-cover bg-center opacity-80 group-hover/bento:opacity-100 transition-opacity" style={{backgroundImage: 'url(/images/aquarium-view.png)'}} />,
      icon: <Fish className="h-6 w-6" />,
      className: "md:col-span-2",
    },
    {
      title: "Sustainable Sourcing",
      description: "Every catch is traceable. We partner with marine biologists to ensure our menu supports ocean health.",
      header: <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background-900 to-background-800 bg-cover bg-center opacity-80 group-hover/bento:opacity-100 transition-opacity" style={{backgroundImage: 'url(/images/sustainable.png)'}} />,
      icon: <Leaf className="h-6 w-6" />,
      className: "md:col-span-1",
    },
    {
      title: "Hydro-Lab Kitchen",
      description: "Our chefs use high-pressure extraction and saltwater curing in our on-site culinary laboratory.",
      header: <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background-900 to-background-800 bg-cover bg-center opacity-80 group-hover/bento:opacity-100 transition-opacity" style={{backgroundImage: 'url(/images/kitchen-lab.png)'}} />,
      icon: <Star className="h-6 w-6" />,
      className: "md:col-span-1",
    },
    {
      title: "Water Filtration",
      description: "Advanced bio-filtration systems keep our water crystal clear and our marine residents thriving.",
      header: <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background-900 to-background-800 bg-cover bg-center opacity-80 group-hover/bento:opacity-100 transition-opacity" style={{backgroundImage: 'url(/images/filtration.png)'}} />,
      icon: <Star className="h-6 w-6" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 bg-secondary/10 relative">
       {/* Background ambient light */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
       
       <div className="container mx-auto px-4 relative z-10">
         <h2 className="text-3xl md:text-5xl font-display text-foreground mb-12 text-center">The Enclave Experience</h2>
         <BentoGrid>
           {items.map((item, i) => (
             <BentoGridItem
               key={i}
               title={item.title}
               description={item.description}
               header={item.header}
               icon={item.icon}
               className={item.className}
             />
           ))}
         </BentoGrid>
       </div>
    </section>
  );
}
