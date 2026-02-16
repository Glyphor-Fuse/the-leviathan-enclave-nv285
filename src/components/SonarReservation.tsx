
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CircleCheck, Clock, Star, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TimeSlot = ({ time, available, selected, onClick }: { time: string, available: boolean, selected: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    disabled={!available}
    className={cn(
      "relative group flex items-center justify-center w-full p-3 text-sm font-medium transition-all duration-300 border rounded-md overflow-hidden",
      selected 
        ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(0,240,255,0.3)]" 
        : available
          ? "border-border/10 bg-background/5 text-foreground/70 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
          : "border-border/5 bg-transparent text-foreground/20 cursor-not-allowed opacity-50"
    )}
  >
    <span className="relative z-10">{time}</span>
    {selected && (
      <motion.div
        layoutId="selected-glow"
        className="absolute inset-0 bg-primary/10 blur-sm"
        transition={{ duration: 0.3 }}
      />
    )}
  </button>
);

const RadarScan = () => (
  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-20">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="w-full h-full origin-center bg-gradient-to-t from-transparent via-primary/20 to-transparent"
      style={{ clipPath: "polygon(50% 50%, 0 0, 100% 0)" }}
    />
    <div className="absolute inset-0 border border-primary/30 rounded-full" />
    <div className="absolute inset-[25%] border border-primary/10 rounded-full" />
    <div className="absolute inset-[50%] border border-primary/10 rounded-full" />
  </div>
);

export default function SonarReservation() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setStep(3);
    }, 2000);
  };

  const times = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

  return (
    <section id="reservation" className="py-24 bg-background relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">Secure Your Coordinates</h2>
            <p className="text-muted-foreground">Initiate sonar sequence to find availability.</p>
          </div>

          <div className="bg-card/50 backdrop-blur-md border border-border/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            
            <div className="relative z-10">
              {/* Progress Steps */}
              <div className="flex justify-center mb-12 space-x-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={cn("h-1 w-12 rounded-full transition-colors duration-500", step >= s ? "bg-primary" : "bg-background/10")} />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-sm uppercase tracking-widest text-primary/70 font-semibold">Select Date</label>
                        <div className="p-4 border border-border/10 rounded-xl bg-background/20">
                          {/* Mock Calendar - In real app use shadcn Calendar */}
                          <div className="grid grid-cols-7 gap-2 text-center text-sm">
                            {["S","M","T","W","T","F","S"].map(d => <span key={d} className="text-muted-foreground">{d}</span>)}
                            {Array.from({length: 30}).map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setDate(new Date())}
                                className={cn(
                                  "h-8 w-8 rounded-full flex items-center justify-center transition-colors",
                                  i === 15 ? "bg-primary text-foreground font-bold" : "text-foreground hover:bg-background/10"
                                )}
                              >
                                {i + 1}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-sm uppercase tracking-widest text-primary/70 font-semibold">Party Size</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[2, 4, 6, 8, 10, 12].map((g) => (
                            <button
                              key={g}
                              onClick={() => setGuests(g)}
                              className={cn(
                                "py-3 border rounded-lg transition-all",
                                guests === g 
                                  ? "border-primary bg-primary/10 text-primary" 
                                  : "border-border/10 hover:border-border/30 text-foreground"
                              )}
                            >
                              {g} ppl
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => setStep(2)}
                      className="w-full py-6 text-lg bg-background text-foreground hover:bg-background/90"
                    >
                      Find Tables
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="relative w-64 h-64 mb-8">
                      <RadarScan />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Star className="w-12 h-12 text-primary animate-pulse" />
                      </div>
                      {/* Simulated Blips */}
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute top-10 right-10 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00f0ff]" 
                      />
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-16 left-12 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00f0ff]" 
                      />
                    </div>
                    <p className="text-primary font-mono animate-pulse">Scanning availability...</p>
                    
                    {/* Auto advance for demo */}
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                      onAnimationComplete={() => setStep(3)}
                      className="h-1 bg-primary mt-4 rounded-full max-w-xs w-full"
                    />
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    <div className="text-center">
                      <h3 className="text-2xl text-foreground font-display mb-2">Availability Detected</h3>
                      <p className="text-muted-foreground">Select a time for your descent.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {times.map((t) => (
                        <TimeSlot
                          key={t}
                          time={t}
                          available={true}
                          selected={time === t}
                          onClick={() => setTime(t)}
                        />
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1 py-6 border-border/10 hover:bg-background/5 text-foreground">
                        Back
                      </Button>
                      <Button 
                        disabled={!time}
                        className="flex-1 py-6 bg-primary text-foreground hover:bg-primary/90 font-bold tracking-wide"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
