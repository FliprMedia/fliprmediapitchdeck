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
    <div className="absolute top-[20%] left-[45%] -translate-x-1/2 w-[1200px] h-[700px] rounded-full bg-primary/[0.07] blur-[300px]" />
    <div className="absolute bottom-[-200px] left-[-100px] w-[700px] h-[700px] rounded-full bg-accent/[0.04] blur-[250px]" />
    <div className="absolute top-[-100px] right-[-50px] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[200px]" />

    {/* Accent line */}
    <div className="absolute top-0 left-[160px] w-px h-[500px] bg-gradient-to-b from-primary/15 via-primary/3 to-transparent" />

    {/* Large glowing background logo — centered */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
      <img src={fliprLogoDark} alt="" className="h-[800px] w-auto opacity-[0.12]" />
    </div>

    {/* Main content */}
    <div className="relative z-10 flex flex-col justify-center h-full pl-24 pr-32 max-w-[1300px] pb-[85px]">
      {/* Badge */}
      <div className="mb-7 opacity-0 animate-fade-up">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/[0.04] text-primary text-[13px] font-mono-brand tracking-[0.15em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Investor Presentation — 2025
        </span>
      </div>

      {/* Hero Logo — large and prominent */}
      <div className="mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <img src={fliprLogoDark} alt="Flipr.Media" className="h-[260px] w-auto" />
      </div>

      {/* Subheadline */}
      <h1 className="text-[38px] font-bold leading-[1.2] mb-5 max-w-[900px] opacity-0 animate-fade-up" style={{ animationDelay: '0.18s' }}>
        <span className="text-foreground">The media, discovery, and intelligence platform</span>{" "}
        <span className="gradient-text font-display italic text-[40px]">for the $170B+ live commerce economy.</span>
      </h1>

      {/* Support copy */}
      <p className="text-[18px] text-foreground/80 leading-relaxed mb-8 max-w-[720px] opacity-0 animate-fade-up" style={{ animationDelay: '0.26s' }}>
        Live selling sits at the intersection of live commerce, social commerce, creator-led retail, and advertising. As the ecosystem matures, value will accrue to the trusted media and intelligence layer that shapes attention, rankings, and advertiser demand. We're building it.
      </p>

      {/* Raise pill + platform strip */}
      <div className="flex items-center gap-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.34s' }}>
        <div className="glass-card-elevated px-7 py-4 flex items-center gap-5 animate-pulse-neon shrink-0">
          <span className="text-primary font-mono-brand text-[14px] tracking-[0.2em]">RAISING</span>
          <span className="text-[44px] font-black text-foreground tracking-tight stat-value">$500K</span>
          <div className="h-10 w-px bg-border/30" />
          <div className="text-left">
            <div className="text-[14px] text-muted-foreground/70">Instrument</div>
            <div className="text-[15px] font-semibold text-foreground">Pre-Seed / SAFE</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-[13px] text-muted-foreground/70 font-mono-brand tracking-[0.15em] uppercase mr-1">Covering</span>
          {platforms.map((p, i) => (
            <span key={p} className="flex items-center gap-2.5">
              <span className="text-[13px] text-muted-foreground/80 font-medium">{p}</span>
              {i < platforms.length - 1 && <span className="text-primary/20 text-[13px]">●</span>}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom stat strip */}
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="divider-glow" />
      <div className="flex items-center justify-center bg-card/30 backdrop-blur-xl opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            <div className="px-16 py-5 text-center">
              <div className="text-[28px] font-black text-primary tracking-tight stat-value">{s.value}</div>
              <div className="text-[14px] text-muted-foreground/80 mt-1 tracking-wide">{s.label}</div>
            </div>
            {i < stats.length - 1 && <div className="w-px h-10 bg-border/20" />}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default CoverSlide;
