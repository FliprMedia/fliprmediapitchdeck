import SlideLayout from "../SlideLayout";
import DesktopMockup from "../mockups/DesktopMockup";
import MobileMockup from "../mockups/MobileMockup";

const platforms = ["Whatnot", "TikTok Shop", "eBay Live", "Poshmark", "Instagram Live", "YouTube Shopping", "TalkShopLive"];

const stats = [
  { value: "$172.86B", label: "Global Live Commerce 2025" },
  { value: "$230.28B", label: "Expected 2026 Market" },
  { value: "$14.64B", label: "US Livestream Sales 2025" },
];

const CoverSlide = () => (
  <SlideLayout>
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

    {/* Large site mockups — right */}
    <div className="absolute right-[-30px] top-[50px] opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
      {/* Desktop mockup - large */}
      <div className="relative">
        <DesktopMockup variant="homepage" className="w-[600px] h-[420px]" style={{ transform: 'rotate(1deg)' }} />
        
        {/* Mobile mockup overlapping */}
        <div className="absolute -left-[50px] bottom-[-40px]" style={{ transform: 'rotate(-6deg)' }}>
          <MobileMockup variant="live" className="w-[120px] h-[220px]" />
        </div>

        {/* Second mobile */}
        <div className="absolute -right-[10px] bottom-[-20px]" style={{ transform: 'rotate(4deg)' }}>
          <MobileMockup variant="article" className="w-[110px] h-[200px]" />
        </div>
      </div>
    </div>

    {/* Main content — left */}
    <div className="relative z-10 flex flex-col justify-center h-full pl-24 pr-[660px]">
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
        <span className="text-foreground/90">The media and intelligence platform</span>{" "}
        <span className="gradient-text font-display italic text-[32px]">for the $170B+ live commerce economy.</span>
      </h1>

      {/* Support */}
      <p className="text-[17px] text-muted-foreground leading-relaxed mb-10 max-w-[580px] opacity-0 animate-fade-up" style={{ animationDelay: '0.26s' }}>
        Live selling is the fastest-growing segment in commerce. There is no media brand serving it. We're building it — and raising $500K to own the category.
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
