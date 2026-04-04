import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { ShoppingBag, Eye, Building2, Megaphone, Tv, Briefcase, TrendingUp, DollarSign } from "lucide-react";

const personas = [
  {
    icon: Tv,
    title: "Sellers & Live Hosts",
    want: "Grow audience, get discovered, build credibility",
    why: "News, rankings, profiles, show discovery",
    monetize: "Premium profiles, featured placements",
    color: "primary",
  },
  {
    icon: Eye,
    title: "Buyers & Collectors",
    want: "Find shows, follow sellers, discover deals",
    why: "Live show discovery, seller spotlights",
    monetize: "Audience scale, ad impressions",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Brands",
    want: "Reach commerce creators, launch live campaigns",
    why: "Seller directory, sponsored content, intel",
    monetize: "Sponsored features, native ads",
    color: "accent",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    want: "Find sellers for campaigns, track trends",
    why: "Rankings, seller data, platform coverage",
    monetize: "Data products, lead gen",
    color: "accent",
  },
  {
    icon: ShoppingBag,
    title: "Platforms",
    want: "Attract sellers, showcase growth",
    why: "Industry press, platform coverage",
    monetize: "Sponsorships, partnerships",
    color: "primary",
  },
  {
    icon: Megaphone,
    title: "Advertisers",
    want: "Access niche commerce audiences",
    why: "Targeted ad placements, newsletter",
    monetize: "Display ads, sponsored slots",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Investors & Analysts",
    want: "Track growth, identify breakout sellers",
    why: "Industry data, trend reports",
    monetize: "Research, premium subs",
    color: "primary",
  },
];

const wheelNodes = personas.map((p, i) => ({
  label: p.title.split(" & ")[0],
  angle: (i * 360) / personas.length - 90,
}));

const AudienceSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="top-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">07 — AUDIENCE & USERS</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Seven distinct audiences. <span className="font-display italic text-[58px] text-primary">All monetizable.</span>
      </h2>
      <p className="text-[24px] text-muted-foreground font-semibold mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Every stakeholder in the live commerce value chain needs what Flipr.Media is building.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Audience Wheel */}
        <div className="w-[400px] flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-[360px] h-[360px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 360">
              {wheelNodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const cx = 180 + Math.cos(rad) * 145;
                const cy = 180 + Math.sin(rad) * 145;
                return (
                  <line key={node.label} x1="180" y1="180" x2={cx} y2={cy}
                    stroke="hsl(var(--primary))" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 3" />
                );
              })}
              <circle cx="180" cy="180" r="145" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.06" strokeWidth="1" />
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[110px] h-[110px] rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[22px] font-black text-primary">Flipr</div>
                  <div className="text-[15px] text-primary/60 font-medium">.Media</div>
                </div>
              </div>
            </div>

            {wheelNodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = 180 + Math.cos(rad) * 145;
              const y = 180 + Math.sin(rad) * 145;
              return (
                <div key={node.label} className="absolute z-10"
                  style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}>
                  <div className="glass-card px-3.5 py-2 text-[15px] font-semibold text-foreground whitespace-nowrap">
                    {node.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Persona Table */}
        <div className="flex-1 flex flex-col gap-2.5 min-h-0 overflow-hidden">
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr_1fr] gap-3 px-3 mb-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <span className="text-[15px] font-bold text-muted-foreground uppercase tracking-wider">Audience</span>
            <span className="text-[15px] font-bold text-muted-foreground uppercase tracking-wider">What They Want</span>
            <span className="text-[15px] font-bold text-muted-foreground uppercase tracking-wider">Why Flipr</span>
            <span className="text-[15px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
              <DollarSign className="w-4 h-4" /> Monetize
            </span>
          </div>

          {personas.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card px-4 py-3 grid grid-cols-[1fr_1.2fr_1.2fr_1fr] gap-3 items-center opacity-0 animate-fade-up hover:border-${p.color}/30 transition-colors`}
              style={{ animationDelay: `${0.3 + i * 0.05}s` }}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg bg-${p.color}/10 flex items-center justify-center shrink-0`}>
                  <p.icon className={`w-4 h-4 text-${p.color}`} />
                </div>
                <span className="text-[16px] font-semibold text-foreground leading-tight">{p.title}</span>
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{p.want}</p>
              <p className="text-[15px] text-foreground leading-relaxed">{p.why}</p>
              <p className="text-[15px] text-primary/90 leading-relaxed">{p.monetize}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom funnel */}
      <div className="mt-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        <div className="flex items-center justify-center gap-3">
          {["Discover", "Engage", "Subscribe", "Monetize"].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="glass-card px-6 py-3 text-[17px] font-semibold text-foreground">{step}</div>
              {i < 3 && <span className="text-primary text-[18px]">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default AudienceSlide;