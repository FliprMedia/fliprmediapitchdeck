import SlideLayout from "../SlideLayout";
import DesktopMockup from "../mockups/DesktopMockup";
import MobileMockup from "../mockups/MobileMockup";
import fliprLogoDark from "@/assets/flipr-logo-dark.png";

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

    {/* Ghosted large mockups — left */}
    <div className="absolute left-[-100px] top-[100px] opacity-[0.06] rotate-[-6deg]">
      <DesktopMockup variant="homepage" className="w-[450px] h-[320px]" />
    </div>

    {/* Ghosted mobile — right */}
    <div className="absolute right-[40px] top-[120px] opacity-[0.05] rotate-[5deg]">
      <MobileMockup variant="seller" className="w-[100px] h-[190px]" />
    </div>

    {/* Ghosted desktop — bottom right */}
    <div className="absolute right-[-80px] bottom-[120px] opacity-[0.04] rotate-[4deg]">
      <DesktopMockup variant="platforms" className="w-[400px] h-[280px]" />
    </div>

    {/* Ghosted mobile — bottom left */}
    <div className="absolute left-[60px] bottom-[100px] opacity-[0.05] rotate-[-4deg]">
      <MobileMockup variant="live" className="w-[90px] h-[170px]" />
    </div>

    {/* Main content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
      <div className="slide-label mb-10 opacity-0 animate-fade-up">18 — CLOSING VISION</div>

      {/* Logo */}
      <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <img src={fliprLogoDark} alt="Flipr.Media" className="h-[140px] w-auto" />
      </div>

      {/* Headline */}
      <h2 className="text-[34px] font-bold text-center text-foreground mb-4 max-w-[900px] opacity-0 animate-fade-up leading-[1.2]" style={{ animationDelay: '0.2s' }}>
        Every maturing ecosystem needs a trusted{" "}
        <span className="font-display italic text-primary text-[36px]">media, discovery, and intelligence layer.</span>
      </h2>

      {/* Divider */}
      <div className="w-48 divider-glow mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }} />

      {/* Closing copy */}
      <p className="text-[17px] text-muted-foreground text-center max-w-[800px] leading-[1.7] mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
        Big market. Focused raise. Fast execution. Flipr.Media is raising $200K to prove the model, validate demand, and build an investable foundation — with clear follow-on upside as the <span className="text-primary font-semibold">$170B+ live commerce economy</span> keeps accelerating.
      </p>

      {/* Contact card */}
      <div className="glass-card-elevated px-14 py-7 text-center opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
        <div className="text-[14px] font-semibold text-foreground mb-4 tracking-wide">Let's Build This Together</div>
        <div className="flex items-center gap-8">
          <div>
            <div className="text-[14px] text-muted-foreground/70 font-mono-brand tracking-[0.1em] uppercase mb-0.5">Founder</div>
            <div className="text-sm font-semibold text-foreground">Brian Weiss</div>
          </div>
          <div className="w-px h-10 bg-border/20" />
          <div>
            <div className="text-[14px] text-muted-foreground/70 font-mono-brand tracking-[0.1em] uppercase mb-0.5">Email</div>
            <div className="text-sm font-semibold text-primary">brian@flipr.media</div>
          </div>
          <div className="w-px h-10 bg-border/20" />
          <div>
            <div className="text-[14px] text-muted-foreground/70 font-mono-brand tracking-[0.1em] uppercase mb-0.5">Web</div>
            <div className="text-sm font-semibold text-primary">flipr.media</div>
          </div>
        </div>
      </div>

      {/* Confidential */}
      <div className="absolute bottom-10 text-[13px] text-muted-foreground/70 font-mono-brand tracking-[0.15em] opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        CONFIDENTIAL — FLIPR.MEDIA © 2025
      </div>
    </div>
  </SlideLayout>
);

export default ClosingSlide;
