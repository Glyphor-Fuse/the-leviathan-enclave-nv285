
import React from "react";
import { Anchor, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-primary mb-6">
              <Anchor className="w-8 h-8" />
              <span className="font-display text-2xl text-foreground">LEVIATHAN</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The world's premier deep-sea dining experience. 
              Sustainably sourced, technologically advanced, 
              luxuriously submerged.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-display mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">The Experience</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#reservation" className="hover:text-primary transition-colors">Reservations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Private Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-display mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>1-800-DEEP-SEA</li>
              <li>concierge@leviathan-enclave.com</li>
              <li>Pier 54, Submersible Dock B<br/>San Francisco, CA</li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-display mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/5 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Leviathan Enclave. All rights reserved. Depth certified.
        </div>
      </div>
    </footer>
  );
}
