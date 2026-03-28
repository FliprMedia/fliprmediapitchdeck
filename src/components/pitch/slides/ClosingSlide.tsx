import SlideLayout from "../SlideLayout";

const ClosingSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />

    {/* Rich glow system */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full bg-primary/[0.04] blur-[250px]" />
    <div className="absolute top-[100px] right-[200px] w-[400px] h-[400px] rounded-full bg-accent/[0.035] blur-[150px]" />
    <div className="absolute bottom-[100px] left-[200px] w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[120px]" />

    {/* Architectural grid */}
    <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: `
        linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)
      `,
      backgroundSize: '120px 120px'
    }} />

    {/* Ghosted mockup layers */}
    <div className="absolute left-[-80px] top-[150px] w-[420px] opacity-[0.04] rotate-[-8deg]">
      <div className="rounded-2xl border border-border/20 bg-card/10 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/10">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/10" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/10" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/10" />
        </div>
        <div className="p-5 space-y-3">
          <div className="h-2.5 bg-foreground/5 rounded w-1/2" />
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => <div key={i} className="h-20 bg-muted/5 rounded-lg" />)}
          </div>
        </div>
      </div>
    </div>

    <div className="absolute right-[-60px] bottom-[180px] w-[380px] opacity-[0.03] rotate-[6deg]">
      <div className="rounded-2xl border border-border/15 bg-card/8 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/8">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/8" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/8" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="p-4 space-y-2">
          <div className="h-2 bg-foreground/4 rounded w-2/3" />
          <div className="h-24 bg-muted/4 rounded-lg" />
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
      <div className="slide-label mb-10 opacity-0 animate-fade-up">18 — CLOSING VISION</div>

      {/* Logo */}
      <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="text-[110px] font-black tracking-[-0.04em] leading-none">
          <span className="text-primary neon-glow">Flipr</span>
          <span className="text-foreground">.Media</span>
        </div>
      </div>

      {/* Headline */}
      <h2 className="text-[34px] font-bold text-center text-foreground mb-4 max-w-[900px] opacity-0 animate-fade-up leading-[1.2]" style={{ animationDelay: '0.2s' }}>
        The live selling economy will have a{" "}
        <span className="font-display italic text-primary text-[36px]">defining media brand.</span>
      </h2>

      {/* Divider */}
      <div className="w-48 divider-glow mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }} />

      {/* Closing copy */}
      <p className="text-[17px] text-muted-foreground text-center max-w-[800px] leading-[1.7] mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
        Flipr.Media is built to become the trusted voice, discovery engine, and intelligence layer for one of the
        fastest-evolving commerce behaviors on the internet. The platforms are growing. The sellers are rising.
        The advertisers are coming. The category now needs its <span className="text-primary font-semibold">media leader</span>.
      </p>

      {/* Contact card */}
      <div className="glass-card-elevated px-14 py-7 text-center opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
        <div className="text-[12px] font-semibold text-foreground mb-4 tracking-wide">Let's Build This Together</div>
        <div className="flex items-center gap-8">
          <div>
            <div className="text-[9px] text-muted-foreground/40 font-mono-brand tracking-[0.1em] uppercase mb-0.5">Founder</div>
            <div className="text-sm font-semibold text-foreground">Brian Weiss</div>
          </div>
          <div className="w-px h-10 bg-border/20" />
          <div>
            <div className="text-[9px] text-muted-foreground/40 font-mono-brand tracking-[0.1em] uppercase mb-0.5">Email</div>
            <div className="text-sm font-semibold text-primary">brian@flipr.media</div>
          </div>
          <div className="w-px h-10 bg-border/20" />
          <div>
            <div className="text-[9px] text-muted-foreground/40 font-mono-brand tracking-[0.1em] uppercase mb-0.5">Web</div>
            <div className="text-sm font-semibold text-primary">flipr.media</div>
          </div>
        </div>
      </div>

      {/* Confidential */}
      <div className="absolute bottom-10 text-[10px] text-muted-foreground/20 font-mono-brand tracking-[0.15em] opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        CONFIDENTIAL — FLIPR.MEDIA © 2025
      </div>
    </div>
  </SlideLayout>
);

export default ClosingSlide;
