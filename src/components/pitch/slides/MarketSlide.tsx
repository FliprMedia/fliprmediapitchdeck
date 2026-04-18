import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { TrendingUp, DollarSign, Globe, Layers, Megaphone } from "lucide-react";

const tamLayers = [
  { label: "TAM", title: "Global Live + Social Commerce", value: "$1.48T+", sub: "Social commerce ecosystem (2025)", size: 420, borderColor: "border-secondary/25", textColor: "text-secondary" },
  { label: "SAM", title: "US Live Selling + Media & Ad Spend", value: "$20B+", sub: "US livestream commerce + adjacent ad market", size: 300, borderColor: "border-primary/30", textColor: "text-primary" },
  { label: "SOM", title: "Early Revenue Opportunity", value: "$5–15M", sub: "Ads, sponsorships, premium, data", size: 170, borderColor: "border-primary/50", textColor: "text-primary", filled: true },
];

const stats = [
  { icon: Globe, value: "$172.86B", label: "Global live commerce market", sub: "2025 estimate" },
  { icon: TrendingUp, value: "$230.28B", label: "Expected 2026 market", sub: "33% YoY growth" },
  { icon: DollarSign, value: "$1.48T", label: "Global social commerce", sub: "2025 market size" },
  { icon: Layers, value: "$14.64B", label: "US livestream ecommerce", sub: "2025 sales" },
];

const somChannels = [
  "Advertising", "Sponsorships", "Premium Profiles", "Newsletter", 
  "Featured Placements", "Research & Data",
];

const MarketSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="strong" glowPosition="center" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="mb-6">
        <div className="slide-label mb-3 opacity-0 animate-fade-up">04 — MARKET OPPORTUNITY</div>
        <h2 className="slide-headline mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          A giant market with{" "}
          <span className="font-display italic text-[58px] text-primary">no media layer yet.</span>
        </h2>
        <p className="text-[17px] text-foreground/85 leading-[1.55] max-w-[1200px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Every major industry eventually gets a dominant trade publication. That publication captures the advertising dollars, the sponsorship dollars, and the subscription dollars of everyone who needs to reach that industry's audience. <span className="text-primary font-semibold">Live selling is that industry right now. The market is enormous and the media slot is completely empty.</span>
        </p>
      </div>

      <div className="flex-1 flex gap-10">
        {/* Left: TAM/SAM/SOM */}
        <div className="w-[520px] flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative" style={{ width: 420, height: 420 }}>
            {tamLayers.map((layer) => {
              const offset = (420 - layer.size) / 2;
              return (
                <div
                  key={layer.label}
                  className={`absolute rounded-full border-2 ${layer.borderColor} ${layer.filled ? 'bg-primary/8' : ''}`}
                  style={{ width: layer.size, height: layer.size, top: offset, left: offset }}
                />
              );
            })}

            {/* TAM — within outer ring band (y: 0–60) */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: 8 }}>
              <div className="text-[11px] font-mono tracking-[0.2em] text-secondary leading-none mb-1">TAM</div>
              <div className="text-[18px] font-black text-secondary leading-none mb-1">$1.48T+</div>
              <div className="text-[10px] text-muted-foreground leading-tight max-w-[260px] mx-auto">Global Live + Social Commerce</div>
            </div>

            {/* SAM — within middle ring band (y: 60–125) */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: 68 }}>
              <div className="text-[11px] font-mono tracking-[0.2em] text-primary leading-none mb-1">SAM</div>
              <div className="text-[16px] font-black text-primary leading-none mb-1">$20B+</div>
              <div className="text-[10px] text-muted-foreground leading-tight max-w-[180px] mx-auto">US Live Selling + Media & Ad Spend</div>
            </div>

            {/* SOM — centered in innermost circle (170px) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-[11px] font-mono tracking-[0.2em] text-primary leading-none mb-1.5">SOM</div>
              <div className="text-[24px] font-black text-primary leading-none mb-1.5">$5–15M</div>
              <div className="text-[10px] text-muted-foreground leading-tight max-w-[130px] mx-auto">Early Revenue Opportunity</div>
            </div>
          </div>
        </div>

        {/* Right: Stats + SOM channels */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={s.label} className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: `${0.2 + i * 0.06}s` }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[16px] text-muted-foreground font-mono">{s.sub}</span>
                </div>
                <div className="text-[30px] font-black text-primary">{s.value}</div>
                <div className="text-[17px] text-muted-foreground mt-0.5 font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-[16px] font-mono text-muted-foreground tracking-widest mb-3 font-semibold">SOM REVENUE CHANNELS</div>
            <div className="flex flex-wrap gap-2.5">
              {somChannels.map(c => (
                <span key={c} className="px-5 py-2.5 rounded-full bg-primary/8 border border-primary/15 text-[17px] font-semibold text-primary">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-5 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Megaphone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-[18px] font-bold text-foreground mb-1">Why the media layer captures outsized value</div>
                <p className="text-[17px] text-muted-foreground leading-relaxed">
                  As live commerce matures, value accrues to the trusted media, discovery, and intelligence layers that shape attention, rankings, and advertiser demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default MarketSlide;