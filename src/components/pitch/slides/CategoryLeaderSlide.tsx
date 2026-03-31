import SlideLayout from "../SlideLayout";
import { Eye, Heart, Search, Target, BarChart3, FileText, Layers, ArrowUp, Star, TrendingUp } from "lucide-react";

const controls = [
  { icon: Eye, label: "Attention" },
  { icon: Heart, label: "Audience Trust" },
  { icon: Search, label: "Seller Discovery" },
  { icon: Target, label: "Advertiser Demand" },
  { icon: BarChart3, label: "Rankings & Data" },
  { icon: FileText, label: "Category Narrative" },
  { icon: Layers, label: "Premium Intel Products" },
];

const ladder = [
  { label: "Media Brand", color: "primary", opacity: "40" },
  { label: "Audience Concentration", color: "primary", opacity: "50" },
  { label: "Advertiser Network", color: "primary", opacity: "60" },
  { label: "Industry Data", color: "accent", opacity: "50" },
  { label: "Premium Intelligence", color: "accent", opacity: "60" },
  { label: "Category Platform Value", color: "accent", opacity: "80" },
];

const comparables = [
  { name: "TechCrunch", niche: "Startups", outcome: "Acquired $30M → Verizon portfolio" },
  { name: "The Block", niche: "Crypto", outcome: "Scaled to $60M+ revenue" },
  { name: "PitchBook", niche: "VC/PE Data", outcome: "Acquired for $225M by Morningstar" },
  { name: "Business of Fashion", niche: "Fashion", outcome: "$100M+ valuation, events + data" },
  { name: "The Information", niche: "Tech", outcome: "$100M+ valuation, premium subs" },
];

const CategoryLeaderSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-0 left-[400px] w-[700px] h-[700px] bg-accent/[0.03] rounded-full blur-[200px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">13 — CATEGORY LEADERSHIP</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Own the attention. Own the data. <span className="font-display italic text-[54px] text-primary">Own the category economics.</span>
      </h2>
      <p className="slide-subhead mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Value accrues to the trusted media, discovery, and intelligence layers that shape attention and advertiser demand.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Controls + Ladder */}
        <div className="w-[580px] flex flex-col gap-4">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-[15px] font-bold text-muted-foreground uppercase tracking-wider mb-3 block">What Flipr.Media Controls</span>
            <div className="flex flex-wrap gap-2.5">
              {controls.map((c, i) => (
                <div key={c.label} className="glass-card px-3.5 py-2.5 flex items-center gap-2 opacity-0 animate-fade-up" style={{ animationDelay: `${0.25 + i * 0.04}s` }}>
                  <c.icon className="w-4 h-4 text-primary" />
                  <span className="text-[15px] font-semibold text-foreground">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Value Ladder */}
          <div className="flex-1 flex flex-col justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <span className="text-[15px] font-bold text-muted-foreground uppercase tracking-wider mb-3 block">Value Creation Ladder</span>
            <div className="flex flex-col gap-2">
              {ladder.map((step, i) => {
                const width = 55 + i * 8;
                return (
                  <div key={step.label} className="flex items-center gap-3">
                    <div
                      className={`h-11 rounded-lg bg-${step.color}/15 border border-${step.color}/20 flex items-center px-4 transition-all`}
                      style={{ width: `${width}%` }}
                    >
                      <span className={`text-[15px] font-semibold text-${step.color}`}>{step.label}</span>
                    </div>
                    {i < ladder.length - 1 && <ArrowUp className="w-3.5 h-3.5 text-muted-foreground/80 rotate-0 shrink-0" />}
                    {i === ladder.length - 1 && (
                      <div className="glass-card px-2.5 py-1 border-accent/30">
                        <Star className="w-3.5 h-3.5 text-accent inline mr-1" />
                        <span className="text-[14px] font-bold text-accent">HIGH VALUE</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Comparables */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <span className="text-[15px] font-bold text-muted-foreground uppercase tracking-wider mb-3 block">Comparable Category Leaders</span>
            <div className="flex flex-col gap-2.5">
              {comparables.map((c, i) => (
                <div key={c.name} className="glass-card px-4 py-3 flex items-center gap-3.5 opacity-0 animate-fade-up" style={{ animationDelay: `${0.6 + i * 0.05}s` }}>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[16px] font-bold text-foreground">{c.name}</span>
                      <span className="text-[14px] px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground font-medium">{c.niche}</span>
                    </div>
                    <span className="text-[15px] text-primary/90">{c.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 border-accent/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.85s' }}>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-[15px] font-bold text-foreground">Strategic Value Drivers</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {["Strategic acquisition appeal", "Media + commerce + data multiples", "Defensible niche leadership", "Future optionality: sponsorship, intelligence, infrastructure"].map(d => (
                <div key={d} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                  <span className="text-[15px] text-muted-foreground">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 border-primary/20 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <p className="text-[15px] text-muted-foreground leading-relaxed italic">
              "Whatnot's <span className="text-primary font-bold not-italic">$4.97B valuation</span> signals deep investor conviction in live commerce infrastructure. The media layer serving this ecosystem is still unclaimed."
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default CategoryLeaderSlide;
