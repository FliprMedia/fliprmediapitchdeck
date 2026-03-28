import SlideLayout from "../SlideLayout";
import { X, Check } from "lucide-react";

const beforeItems = [
  "Sellers rely on Reddit threads and Discord for news",
  "No centralized discovery for live shows",
  "Brands have no way to reach live sellers",
  "No rankings, data, or industry benchmarks",
  "No press coverage of live commerce ecosystem",
];

const afterItems = [
  "One platform for all live commerce news and intel",
  "Discover live shows across every major platform",
  "Brands reach sellers through targeted media + ads",
  "Industry-first rankings, indexes, and data",
  "Dedicated editorial team covering the space",
];

const FirstOfKindSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

    <div className="relative z-10 flex flex-col h-full px-20 py-16">
      <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">06 — FIRST-OF-ITS-KIND</div>
      <h2 className="text-[48px] font-bold leading-tight mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        What Makes Flipr <span className="text-primary">Unprecedented</span>
      </h2>

      <div className="flex gap-8 flex-1">
        {/* Before */}
        <div className="flex-1 glass-card p-8 border-destructive/20 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-6 text-destructive/80">Before Flipr</h3>
          <div className="space-y-5">
            {beforeItems.map(item => (
              <div key={item} className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive/60 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* After */}
        <div className="flex-1 glass-card p-8 border-primary/20 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold mb-6 text-primary">After Flipr</h3>
          <div className="space-y-5">
            {afterItems.map(item => (
              <div key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Venn diagram */}
        <div className="w-[400px] flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-[350px] h-[350px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary mt-[-20px]">Media</span>
            </div>
            <div className="absolute bottom-0 left-[30px] w-[200px] h-[200px] rounded-full border-2 border-accent/30 bg-accent/5 flex items-end justify-center pb-6">
              <span className="text-sm font-semibold text-accent">Data</span>
            </div>
            <div className="absolute bottom-0 right-[30px] w-[200px] h-[200px] rounded-full border-2 border-foreground/20 bg-foreground/5 flex items-end justify-center pb-6">
              <span className="text-sm font-semibold text-foreground/70">Commerce</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center mt-8">
                <div className="text-lg font-black text-primary">Flipr</div>
                <div className="text-xs text-muted-foreground">.Media</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default FirstOfKindSlide;
