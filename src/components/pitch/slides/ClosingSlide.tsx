import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import DesktopMockup from "../mockups/DesktopMockup";
import MobileMockup from "../mockups/MobileMockup";
import fliprLogoDark from "@/assets/flipr-logo-dark.png";

const ClosingSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="full" glowPosition="center" />

    <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: `
        linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)
      `,
      backgroundSize: '120px 120px'
    }} />

    {/* Ghosted mockups */}
    <div className="absolute left-[-100px] top-[100px] opacity-[0.06] rotate-[-6deg]">
      <DesktopMockup variant="homepage" className="w-[450px] h-[320px]" />
    </div>
    <div className="absolute right-[40px] top-[120px] opacity-[0.05] rotate-[5deg]">
      <MobileMockup variant="seller" className="w-[100px] h-[190px]" />
    </div>
    <div className="absolute right-[-80px] bottom-[120px] opacity-[0.04] rotate-[4deg]">
      <DesktopMockup variant="platforms" className="w-[400px] h-[280px]" />
    </div>
    <div className="absolute left-[60px] bottom-[100px] opacity-[0.05] rotate-[-4deg]">
      <MobileMockup variant="live" className="w-[90px] h-[170px]" />
    </div>

    {/* Main content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
      <div className="slide-label mb-10 opacity-0 animate-fade-up">14 — CLOSING</div>

      <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <img src={fliprLogoDark} alt="Flipr.Media" className="h-[140px] w-auto" />
      </div>

      <h2 className="text-[42px] font-bold text-center text-foreground mb-4 max-w-[1100px] opacity-0 animate-fade-up leading-[1.2]" style={{ animationDelay: '0.2s' }}>
        Live selling will have a defining{" "}
        <span className="font-display italic text-primary text-[44px]">media brand.</span>
      </h2>

      <div className="w-48 divider-glow mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }} />

      <p className="text-[20px] text-muted-foreground text-center max-w-[920px] leading-[1.65] mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
        For Hollywood it was Variety. For advertising it was Ad Age. For finance it was Bloomberg. Live selling is a <span className="text-primary font-semibold">$170 billion global industry growing 30% a year</span> — and it does not have one yet. <span className="text-foreground font-semibold">Flipr Media is building it now.</span>
      </p>

      <div className="glass-card-elevated px-14 py-7 text-center opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
        <div className="text-[18px] font-semibold text-foreground mb-4 tracking-wide">Let's build this together</div>
        <div className="flex items-center gap-8">
          <div>
            <div className="text-[15px] text-muted-foreground font-mono-brand tracking-[0.1em] uppercase mb-0.5">Founder</div>
            <div className="text-[18px] font-semibold text-foreground">Brian Weiss</div>
          </div>
          <div className="w-px h-10 bg-border/20" />
          <div>
            <div className="text-[15px] text-muted-foreground font-mono-brand tracking-[0.1em] uppercase mb-0.5">Email</div>
            <div className="text-[24px] font-bold text-primary">hello@flipr.media</div>
          </div>
          <div className="w-px h-10 bg-border/20" />
          <div>
            <div className="text-[15px] text-muted-foreground font-mono-brand tracking-[0.1em] uppercase mb-0.5">Web</div>
            <div className="text-[18px] font-semibold text-primary">flipr.media</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 text-[15px] text-muted-foreground font-mono-brand tracking-[0.15em] opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        CONFIDENTIAL — FLIPR.MEDIA © 2026
      </div>
    </div>
  </SlideLayout>
);

export default ClosingSlide;
