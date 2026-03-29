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

    {/* Premium radial glow system */}
    <div className="absolute top-[-400px] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full bg-primary/[0.07] blur-[250px]" />
    <div className="absolute bottom-[-500px] left-[-200px] w-[900px] h-[900px] rounded-full bg-accent/[0.05] blur-[200px]" />
    <div className="absolute top-[100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[150px]" />

    {/* Architectural grid */}
    <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: `
        linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
      `,
      backgroundSize: '100px 100px'
    }} />

    {/* Abstract geometric accents */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1920 1080">
      <circle cx="1500" cy="200" r="300" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
      <circle cx="1500" cy="200" r="200" stroke="hsl(var(--primary))" strokeWidth="0.3" fill="none" />
      <circle cx="400" cy="900" r="250" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" />
      <line x1="0" y1="540" x2="1920" y2="540" stroke="hsl(var(--primary))" strokeWidth="0.3" />
      <line x1="960" y1="0" x2="960" y2="1080" stroke="hsl(var(--primary))" strokeWidth="0.3" />
    </svg>

    {/* Diagonal accent lines */}
    <div className="absolute top-0 right-[400px] w-px h-[600px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent" />
    <div className="absolute top-0 right-[440px] w-px h-[400px] bg-gradient-to-b from-accent/12 via-accent/3 to-transparent" />
    <div className="absolute top-0 left-[300px] w-px h-[300px] bg-gradient-to-b from-primary/10 to-transparent" />

    {/* Floating orb accents */}
    <div className="absolute top-[180px] right-[200px] w-[8px] h-[8px] rounded-full bg-primary/40 animate-pulse" />
    <div className="absolute top-[300px] right-[350px] w-[5px] h-[5px] rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute bottom-[250px] right-[150px] w-[6px] h-[6px] rounded-full bg-primary/25 animate-pulse" style={{ animationDelay: '2s' }} />

    {/* Main content — centered */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-24 pb-20">
      {/* Badge */}
      <div className="mb-10 opacity-0 animate-fade-up">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/25 bg-primary/5 text-primary text-[11px] font-mono-brand tracking-[0.15em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Investor Presentation — 2025
        </span>
      </div>

      {/* Hero Logo — large and dominant */}
      <div className="mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="text-[160px] font-black tracking-[-0.05em] leading-none">
          <span className="text-primary neon-glow">Flipr</span>
          <span className="text-foreground">.Media</span>
        </div>
      </div>

      {/* Subheadline */}
      <h1 className="text-[32px] font-semibold leading-[1.3] mb-8 max-w-[900px] opacity-0 animate-fade-up" style={{ animationDelay: '0.18s' }}>
        <span className="text-foreground/90">The media and intelligence platform</span>{" "}
        <span className="gradient-text font-display italic text-[34px]">for the $170B+ live commerce economy.</span>
      </h1>

      {/* Support */}
      <p className="text-[17px] text-muted-foreground leading-relaxed mb-12 max-w-[700px] opacity-0 animate-fade-up" style={{ animationDelay: '0.26s' }}>
        Live selling is the fastest-growing segment in commerce. There is no media brand serving it. We're building it — and raising $500K to own the category.
      </p>

      {/* Raise pill */}
      <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.34s' }}>
        <div className="glass-card-elevated px-8 py-5 flex items-center gap-6 animate-pulse-neon">
          <span className="text-primary font-mono-brand text-[11px] tracking-[0.2em]">RAISING</span>
          <span className="text-[48px] font-black text-foreground tracking-tight stat-value">$500K</span>
          <div className="h-12 w-px bg-border/40" />
          <div className="text-left">
            <div className="text-[11px] text-muted-foreground/60">Instrument</div>
            <div className="text-sm font-semibold text-foreground/80">Pre-Seed / SAFE</div>
          </div>
        </div>
      </div>

      {/* Platform strip */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.42s' }}>
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
