import SlideLayout from "../SlideLayout";
import { Rocket, Globe, Megaphone, BarChart3, Users, TrendingUp, Mail, CheckCircle } from "lucide-react";

const unlocks = [
  { icon: Globe, label: "Launch-ready fully operational platform" },
  { icon: Megaphone, label: "Monetization systems in place" },
  { icon: BarChart3, label: "Stronger content cadence & editorial" },
  { icon: Users, label: "Advertiser and sponsor sales motion" },
  { icon: TrendingUp, label: "Measurable audience growth" },
  { icon: Rocket, label: "Clearer path to category leadership" },
];

const idealInvestors = [
  "Angel Investors",
  "Strategic Media",
  "Commerce-Tech",
  "Creator Economy",
  "Marketplaces",
  "Ad-Tech",
  "Future of Commerce",
];

const TheAskSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-accent/5" />
    <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[180px]" />
    <div className="absolute bottom-0 left-[200px] w-[600px] h-[400px] rounded-full bg-accent/3 blur-[160px]" />

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      {/* Header */}
      <div className="text-primary font-mono text-sm tracking-widest mb-3 opacity-0 animate-fade-up">17 — THE ASK</div>
      <h2 className="text-[40px] font-bold leading-tight mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Raising <span className="text-primary neon-glow">$500,000</span> to build the category leader in live selling media.
      </h2>
      <p className="text-lg text-muted-foreground mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Complete the platform, accelerate audience growth, establish monetization, and build the operational backbone.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Terms card */}
          <div className="glass-card p-6 border-primary/20 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-black text-primary">$500K</div>
                <div className="text-[11px] text-muted-foreground mt-1">Raise Amount</div>
              </div>
              <div>
                <div className="text-4xl font-black text-foreground">SAFE</div>
                <div className="text-[11px] text-muted-foreground mt-1">Instrument</div>
              </div>
              <div>
                <div className="text-4xl font-black text-accent">12–18mo</div>
                <div className="text-[11px] text-muted-foreground mt-1">Runway</div>
              </div>
            </div>
          </div>

          {/* What this round unlocks */}
          <div className="glass-card p-5 flex-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-foreground">What This Round Unlocks</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {unlocks.map((u, i) => (
                <div key={u.label} className="flex items-center gap-2.5 opacity-0 animate-fade-up" style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <u.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[11px] text-foreground/80 font-medium leading-tight">{u.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal investors */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">Ideal Investors</span>
            <div className="flex flex-wrap gap-2">
              {idealInvestors.map(inv => (
                <div key={inv} className="glass-card px-3 py-1.5 text-[10px] font-semibold text-foreground/80">{inv}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: CTA + Contact */}
        <div className="w-[480px] flex flex-col gap-4">
          {/* Big CTA */}
          <div className="glass-card p-8 border-primary/30 flex-1 flex flex-col items-center justify-center text-center opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center mb-4">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Join the Round</h3>
            <p className="text-[12px] text-muted-foreground leading-relaxed max-w-[360px] mb-6">
              Be part of building the media and intelligence layer for a $170B+ market.
              Early investors get access to category ownership in live commerce.
            </p>
            <div className="w-full h-px bg-border/30 mb-5" />
            <div className="text-[11px] text-muted-foreground mb-1">Invest in the future of live commerce media</div>
            <div className="text-lg font-black text-primary">Flipr.Media</div>
          </div>

          {/* Contact placeholder */}
          <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.65s' }}>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-foreground">Founder Contact</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-muted-foreground w-14">Name</span>
                <span className="text-[11px] text-foreground font-medium">Brian Weiss</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-muted-foreground w-14">Email</span>
                <span className="text-[11px] text-primary font-medium">brian@flipr.media</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-muted-foreground w-14">Web</span>
                <span className="text-[11px] text-primary font-medium">flipr.media</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TheAskSlide;
