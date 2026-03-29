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

    {/* Primary centered glow behind logo */}
    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] rounded-full bg-primary/[0.06] blur-[300px]" />
    {/* Secondary warm accent — lower left */}
    <div className="absolute bottom-[-200px] left-[-100px] w-[700px] h-[700px] rounded-full bg-accent/[0.035] blur-[250px]" />
    {/* Tertiary subtle bloom — upper right */}
    <div className="absolute top-[-100px] right-[-50px] w-[500px] h-[500px] rounded-full bg-primary/[0.025] blur-[200px]" />

    {/* Single subtle accent line */}
    <div className="absolute top-0 left-[160px] w-px h-[500px] bg-gradient-to-b from-primary/15 via-primary/3 to-transparent" />

    {/* Main content — left-aligned, vertically centered */}
    <div className="relative z-10 flex flex-col justify-center h-full pl-24 pr-32 max-w-[1500px]">
      {/* Badge */}
      <div className="mb-12 opacity-0 animate-fade-up">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.04] text-primary text-[11px] font-mono-brand tracking-[0.15em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Investor Presentation — 2025
        </span>
      </div>

      {/* Hero Logo */}
      <div className="mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="text-[160px] font-black tracking-[-0.05em] leading-[0.85]">
          <span className="text-primary neon-glow">Flipr</span>
          <span className="text-foreground">.Media</span>
        </div>
      </div>

      {/* Subheadline */}
      <h1 className="text-[30px] font-semibold leading-[1.3] mb-7 max-w-[820px] opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <span className="text-foreground/90">The media, discovery, and intelligence platform</span>{" "}
        <span className="gradient-text font-display italic text-[32px]">for the $170B+ live commerce economy.</span>
      </h1>

      {/* Support copy */}
      <p className="text-[16px] text-muted-foreground/70 leading-relaxed mb-12 max-w-[680px] opacity-0 animate-fade-up" style={{ animationDelay: '0.28s' }}>
        Live selling sits at the intersection of live commerce, social commerce, creator-led retail, and advertising. As the ecosystem matures, value will accrue to the trusted media and intelligence layer that shapes attention, rankings, and advertiser demand. We're building it.
      </p>

      {/* Raise pill + platform strip row */}
      <div className="flex items-center gap-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.36s' }}>
        <div className="glass-card-elevated px-7 py-4 flex items-center gap-5 animate-pulse-neon shrink-0">
          <span className="text-primary font-mono-brand text-[11px] tracking-[0.2em]">RAISING</span>
          <span className="text-[42px] font-black text-foreground tracking-tight stat-value">$500K</span>
          <div className="h-10 w-px bg-border/30" />
          <div className="text-left">
            <div className="text-[11px] text-muted-foreground/50">Instrument</div>
            <div className="text-sm font-semibold text-foreground/80">Pre-Seed / SAFE</div>
          </div>
        </div>

        {/* Platform strip */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-[10px] text-muted-foreground/25 font-mono-brand tracking-[0.15em] uppercase mr-1">Covering</span>
          {platforms.map((p, i) => (
            <span key={p} className="flex items-center gap-2.5">
              <span className="text-[12px] text-muted-foreground/35 font-medium">{p}</span>
              {i < platforms.length - 1 && <span className="text-primary/12 text-[8px]">●</span>}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom stat strip */}
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="divider-glow" />
      <div className="flex items-center justify-center bg-card/30 backdrop-blur-xl opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            <div className="px-16 py-5 text-center">
              <div className="text-2xl font-black text-primary tracking-tight stat-value">{s.value}</div>
              <div className="text-[10px] text-muted-foreground/40 mt-1 tracking-wide">{s.label}</div>
            </div>
            {i < stats.length - 1 && <div className="w-px h-10 bg-border/15" />}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default CoverSlide;
