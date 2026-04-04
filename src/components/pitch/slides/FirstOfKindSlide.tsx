import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { Shield, Users, BarChart3, Megaphone, Database, Award, ShoppingCart, Eye, Wrench, Building2, Target } from "lucide-react";

const existsToday = [
  { icon: ShoppingCart, label: "Marketplaces", desc: "Facilitate transactions" },
  { icon: Eye, label: "Social Platforms", desc: "Host attention" },
  { icon: Wrench, label: "Seller Tools", desc: "Help sellers operate" },
  { icon: Building2, label: "Agencies", desc: "Help with marketing" },
];

const ecosystemNodes = [
  { label: "Whatnot", angle: 0 },
  { label: "TikTok Shop", angle: 45 },
  { label: "Sellers", angle: 90 },
  { label: "Brands", angle: 135 },
  { label: "eBay Live", angle: 180 },
  { label: "Audiences", angle: 225 },
  { label: "Advertisers", angle: 270 },
  { label: "Agencies", angle: 315 },
];

const moats = [
  { icon: Target, title: "First-Mover Advantage", desc: "No incumbent — the category is ours to define" },
  { icon: Users, title: "Audience Aggregation", desc: "Consolidating fragmented attention into one destination" },
  { icon: Award, title: "Editorial Brand Equity", desc: "Trust compounds — hard for late entrants to replicate" },
  { icon: BarChart3, title: "Proprietary Data Moat", desc: "Rankings, performance indexes, and benchmarks" },
  { icon: Megaphone, title: "Advertiser Lock-In", desc: "Direct brand relationships with high switching costs" },
  { icon: Database, title: "Data Products & Lead Gen", desc: "High-margin intelligence that scales with audience" },
];

const FirstOfKindSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="strong" glowPosition="center" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">06 — FIRST-OF-ITS-KIND</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Not another media site. <span className="font-display italic text-[58px] text-muted-foreground/90">A category-level infrastructure play.</span>
      </h2>
      <p className="slide-subhead mb-8 max-w-[900px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        No one else is building the editorial, discovery, and advertiser layer for live selling.
      </p>

      <div className="flex flex-1 gap-8 min-h-0">
        {/* Left */}
        <div className="w-[680px] flex flex-col gap-5">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-[16px] font-semibold text-muted-foreground uppercase tracking-wide mb-3 block">What exists today</span>
            <div className="grid grid-cols-4 gap-3">
              {existsToday.map((item, i) => (
                <div key={item.label} className="glass-card p-4 text-center border-muted-foreground/10 opacity-0 animate-fade-up" style={{ animationDelay: `${0.25 + i * 0.04}s` }}>
                  <item.icon className="w-6 h-6 text-muted-foreground/70 mx-auto mb-2" />
                  <div className="text-[17px] font-semibold text-foreground">{item.label}</div>
                  <div className="text-[15px] text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="text-center text-[17px] text-destructive/80 font-medium mt-2.5 italic">
              None cover, rank, or organize the live selling industry
            </div>
          </div>

          {/* Ecosystem map */}
          <div className="flex-1 relative opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[380px] h-[380px]">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380">
                  {ecosystemNodes.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const cx = 190 + Math.cos(rad) * 155;
                    const cy = 190 + Math.sin(rad) * 155;
                    return (
                      <line key={node.label} x1="190" y1="190" x2={cx} y2={cy}
                        stroke="hsl(var(--primary))" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
                    );
                  })}
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-[120px] h-[120px] rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-[24px] font-black text-primary">Flipr</div>
                      <div className="text-[16px] text-primary/70 font-medium">.Media</div>
                    </div>
                  </div>
                </div>

                {ecosystemNodes.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = 190 + Math.cos(rad) * 155;
                  const y = 190 + Math.sin(rad) * 155;
                  return (
                    <div key={node.label} className="absolute z-10"
                      style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}>
                      <div className="glass-card px-3.5 py-2 text-[16px] font-semibold text-foreground whitespace-nowrap">
                        {node.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="glass-card p-5 border-primary/20 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-[18px] text-foreground font-medium text-center leading-relaxed">
              "Flipr.Media sits above the platforms as the category's <span className="text-primary font-bold">editorial layer, discovery engine, and advertiser gateway</span>."
            </p>
          </div>
        </div>

        {/* Right: Why defensible */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-[20px] font-bold text-foreground">Why This Is Defensible</span>
            <div className="h-px flex-1 bg-primary/15" />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {moats.map((moat, i) => (
              <div
                key={moat.title}
                className="glass-card p-5 flex items-start gap-4 opacity-0 animate-fade-up hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${0.6 + i * 0.06}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <moat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-foreground mb-0.5">{moat.title}</h3>
                  <p className="text-[17px] text-muted-foreground leading-relaxed">{moat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default FirstOfKindSlide;