import SlideLayout from "../SlideLayout";
import { Newspaper, Radio, BarChart3, Mail } from "lucide-react";

const ClosingSlide = () => (
  <SlideLayout>
    {/* Layered background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-accent/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-primary/5 blur-[250px]" />
    <div className="absolute top-[100px] right-[200px] w-[400px] h-[400px] rounded-full bg-accent/4 blur-[150px]" />
    <div className="absolute bottom-[100px] left-[200px] w-[300px] h-[300px] rounded-full bg-primary/4 blur-[120px]" />

    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: 'linear-gradient(hsl(145 100% 49% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(145 100% 49% / 0.4) 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }} />

    {/* Floating site mockup layers — left */}
    <div className="absolute left-[-60px] top-[180px] w-[380px] opacity-[0.08] rotate-[-8deg] animate-fade-up" style={{ animationDelay: '0.8s' }}>
      <div className="rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/20">
          <div className="w-2 h-2 rounded-full bg-destructive/30" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
        </div>
        <div className="p-4 space-y-2">
          <div className="h-2 bg-primary/10 rounded w-1/2" />
          <div className="h-1.5 bg-muted-foreground/5 rounded w-full" />
          <div className="h-1.5 bg-muted-foreground/5 rounded w-3/4" />
          <div className="grid grid-cols-3 gap-2 mt-3">
            {[1,2,3].map(i => <div key={i} className="h-16 bg-muted/10 rounded" />)}
          </div>
        </div>
      </div>
    </div>

    {/* Floating mockup — right */}
    <div className="absolute right-[-40px] bottom-[200px] w-[340px] opacity-[0.06] rotate-[6deg] animate-fade-up" style={{ animationDelay: '1s' }}>
      <div className="rounded-xl border border-border/20 bg-card/15 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/15">
          <div className="w-2 h-2 rounded-full bg-destructive/20" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
          <div className="w-2 h-2 rounded-full bg-primary/20" />
        </div>
        <div className="p-3 space-y-2">
          <div className="h-2 bg-primary/8 rounded w-2/3" />
          <div className="h-20 bg-muted/8 rounded" />
          <div className="h-1.5 bg-muted-foreground/4 rounded w-full" />
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
      {/* Slide label */}
      <div className="text-primary font-mono text-sm tracking-widest mb-8 opacity-0 animate-fade-up">18 — CLOSING VISION</div>

      {/* Logo */}
      <div className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="text-[96px] font-black tracking-tighter leading-none">
          <span className="text-primary neon-glow">Flipr</span>
          <span className="text-foreground">.Media</span>
        </div>
      </div>

      {/* Headline */}
      <h2 className="text-[32px] font-bold text-center text-foreground mb-3 max-w-[900px] opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        The live selling economy will have a defining media brand.
      </h2>

      {/* Divider */}
      <div className="h-[2px] w-40 bg-gradient-to-r from-transparent via-primary to-transparent mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }} />

      {/* Closing copy */}
      <p className="text-[17px] text-muted-foreground text-center max-w-[820px] leading-relaxed mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
        Flipr.Media is built to become the trusted voice, discovery engine, and intelligence layer for one of the
        fastest-evolving commerce behaviors on the internet. The platforms are growing. The sellers are rising.
        The advertisers are coming. The category now needs its <span className="text-primary font-semibold">media leader</span>.
      </p>

      {/* Platform icons strip */}
      <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.45s' }}>
        {[Newspaper, Radio, BarChart3, Mail].map((Icon, i) => (
          <div key={i} className="w-10 h-10 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center">
            <Icon className="w-4.5 h-4.5 text-primary/50" />
          </div>
        ))}
      </div>

      {/* Contact card */}
      <div className="glass-card px-12 py-6 text-center opacity-0 animate-scale-in border-primary/20" style={{ animationDelay: '0.55s' }}>
        <div className="text-sm font-semibold text-foreground mb-3">Let's Build This Together</div>
        <div className="flex items-center gap-6">
          <div>
            <div className="text-[10px] text-muted-foreground mb-0.5">Founder</div>
            <div className="text-sm font-medium text-foreground">Brian Weiss</div>
          </div>
          <div className="w-px h-8 bg-border/30" />
          <div>
            <div className="text-[10px] text-muted-foreground mb-0.5">Email</div>
            <div className="text-sm font-medium text-primary">brian@flipr.media</div>
          </div>
          <div className="w-px h-8 bg-border/30" />
          <div>
            <div className="text-[10px] text-muted-foreground mb-0.5">Web</div>
            <div className="text-sm font-medium text-primary">flipr.media</div>
          </div>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-10 text-[11px] text-muted-foreground/30 font-mono opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        Confidential — Flipr.Media © 2025
      </div>
    </div>
  </SlideLayout>
);

export default ClosingSlide;
