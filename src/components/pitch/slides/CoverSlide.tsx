import SlideLayout from "../SlideLayout";

const platforms = ["Whatnot", "TikTok Shop", "eBay Live", "Poshmark", "Instagram Live", "YouTube Shopping", "TalkShopLive"];

const stats = [
  { value: "$172.86B", label: "Global Live Commerce Market 2025" },
  { value: "$230.28B", label: "Expected 2026 Market" },
  { value: "$14.64B", label: "US Livestream E-Commerce 2025" },
];

const CoverSlide = () => (
  <SlideLayout>
    {/* Rich layered background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,25%,3%)] via-background to-[hsl(240,20%,6%)]" />

    {/* Ambient glow orbs */}
    <div className="absolute top-[-200px] right-[-100px] w-[1000px] h-[1000px] rounded-full bg-primary/[0.07] blur-[180px]" />
    <div className="absolute bottom-[-300px] left-[-200px] w-[900px] h-[900px] rounded-full bg-accent/[0.06] blur-[160px]" />
    <div className="absolute top-[300px] left-[400px] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />

    {/* Subtle grid */}
    <div className="absolute inset-0 opacity-[0.025]" style={{
      backgroundImage: 'linear-gradient(hsl(145 100% 49% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(145 100% 49% / 0.4) 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }} />

    {/* Diagonal accent lines */}
    <div className="absolute top-0 right-[300px] w-[1px] h-[400px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rotate-[15deg] origin-top" />
    <div className="absolute top-0 right-[340px] w-[1px] h-[300px] bg-gradient-to-b from-accent/15 via-accent/3 to-transparent rotate-[15deg] origin-top" />

    {/* Layered site mockups - right side */}
    <div className="absolute right-[-40px] top-[120px] opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
      {/* Back mockup */}
      <div className="absolute top-[30px] right-[40px] w-[520px] h-[340px] rounded-xl bg-card/40 border border-border/30 backdrop-blur-sm shadow-2xl shadow-black/40 rotate-[-2deg] overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30 bg-muted/30">
          <div className="w-2 h-2 rounded-full bg-destructive/40" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <span className="ml-2 text-[9px] text-muted-foreground/50 font-mono">flipr.media/news</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex gap-3">
            <div className="w-[140px] h-[80px] rounded bg-muted/40" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-muted-foreground/15 rounded w-full" />
              <div className="h-3 bg-muted-foreground/10 rounded w-4/5" />
              <div className="h-2 bg-muted-foreground/5 rounded w-3/5" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[140px] h-[80px] rounded bg-muted/40" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-muted-foreground/15 rounded w-full" />
              <div className="h-3 bg-muted-foreground/10 rounded w-3/4" />
              <div className="h-2 bg-muted-foreground/5 rounded w-2/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Front mockup */}
      <div className="relative w-[540px] h-[360px] rounded-xl bg-card/60 border border-border/40 backdrop-blur-md shadow-2xl shadow-primary/[0.08] rotate-[1deg] overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border/40 bg-muted/20">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
          <div className="ml-3 flex-1 h-5 rounded bg-muted/40 flex items-center px-2">
            <span className="text-[10px] text-muted-foreground/60 font-mono">flipr.media</span>
          </div>
        </div>
        <div className="p-4">
          {/* Nav */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-black"><span className="text-primary">Flipr</span><span className="text-foreground/80">.Media</span></div>
            <div className="flex gap-5 text-[10px] text-muted-foreground/60">
              <span>News</span><span>Shows</span><span>Sellers</span><span>Rankings</span><span>Platforms</span>
            </div>
          </div>
          {/* Hero */}
          <div className="w-full h-[120px] rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border border-primary/10 flex items-center px-5 mb-3">
            <div className="space-y-2">
              <div className="h-4 bg-primary/20 rounded w-[280px]" />
              <div className="h-3 bg-muted-foreground/15 rounded w-[220px]" />
              <div className="h-2 bg-muted-foreground/10 rounded w-[180px]" />
            </div>
          </div>
          {/* Cards grid */}
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="bg-muted/20 rounded-lg p-2 border border-border/20">
                <div className="w-full h-[50px] bg-muted/30 rounded mb-1.5" />
                <div className="h-2 bg-muted-foreground/15 rounded w-full mb-1" />
                <div className="h-2 bg-muted-foreground/10 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Main content - left aligned */}
    <div className="relative z-10 flex flex-col justify-center h-full pl-20 pr-[620px]">
      {/* Investor deck badge */}
      <div className="mb-6 opacity-0 animate-fade-up">
        <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase">
          Investor Presentation
        </span>
      </div>

      {/* Logo */}
      <div className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.08s' }}>
        <div className="text-[88px] font-black tracking-tighter leading-none">
          <span className="text-primary neon-glow">Flipr</span>
          <span className="text-foreground">.Media</span>
        </div>
      </div>

      {/* Subheadline */}
      <h1 className="text-[28px] font-semibold leading-snug mb-5 text-foreground/90 opacity-0 animate-fade-up" style={{ animationDelay: '0.16s' }}>
        The first media and intelligence platform{" "}
        <span className="gradient-text">built for the live selling economy.</span>
      </h1>

      {/* Support line */}
      <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[620px] opacity-0 animate-fade-up" style={{ animationDelay: '0.24s' }}>
        Raising $500,000 to complete the platform, accelerate audience growth, and build the category-defining media brand for livestream commerce.
      </p>

      {/* Raise pill */}
      <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.32s' }}>
        <div className="glass-card px-6 py-3.5 flex items-center gap-4 animate-pulse-neon">
          <span className="text-primary font-mono text-sm tracking-wider">RAISING</span>
          <span className="text-4xl font-black text-foreground">$500,000</span>
          <div className="h-8 w-[1px] bg-border" />
          <span className="text-sm text-muted-foreground">Pre-Seed / Angel</span>
        </div>
      </div>

      {/* Platform logos strip */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <span className="text-[11px] text-muted-foreground/40 font-mono uppercase tracking-wider mr-1">Covering</span>
        {platforms.map((p, i) => (
          <span key={p} className="flex items-center gap-2">
            <span className="text-[13px] text-muted-foreground/50 font-medium">{p}</span>
            {i < platforms.length - 1 && <span className="text-muted-foreground/20">·</span>}
          </span>
        ))}
      </div>
    </div>

    {/* Bottom stat strip */}
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="flex items-center justify-center gap-0 bg-card/30 backdrop-blur-md opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            <div className="px-12 py-4 text-center">
              <div className="text-xl font-black text-primary tracking-tight">{s.value}</div>
              <div className="text-[11px] text-muted-foreground/60 mt-0.5">{s.label}</div>
            </div>
            {i < stats.length - 1 && <div className="w-[1px] h-8 bg-border/30" />}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default CoverSlide;
