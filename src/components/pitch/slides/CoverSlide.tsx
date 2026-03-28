import SlideLayout from "../SlideLayout";

const CoverSlide = () => (
  <SlideLayout>
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
    <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-primary/5 blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px]" />
    
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(hsl(145 100% 49% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(145 100% 49% / 0.3) 1px, transparent 1px)',
      backgroundSize: '60px 60px'
    }} />

    <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
      {/* Logo */}
      <div className="mb-8 opacity-0 animate-fade-up">
        <div className="text-7xl font-black tracking-tighter">
          <span className="text-primary">Flipr</span>
          <span className="text-foreground">.Media</span>
        </div>
      </div>

      {/* Tagline */}
      <h1 className="text-[56px] font-bold text-center leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        The Media Platform for{" "}
        <span className="gradient-text">Live Commerce</span>
      </h1>

      <p className="text-2xl text-muted-foreground text-center max-w-[900px] mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
        News, discovery, data, and intelligence for the fastest-growing segment of e-commerce
      </p>

      {/* Raise callout */}
      <div className="glass-card px-10 py-5 flex items-center gap-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.45s' }}>
        <div className="text-primary font-mono text-lg">RAISING</div>
        <div className="text-5xl font-black text-foreground">$500,000</div>
        <div className="text-muted-foreground text-lg">Pre-Seed / Angel Round</div>
      </div>

      {/* Platform logos bar */}
      <div className="absolute bottom-16 flex items-center gap-8 text-muted-foreground/40 text-sm font-medium opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        <span>Covering:</span>
        {["Whatnot", "TikTok Shop", "eBay Live", "Poshmark", "Instagram Live", "YouTube Shopping", "TalkShopLive"].map(p => (
          <span key={p} className="text-muted-foreground/60">{p}</span>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default CoverSlide;
