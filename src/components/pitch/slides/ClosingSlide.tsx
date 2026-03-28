import SlideLayout from "../SlideLayout";

const ClosingSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-accent/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/5 blur-[200px]" />
    
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: 'linear-gradient(hsl(145 100% 49% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(145 100% 49% / 0.3) 1px, transparent 1px)',
      backgroundSize: '60px 60px'
    }} />

    <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
      {/* Logo */}
      <div className="mb-8 opacity-0 animate-fade-up">
        <div className="text-8xl font-black tracking-tighter">
          <span className="text-primary neon-glow">Flipr</span>
          <span className="text-foreground">.Media</span>
        </div>
      </div>

      <div className="text-3xl font-bold text-center text-muted-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        The Bloomberg of Live Commerce
      </div>

      <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }} />

      <p className="text-xl text-muted-foreground text-center max-w-[700px] mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
        Every fast-growing industry needs its own media platform.<br />
        Live commerce is a $50B+ market with zero dedicated coverage.<br />
        <span className="text-foreground font-semibold">We're building the one that will define it.</span>
      </p>

      {/* Contact */}
      <div className="glass-card px-10 py-6 text-center opacity-0 animate-scale-in" style={{ animationDelay: '0.45s' }}>
        <div className="text-lg font-semibold text-foreground mb-2">Let's Talk</div>
        <div className="text-primary font-mono text-lg mb-1">flipr.media</div>
        <div className="text-muted-foreground text-sm">investor@flipr.media</div>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-12 text-sm text-muted-foreground/40 font-mono opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        Confidential — Flipr.Media © 2025
      </div>
    </div>
  </SlideLayout>
);

export default ClosingSlide;
