import SlideLayout from "../SlideLayout";

const platforms = ["Whatnot", "TikTok Shop", "eBay Live", "Poshmark", "Instagram Live", "YouTube Shopping", "TalkShopLive"];

const stats = [
  { value: "$172.86B", label: "Global Live Commerce 2025" },
  { value: "$230.28B", label: "Expected 2026 Market" },
  { value: "$14.64B", label: "US Livestream Sales 2025" },
];

const CoverSlide = () => (
  <SlideLayout>
    {/* Deep layered background */}
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />

    {/* Radial glow system */}
    <div className="absolute top-[-300px] right-[-200px] w-[1200px] h-[1200px] rounded-full bg-primary/[0.06] blur-[200px]" />
    <div className="absolute bottom-[-400px] left-[-300px] w-[1000px] h-[1000px] rounded-full bg-accent/[0.05] blur-[200px]" />
    <div className="absolute top-[200px] left-[600px] w-[500px] h-[500px] rounded-full bg-primary/[0.025] blur-[120px]" />

    {/* Architectural grid */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `
        linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
      `,
      backgroundSize: '120px 120px'
    }} />

    {/* Accent lines */}
    <div className="absolute top-0 right-[280px] w-px h-[500px] bg-gradient-to-b from-primary/25 via-primary/5 to-transparent" />
    <div className="absolute top-0 right-[320px] w-px h-[350px] bg-gradient-to-b from-accent/15 via-accent/3 to-transparent" />
    <div className="absolute bottom-0 left-[120px] w-px h-[200px] bg-gradient-to-t from-primary/15 to-transparent" />

    {/* Premium layered site mockups — right */}
    <div className="absolute right-[-20px] top-[80px] opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
      {/* Shadow mockup (deepest) */}
      <div className="absolute top-[60px] right-[80px] w-[480px] h-[300px] rounded-2xl bg-card/20 border border-border/15 rotate-[-4deg] overflow-hidden">
        <div className="p-5 space-y-3">
          <div className="flex gap-3">
            <div className="w-[120px] h-[70px] rounded-lg bg-muted/20" />
            <div className="flex-1 space-y-2 pt-2">
              <div className="h-2.5 bg-muted-foreground/8 rounded w-full" />
              <div className="h-2 bg-muted-foreground/5 rounded w-3/4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main mockup (front) */}
      <div className="relative w-[560px] h-[380px] rounded-2xl overflow-hidden rotate-[1deg]" style={{
        background: 'linear-gradient(145deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.5))',
        border: '1px solid hsl(var(--border) / 0.4)',
        boxShadow: '0 25px 80px -12px hsl(0 0% 0% / 0.6), 0 0 40px -8px hsl(var(--primary) / 0.06)'
      }}>
        {/* Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[hsl(0,70%,55%)] opacity-60" />
            <div className="w-3 h-3 rounded-full bg-[hsl(45,80%,55%)] opacity-60" />
            <div className="w-3 h-3 rounded-full bg-primary opacity-50" />
          </div>
          <div className="ml-4 flex-1 h-6 rounded-md bg-muted/30 flex items-center px-3">
            <span className="text-[10px] text-muted-foreground/50 font-mono-brand">flipr.media</span>
          </div>
        </div>
        {/* Site content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-5">
            <div className="text-xl font-black"><span className="text-primary">Flipr</span><span className="text-foreground/70">.Media</span></div>
            <div className="flex gap-6 text-[10px] text-muted-foreground/40 font-medium tracking-wide">
              <span>News</span><span>Shows</span><span>Sellers</span><span>Rankings</span><span>Platforms</span>
            </div>
          </div>
          {/* Hero banner */}
          <div className="w-full h-[100px] rounded-xl mb-4 flex items-center px-6" style={{
            background: 'linear-gradient(135deg, hsl(var(--primary) / 0.12), hsl(var(--accent) / 0.1), hsl(var(--primary) / 0.05))',
            border: '1px solid hsl(var(--primary) / 0.1)'
          }}>
            <div className="space-y-2.5">
              <div className="h-3.5 bg-primary/20 rounded-md w-[260px]" />
              <div className="h-2.5 bg-muted-foreground/12 rounded w-[200px]" />
              <div className="h-2 bg-muted-foreground/8 rounded w-[150px]" />
            </div>
          </div>
          {/* Article grid */}
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-lg p-3" style={{
                background: 'hsl(var(--muted) / 0.3)',
                border: '1px solid hsl(var(--border) / 0.15)'
              }}>
                <div className="w-full h-[55px] bg-muted/30 rounded-md mb-2" />
                <div className="h-2.5 bg-foreground/10 rounded w-full mb-1.5" />
                <div className="h-2 bg-muted-foreground/8 rounded w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile mockup */}
      <div className="absolute -left-[60px] bottom-[-30px] w-[100px] h-[180px] rounded-2xl overflow-hidden rotate-[-6deg]" style={{
        background: 'linear-gradient(180deg, hsl(var(--card) / 0.7), hsl(var(--card) / 0.4))',
        border: '2px solid hsl(var(--border) / 0.3)',
        boxShadow: '0 15px 40px -8px hsl(0 0% 0% / 0.5)'
      }}>
        <div className="h-4 flex items-center justify-center border-b border-border/20">
          <div className="w-10 h-1 bg-muted-foreground/15 rounded-full" />
        </div>
        <div className="p-2 space-y-1.5">
          <div className="text-[6px] font-black"><span className="text-primary">F</span><span className="text-foreground/50">.M</span></div>
          <div className="h-8 bg-muted/20 rounded" />
          <div className="h-1.5 bg-foreground/8 rounded w-3/4" />
          <div className="h-1 bg-muted-foreground/5 rounded w-full" />
        </div>
      </div>
    </div>

    {/* Main content — left */}
    <div className="relative z-10 flex flex-col justify-center h-full pl-24 pr-[640px]">
      {/* Badge */}
      <div className="mb-8 opacity-0 animate-fade-up">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-[11px] font-mono-brand tracking-[0.15em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Investor Presentation — 2025
        </span>
      </div>

      {/* Logo */}
      <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="text-[96px] font-black tracking-[-0.04em] leading-none">
          <span className="text-primary neon-glow">Flipr</span>
          <span className="text-foreground">.Media</span>
        </div>
      </div>

      {/* Subheadline */}
      <h1 className="text-[30px] font-semibold leading-[1.25] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.18s' }}>
        <span className="text-foreground/90">The first media and intelligence platform</span>{" "}
        <span className="gradient-text font-display italic text-[32px]">built for the live selling economy.</span>
      </h1>

      {/* Support */}
      <p className="text-[17px] text-muted-foreground leading-relaxed mb-10 max-w-[580px] opacity-0 animate-fade-up" style={{ animationDelay: '0.26s' }}>
        Raising $500,000 to complete the platform, accelerate audience growth, and build the category-defining media brand for livestream commerce.
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
