import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { TrendingUp, Globe, Layers } from "lucide-react";

const tamLayers = [
  { label: "TAM", size: 420, borderColor: "border-secondary/25" },
  { label: "SAM", size: 300, borderColor: "border-primary/30" },
  { label: "SOM", size: 170, borderColor: "border-primary/50", filled: true },
];

const stats = [
  { icon: Globe, value: "$172.86B", label: "Global live commerce in 2025" },
  { icon: TrendingUp, value: "$230.28B", label: "Expected market in 2026 — 33% YoY growth" },
  { icon: Layers, value: "$14.64B", label: "US livestream ecommerce in 2025" },
];

const MarketSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="strong" glowPosition="center" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="mb-6">
        <div className="slide-label mb-3 opacity-0 animate-fade-up">09 — MARKET OPPORTUNITY</div>
        <h2 className="slide-headline mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          A giant market with{" "}
          <span className="font-display italic text-[58px] text-primary">no media layer yet.</span>
        </h2>
        <p className="text-[19px] text-foreground/85 leading-[1.55] max-w-[1300px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Every major industry eventually gets its dominant trade publication — and that publication captures advertising, sponsorship, and subscription dollars from everyone who needs to reach its audience. Live selling is enormous, growing fast, and the media slot is empty.
        </p>
      </div>

      <div className="flex-1 flex gap-12 items-center">
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

            {/* TAM label */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: 14 }}>
              <div className="text-[12px] font-mono tracking-[0.25em] text-secondary leading-none mb-1.5">TAM</div>
              <div className="text-[20px] font-black text-secondary leading-none mb-1">$1.48T+</div>
              <div className="text-[11px] text-muted-foreground leading-tight max-w-[260px] mx-auto">Global Live + Social Commerce</div>
            </div>

            {/* SAM label */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: 76 }}>
              <div className="text-[12px] font-mono tracking-[0.25em] text-primary leading-none mb-1.5">SAM</div>
              <div className="text-[18px] font-black text-primary leading-none mb-1">$20B+</div>
              <div className="text-[11px] text-muted-foreground leading-tight max-w-[180px] mx-auto">US Live Selling Market</div>
            </div>

            {/* SOM label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-[12px] font-mono tracking-[0.25em] text-primary leading-none mb-1.5">SOM</div>
              <div className="text-[28px] font-black text-primary leading-none mb-1.5">$5–15M</div>
              <div className="text-[11px] text-muted-foreground leading-tight max-w-[130px] mx-auto">Early Revenue Opportunity</div>
            </div>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="flex-1 flex flex-col gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className="glass-card p-6 flex items-center gap-5 opacity-0 animate-fade-up" style={{ animationDelay: `${0.25 + i * 0.08}s` }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-[36px] font-black text-primary leading-none mb-1.5">{s.value}</div>
                <div className="text-[18px] text-muted-foreground font-medium">{s.label}</div>
              </div>
            </div>
          ))}

          <div className="glass-card p-6 border-primary/20 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <p className="text-[18px] text-foreground/90 leading-relaxed">
              <span className="text-primary font-bold">A trade publication in a fast-growing category becomes valuable</span> because it captures the advertising, sponsorship, and intelligence spend of an entire industry. That is the prize.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default MarketSlide;
