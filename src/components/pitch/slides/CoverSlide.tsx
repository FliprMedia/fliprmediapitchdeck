import SlideLayout from "../SlideLayout";

const platforms = ["Whatnot", "TikTok Shop", "eBay Live", "Poshmark", "Instagram Live", "YouTube Shopping", "TalkShopLive"];

const stats = [
  { value: "$172.86B", label: "Global Live Commerce 2025" },
  { value: "$230.28B", label: "Expected 2026 Market" },
  { value: "$14.64B", label: "US Livestream Sales 2025" },
];

const CoverSlide = () => (
  <SlideLayout hideLogo>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />

    {/* Rich multi-layer glow system */}
    <div className="absolute top-[-200px] right-[200px] w-[900px] h-[900px] rounded-full bg-primary/[0.07] blur-[280px]" />
    <div className="absolute bottom-[-300px] left-[-100px] w-[800px] h-[800px] rounded-full bg-accent/[0.05] blur-[250px]" />
    <div className="absolute top-[300px] left-[50%] w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[200px]" />
    <div className="absolute top-[100px] left-[200px] w-[400px] h-[400px] rounded-full bg-accent/[0.025] blur-[180px]" />

    {/* Architectural grid */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `
        linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
      `,
      backgroundSize: '120px 120px'
    }} />

    {/* Decorative accent lines */}
    <div className="absolute top-0 left-[180px] w-px h-[600px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent" />
    <div className="absolute top-0 left-[220px] w-px h-[400px] bg-gradient-to-b from-accent/10 via-accent/3 to-transparent" />
    <div className="absolute top-0 right-[300px] w-px h-[500px] bg-gradient-to-b from-primary/15 via-primary/3 to-transparent" />
    <div className="absolute top-0 right-[340px] w-px h-[350px] bg-gradient-to-b from-accent/8 to-transparent" />

    {/* Abstract geometric shapes — right side depth */}
    <div className="absolute right-[80px] top-[120px] w-[320px] h-[320px] rounded-full border border-primary/[0.06] opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }} />
    <div className="absolute right-[140px] top-[180px] w-[200px] h-[200px] rounded-full border border-primary/[0.04]  opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }} />
    <div className="absolute right-[60px] bottom-[200px] w-[250px] h-[250px] rounded-full border border-accent/[0.05] opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }} />

    {/* Diamond accent shapes */}
    <div className="absolute right-[350px] top-[200px] w-[100px] h-[100px] border border-primary/[0.08] rotate-45 opacity-0 animate-fade-up" style={{ animationDelay: '0.65s' }} />
    <div className="absolute right-[250px] bottom-[280px] w-[60px] h-[60px] border border-accent/[0.06] rotate-45 opacity-0 animate-fade-up" style={{ animationDelay: '0.75s' }} />

    {/* Horizontal accent line */}
    <div className="absolute top-[540px] right-0 w-[500px] h-px bg-gradient-to-l from-transparent via-primary/10 to-transparent" />

    {/* Main content — centered with generous spacing */}
    <div className="relative z-10 flex flex-col justify-center h-full px-24 max-w-[1400px]">
      {/* Badge */}
      <div className="mb-10 opacity-0 animate-fade-up">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-[11px] font-mono-brand tracking-[0.15em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Investor Presentation — 2025
        </span>
      </div>

      {/* Hero Logo — dramatically large */}
      <div className="mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="text-[140px] font-black tracking-[-0.05em] leading-[0.9]">
          <span className="text-primary neon-glow">Flipr</span>
          <span className="text-foreground">.Media</span>
        </div>
      </div>

      {/* Subheadline */}
      <h1 className="text-[32px] font-semibold leading-[1.25] mb-7 max-w-[800px] opacity-0 animate-fade-up" style={{ animationDelay: '0.18s' }}>
        <span className="text-foreground/90">The media, discovery, and intelligence platform</span>{" "}
        <span className="gradient-text font-display italic text-[34px]">for the $170B+ live commerce economy.</span>
      </h1>

      {/* Support */}
      <p className="text-[17px] text-muted-foreground leading-relaxed mb-10 max-w-[700px] opacity-0 animate-fade-up" style={{ animationDelay: '0.26s' }}>
        Live selling sits at the intersection of live commerce, social commerce, creator-led retail, and advertising. As the ecosystem matures, value will accrue to the trusted media and intelligence layer that shapes attention, rankings, and advertiser demand. We're building it.
      </p>

      {/* Raise pill */}
      <div className="flex items-center gap-4 mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.34s' }}>
        <div className="glass-card-elevated px-7 py-4 flex items-center gap-5 animate-pulse-neon">
          <span className="text-primary font-mono-brand text-[11px] tracking-[0.2em]">RAISING</span>
          <span className="text-[42px] font-black text-foreground tracking-tight stat-value">$500K</span>
          <div className="h-10 w-px bg-border/40" />
          <div className="text-left">
            <div className="text-[11px] text-muted-foreground/60">Instrument</div>
            <div className="text-sm font-semibold text-foreground/80">Pre-Seed / SAFE</div>
          </div>
        </div>
      </div>

      {/* Platform strip */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.42s' }}>
        <span className="text-[10px] text-muted-foreground/30 font-mono-brand tracking-[0.15em] uppercase mr-1">Covering</span>
        {platforms.map((p, i) => (
          <span key={p} className="flex items-center gap-2.5">
            <span className="text-[12px] text-muted-foreground/40 font-medium">{p}</span>
            {i < platforms.length - 1 && <span className="text-primary/15 text-[8px]">●</span>}
          </span>
        ))}
      </div>
    </div>

    {/* Bottom stat strip */}
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="divider-glow" />
      <div className="flex items-center justify-center bg-card/40 backdrop-blur-xl opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            <div className="px-16 py-5 text-center">
              <div className="text-2xl font-black text-primary tracking-tight stat-value">{s.value}</div>
              <div className="text-[10px] text-muted-foreground/50 mt-1 tracking-wide">{s.label}</div>
            </div>
            {i < stats.length - 1 && <div className="w-px h-10 bg-border/20" />}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default CoverSlide;
