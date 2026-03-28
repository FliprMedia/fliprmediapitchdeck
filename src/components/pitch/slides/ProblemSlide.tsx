import SlideLayout from "../SlideLayout";
import { AlertTriangle, Search, Users, BarChart3, Megaphone, Shuffle, TrendingUp, Eye, Target, Radio, ShieldQuestion, Layers, ArrowRight } from "lucide-react";

const platformBubbles = [
  { name: "Whatnot", x: 8, y: 18, size: 72 },
  { name: "TikTok Shop", x: 28, y: 8, size: 80 },
  { name: "eBay Live", x: 52, y: 22, size: 64 },
  { name: "Poshmark", x: 72, y: 12, size: 58 },
  { name: "Instagram Live", x: 18, y: 55, size: 60 },
  { name: "YouTube Shopping", x: 42, y: 48, size: 68 },
  { name: "TalkShopLive", x: 65, y: 52, size: 54 },
];

const painCards = [
  {
    title: "Sellers & Creators",
    icon: Users,
    color: "primary",
    pains: [
      "No centralized profile or reputation system",
      "No way to be discovered across platforms",
      "No press coverage or credibility signals",
      "No performance benchmarks or rankings",
    ],
  },
  {
    title: "Advertisers & Brands",
    icon: Megaphone,
    color: "secondary",
    pains: [
      "No media channel to reach live sellers",
      "No audience data or targeting tools",
      "No sponsorship or ad infrastructure",
      "No industry benchmarks for campaign ROI",
    ],
  },
  {
    title: "Audiences & Investors",
    icon: Eye,
    color: "primary",
    pains: [
      "No discovery layer for live shows or sellers",
      "No aggregated news or trend coverage",
      "No market intelligence or data products",
      "No trusted editorial voice for the category",
    ],
  },
];

const gapItems = [
  { icon: Shuffle, label: "Fragmented Information" },
  { icon: Search, label: "No Discovery Layer" },
  { icon: BarChart3, label: "No Data or Rankings" },
  { icon: Megaphone, label: "No Ad Infrastructure" },
  { icon: AlertTriangle, label: "No Dedicated Press" },
  { icon: ShieldQuestion, label: "No Credibility Signals" },
  { icon: Radio, label: "No Live Show Index" },
  { icon: Layers, label: "No Centralized Platform" },
];

const ProblemSlide = () => (
  <SlideLayout>
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-destructive/5" />
    
    {/* Floating disconnected platform bubbles */}
    <div className="absolute inset-0 opacity-[0.07]">
      {platformBubbles.map((b, i) => (
        <div
          key={b.name}
          className="absolute rounded-full border border-muted-foreground/40 flex items-center justify-center"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.size,
            height: b.size,
            animationDelay: `${i * 0.4}s`,
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <span className="text-[10px] text-muted-foreground font-medium">{b.name}</span>
        </div>
      ))}
      {/* Disconnected dashed lines between bubbles */}
      <svg className="absolute inset-0 w-full h-full">
        <line x1="12%" y1="22%" x2="30%" y2="14%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 8" opacity="0.3" />
        <line x1="34%" y1="14%" x2="54%" y2="26%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 8" opacity="0.3" />
        <line x1="56%" y1="28%" x2="74%" y2="16%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 8" opacity="0.3" />
        <line x1="22%" y1="58%" x2="44%" y2="52%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 8" opacity="0.2" />
        <line x1="46%" y1="52%" x2="67%" y2="56%" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 8" opacity="0.2" />
      </svg>
    </div>

    {/* Ambient glow */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

    <div className="relative z-10 flex flex-col h-full px-20 py-16">
      {/* Header */}
      <div className="mb-8">
        <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">02 — THE PROBLEM</div>
        <h2 className="text-[48px] font-bold leading-[1.1] mb-5 opacity-0 animate-fade-up max-w-[1100px]" style={{ animationDelay: '0.1s' }}>
          Live selling is exploding.<br />
          The industry still lacks its <span className="text-primary">media home.</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[900px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Despite billions in commerce volume and rising consumer adoption, live selling has no dedicated media and intelligence layer that organizes the category, elevates its top operators, and attracts industry ad dollars.
        </p>
      </div>

      {/* Gap icons strip */}
      <div className="flex items-center gap-3 mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        {gapItems.map((item, i) => (
          <div key={item.label} className="flex items-center gap-2 glass-card px-4 py-2.5 text-sm">
            <item.icon className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Main content: 3-column pain cards + split comparison */}
      <div className="flex-1 flex gap-6">
        {/* 3 pain cards */}
        {painCards.map((card, i) => (
          <div
            key={card.title}
            className="flex-1 glass-card p-7 flex flex-col opacity-0 animate-fade-up hover:border-primary/20 transition-colors group"
            style={{ animationDelay: `${0.25 + i * 0.08}s` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-11 h-11 rounded-lg bg-${card.color}/10 flex items-center justify-center`}>
                <card.icon className={`w-5 h-5 text-${card.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
            </div>
            <div className="space-y-3 flex-1">
              {card.pains.map((pain, j) => (
                <div key={j} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Split comparison */}
        <div className="w-[380px] shrink-0 flex flex-col gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {/* Today */}
          <div className="flex-1 glass-card p-6 border-destructive/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/60 to-destructive/20" />
            <div className="text-xs font-mono text-destructive tracking-widest mb-3">TODAY</div>
            <h4 className="text-lg font-bold text-foreground mb-3">Fragmented & Invisible</h4>
            <div className="space-y-2">
              {["Scattered across Reddit, Discord, YouTube", "No central discovery or data", "No advertiser infrastructure", "No editorial authority"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive">✕</span> {t}
                </div>
              ))}
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary rotate-90" />
          </div>

          {/* Flipr future */}
          <div className="flex-1 glass-card p-6 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/20" />
            <div className="text-xs font-mono text-primary tracking-widest mb-3">WITH FLIPR.MEDIA</div>
            <h4 className="text-lg font-bold text-foreground mb-3">Centralized & Powerful</h4>
            <div className="space-y-2">
              {["One media hub for the entire industry", "Discovery, rankings & intelligence", "Built-in ad & sponsorship layer", "Trusted editorial brand"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProblemSlide;
