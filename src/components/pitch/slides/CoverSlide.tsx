import SlideLayout from "../SlideLayout";
import fliprLogoDark from "@/assets/flipr-logo-dark.png";

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

    {/* Glow system */}
    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] rounded-full bg-primary/[0.08] blur-[350px]" />
    <div className="absolute bottom-[-200px] left-[-100px] w-[700px] h-[700px] rounded-full bg-accent/[0.04] blur-[250px]" />
    <div className="absolute top-[-100px] right-[-50px] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[200px]" />

    {/* Accent line */}
    <div className="absolute top-0 left-[160px] w-px h-[500px] bg-gradient-to-b from-primary/15 via-primary/3 to-transparent" />

    {/* Large glowing background logo — true center */}
    <div className="absolute inset-0 flex items-center justify-center z-[1]">
      <img src={fliprLogoDark} alt="" className="h-[850px] w-auto opacity-[0.10]" />
    </div>

    {/* Main content */}
    <div className="relative z-10 flex flex-col justify-center h-full pl-24 pr-24 max-w-[1400px] pb-[90px]">
      {/* Badge */}
      <div className="mb-5 opacity-0 animate-fade-up">
        <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/25 bg-primary/[0.06] text-primary text-[16px] font-mono-brand tracking-[0.15em] uppercase font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          Investor Presentation — 2026
        </span>
      </div>

      {/* Hero Logo */}
      <div className="mb-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <img src={fliprLogoDark} alt="Flipr.Media" className="h-[320px] w-auto" />
      </div>

      {/* Headline */}
      <h1 className="text-[48px] font-extrabold leading-[1.15] mb-4 max-w-[950px] opacity-0 animate-fade-up" style={{ animationDelay: '0.18s' }}>
        <span className="text-foreground">The media, discovery, and intelligence platform</span>{" "}
        <span className="gradient-text font-display italic text-[50px]">for the $170B+ live commerce economy.</span>
      </h1>

      {/* Support copy */}
      <p className="text-[22px] text-foreground/90 leading-[1.6] mb-6 max-w-[780px] opacity-0 animate-fade-up" style={{ animationDelay: '0.26s' }}>
        A focused $250K pre-seed to complete the platform, activate monetization, and validate category demand — with founder-led execution and disciplined capital efficiency.
      </p>

      {/* Raise pill + platform strip */}
      <div className="flex items-center gap-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.34s' }}>
        <div className="glass-card-elevated px-8 py-5 flex items-center gap-6 animate-pulse-neon shrink-0">
          <span className="text-primary font-mono-brand text-[16px] tracking-[0.2em] font-bold">RAISING</span>
          <span className="text-[56px] font-black text-foreground tracking-tight stat-value">$250K</span>
          <div className="h-12 w-px bg-border/40" />
          <div className="text-left">
            <div className="text-[16px] text-muted-foreground font-medium">Instrument</div>
            <div className="text-[18px] font-bold text-foreground">Pre-Seed / SAFE</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[15px] text-muted-foreground font-mono-brand tracking-[0.15em] uppercase mr-1 font-semibold">Covering</span>
          {platforms.map((p, i) => (
            <span key={p} className="flex items-center gap-3">
              <span className="text-[16px] text-foreground/80 font-medium">{p}</span>
              {i < platforms.length - 1 && <span className="text-primary/30 text-[10px]">●</span>}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom stat strip */}
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="divider-glow" />
      <div className="flex items-center justify-center bg-card/40 backdrop-blur-xl opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            <div className="px-20 py-6 text-center">
              <div className="text-[36px] font-black text-primary tracking-tight stat-value">{s.value}</div>
              <div className="text-[16px] text-muted-foreground mt-1.5 tracking-wide font-medium">{s.label}</div>
            </div>
            {i < stats.length - 1 && <div className="w-px h-12 bg-border/25" />}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default CoverSlide;
