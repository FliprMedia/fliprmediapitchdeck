import SlideLayout from "../SlideLayout";
import { ShoppingBag, Eye, Building2, Megaphone, Tv, Briefcase, TrendingUp, DollarSign } from "lucide-react";

const personas = [
  {
    icon: Tv,
    title: "Sellers & Live Hosts",
    want: "Grow audience, get discovered, build credibility",
    why: "News, rankings, profiles, show discovery",
    monetize: "Premium profiles, featured placements, lead gen",
    color: "primary",
    categories: "Cards, Fashion, Collectibles",
  },
  {
    icon: Eye,
    title: "Buyers & Collectors",
    want: "Find shows, follow sellers, discover deals",
    why: "Live show discovery, seller spotlights, platform guides",
    monetize: "Audience scale, ad impressions, newsletter subs",
    color: "primary",
    categories: "Beauty, Luxury, Reselling",
  },
  {
    icon: Building2,
    title: "Brands",
    want: "Reach commerce creators, launch live campaigns",
    why: "Seller directory, sponsored content, industry intel",
    monetize: "Sponsored features, native ads, branded content",
    color: "accent",
    categories: "CPG, Fashion, Electronics",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    want: "Find sellers for campaigns, track market trends",
    why: "Rankings, seller data, platform coverage",
    monetize: "Data products, lead gen, premium access",
    color: "accent",
    categories: "Influencer, Commerce, Media",
  },
  {
    icon: ShoppingBag,
    title: "Platforms",
    want: "Attract sellers, showcase growth, recruit talent",
    why: "Industry press, platform coverage, seller audience",
    monetize: "Sponsorships, exclusive partnerships, events",
    color: "primary",
    categories: "Whatnot, TikTok Shop, eBay Live",
  },
  {
    icon: Megaphone,
    title: "Advertisers & Sponsors",
    want: "Access niche commerce audiences at scale",
    why: "Targeted ad placements, newsletter sponsorships",
    monetize: "Display ads, sponsored slots, category takeovers",
    color: "accent",
    categories: "Shipping, Tools, Payments",
  },
  {
    icon: TrendingUp,
    title: "Investors & Analysts",
    want: "Track market growth, identify breakout sellers",
    why: "Industry data, trend reports, market intelligence",
    monetize: "Research products, premium subscriptions",
    color: "primary",
    categories: "VC, PE, Strategic",
  },
];

const wheelNodes = personas.map((p, i) => ({
  label: p.title.split(" & ")[0],
  angle: (i * 360) / personas.length - 90,
}));

const AudienceSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-[300px] right-[200px] w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">07 — AUDIENCE & USERS</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Multiple high-value audiences, <span className="font-display italic text-[50px] text-primary">one category hub.</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Every stakeholder in live commerce comes to Flipr.Media for information, discovery, and connection.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Audience Wheel */}
        <div className="w-[400px] flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-[360px] h-[360px]">
            {/* Connection lines */}
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

            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[110px] h-[110px] rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-black text-primary">Flipr</div>
                  <div className="text-[9px] text-primary/60 font-medium">.Media</div>
                </div>
              </div>
            </div>

            {/* Nodes */}
            {wheelNodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = 180 + Math.cos(rad) * 145;
              const y = 180 + Math.sin(rad) * 145;
              return (
                <div key={node.label} className="absolute z-10"
                  style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}>
                  <div className="glass-card px-2.5 py-1 text-[9px] font-semibold text-foreground/80 whitespace-nowrap">
                    {node.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Persona Cards */}
        <div className="flex-1 flex flex-col gap-2 min-h-0 overflow-hidden">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr_1fr_0.7fr] gap-3 px-3 mb-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Audience</span>
            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">What They Want</span>
            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Why Flipr</span>
            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
              <DollarSign className="w-3 h-3" /> Monetization
            </span>
            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Verticals</span>
          </div>

          {personas.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card px-3 py-2.5 grid grid-cols-[1fr_1.2fr_1.2fr_1fr_0.7fr] gap-3 items-center opacity-0 animate-fade-up hover:border-${p.color}/30 transition-colors`}
              style={{ animationDelay: `${0.3 + i * 0.05}s` }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-lg bg-${p.color}/10 flex items-center justify-center shrink-0`}>
                  <p.icon className={`w-3.5 h-3.5 text-${p.color}`} />
                </div>
                <span className="text-[11px] font-semibold text-foreground leading-tight">{p.title}</span>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{p.want}</p>
              <p className="text-[10px] text-foreground/70 leading-relaxed">{p.why}</p>
              <p className="text-[10px] text-primary/80 leading-relaxed">{p.monetize}</p>
              <div className="flex flex-wrap gap-1">
                {p.categories.split(", ").map(c => (
                  <span key={c} className="text-[7px] px-1.5 py-0.5 rounded-full bg-muted/50 text-muted-foreground font-medium">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom funnel */}
      <div className="mt-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        <div className="flex items-center justify-center gap-3">
          {["Discover", "Engage", "Subscribe", "Monetize"].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="glass-card px-5 py-2 text-[11px] font-semibold text-foreground">{step}</div>
              {i < 3 && <span className="text-primary text-sm">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default AudienceSlide;
