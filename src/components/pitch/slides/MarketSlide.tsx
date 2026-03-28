import SlideLayout from "../SlideLayout";
import { TrendingUp, DollarSign, Globe, Layers, Megaphone } from "lucide-react";

const tamLayers = [
  { label: "TAM", title: "Global Live + Social Commerce", value: "$1.48T+", sub: "Social commerce ecosystem (2025)", size: 420, borderColor: "border-secondary/25", textColor: "text-secondary" },
  { label: "SAM", title: "US Live Selling + Media & Ad Spend", value: "$20B+", sub: "US livestream commerce + adjacent ad market", size: 300, borderColor: "border-primary/30", textColor: "text-primary" },
  { label: "SOM", title: "Early Revenue Opportunity", value: "$5–15M", sub: "Ads, sponsorships, premium, data, lead gen", size: 170, borderColor: "border-primary/50", textColor: "text-primary", filled: true },
];

const stats = [
  { icon: Globe, value: "$172.86B", label: "Global live commerce market", sub: "2025 estimate" },
  { icon: TrendingUp, value: "$230.28B", label: "Expected 2026 market", sub: "33% YoY growth" },
  { icon: DollarSign, value: "$1.48T", label: "Global social commerce", sub: "2025 market size" },
  { icon: Layers, value: "$14.64B", label: "US livestream ecommerce", sub: "2025 sales" },
];

const somChannels = [
  "Advertising", "Sponsorships", "Premium Profiles", "Newsletter", 
  "Featured Placements", "Research & Data", "Lead Generation",
];

const MarketSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-[100px] left-[300px] w-[500px] h-[500px] bg-accent/[0.035] rounded-full blur-[180px]" />
    <div className="absolute bottom-[50px] right-[200px] w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[150px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="mb-6">
        <div className="slide-label mb-3 opacity-0 animate-fade-up">04 — MARKET OPPORTUNITY</div>
        <h2 className="slide-headline mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          A large and expanding market with multiple{" "}
          <span className="font-display italic text-[50px] text-primary">value layers.</span>
        </h2>
      </div>

      {/* Main content */}
      <div className="flex-1 flex gap-10">
        {/* Left: TAM/SAM/SOM concentric circles */}
        <div className="w-[520px] flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative" style={{ width: 420, height: 420 }}>
            {tamLayers.map((layer) => {
              const offset = (420 - layer.size) / 2;
              return (
                <div
                  key={layer.label}
                  className={`absolute rounded-full border-2 ${layer.borderColor} flex flex-col items-center justify-center ${layer.filled ? 'bg-primary/8' : ''}`}
                  style={{ width: layer.size, height: layer.size, top: offset, left: offset }}
                >
                  {layer.label === "TAM" && (
                    <div className="absolute top-5 text-center">
                      <div className={`text-xs font-mono tracking-widest ${layer.textColor} mb-1`}>{layer.label}</div>
                      <div className={`text-2xl font-black ${layer.textColor}`}>{layer.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5 max-w-[200px]">{layer.title}</div>
                    </div>
                  )}
                  {layer.label === "SAM" && (
                    <div className="absolute top-4 text-center">
                      <div className={`text-xs font-mono tracking-widest ${layer.textColor} mb-1`}>{layer.label}</div>
                      <div className={`text-xl font-black ${layer.textColor}`}>{layer.value}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 max-w-[160px]">{layer.title}</div>
                    </div>
                  )}
                  {layer.label === "SOM" && (
                    <div className="text-center">
                      <div className={`text-xs font-mono tracking-widest ${layer.textColor} mb-1`}>{layer.label}</div>
                      <div className={`text-xl font-black ${layer.textColor}`}>{layer.value}</div>
                      <div className="text-[9px] text-muted-foreground mt-0.5 max-w-[120px] leading-tight">{layer.title}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Stats + SOM channels + Why media matters */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Stat callout grid */}
          <div className="grid grid-cols-2 gap-3.5">
            {stats.map((s, i) => (
              <div key={s.label} className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: `${0.2 + i * 0.06}s` }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{s.sub}</span>
                </div>
                <div className="text-2xl font-black text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* SOM channels */}
          <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-xs font-mono text-muted-foreground tracking-widest mb-3">SOM REVENUE CHANNELS</div>
            <div className="flex flex-wrap gap-2">
              {somChannels.map(c => (
                <span key={c} className="px-3.5 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-xs font-medium text-primary">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Why media layer matters */}
          <div className="glass-card p-5 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Megaphone className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground mb-1">Why the media layer matters</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Even a small share of attention and advertising inside a fast-growing ecosystem can create substantial enterprise value. 
                  The company that owns audience, data, rankings, and advertiser access in live commerce will build a highly defensible position.
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
