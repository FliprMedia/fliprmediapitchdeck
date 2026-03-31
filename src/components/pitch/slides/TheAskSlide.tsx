import SlideLayout from "../SlideLayout";
import { Rocket, Globe, Megaphone, BarChart3, Users, TrendingUp, Mail, CheckCircle } from "lucide-react";

const unlocks = [
  { icon: Globe, label: "Fully operational platform with monetization" },
  { icon: Megaphone, label: "Active advertiser and sponsor revenue" },
  { icon: BarChart3, label: "Consistent editorial cadence at scale" },
  { icon: Users, label: "Outbound sales motion for brands" },
  { icon: TrendingUp, label: "Measurable audience and subscriber growth" },
  { icon: Rocket, label: "Clear metrics for a Series A conversation" },
];

const idealInvestors = [
  "Angel Investors", "Strategic Media", "Commerce-Tech", "Creator Economy",
  "Marketplaces", "Ad-Tech", "Future of Commerce",
];

const TheAskSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[200px]" />
    <div className="absolute bottom-0 left-[200px] w-[600px] h-[400px] rounded-full bg-accent/[0.03] blur-[160px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">17 — THE ASK</div>
      <h2 className="text-[38px] font-extrabold leading-[1.15] mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <span className="text-primary neon-glow">$200K</span> to own the media layer{" "}
        <span className="font-display italic text-[40px]">of a $170B+ market.</span>
      </h2>
      <p className="slide-subhead mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        A disciplined pre-seed round to complete the platform, activate revenue, and prove the model with capital efficiency.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Terms */}
          <div className="glass-card-elevated p-7 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-[44px] font-black text-primary stat-value">$500K</div>
                <div className="text-[13px] text-muted-foreground/70 font-mono-brand tracking-[0.1em] uppercase mt-1">Raise Amount</div>
              </div>
              <div>
                <div className="text-[44px] font-black text-foreground stat-value">SAFE</div>
                <div className="text-[13px] text-muted-foreground/70 font-mono-brand tracking-[0.1em] uppercase mt-1">Instrument</div>
              </div>
              <div>
                <div className="text-[44px] font-black text-accent stat-value">12–18</div>
                <div className="text-[13px] text-muted-foreground/70 font-mono-brand tracking-[0.1em] uppercase mt-1">Months Runway</div>
              </div>
            </div>
          </div>

          {/* Unlocks */}
          <div className="glass-card p-5 flex-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-[14px] font-bold text-foreground">What This Round Unlocks</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {unlocks.map((u, i) => (
                <div key={u.label} className="flex items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
                  <div className="w-8 h-8 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center shrink-0">
                    <u.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[13px] text-foreground/95 font-medium leading-tight">{u.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Investors */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <span className="text-[13px] font-mono-brand text-muted-foreground/70 tracking-[0.15em] uppercase block mb-2">Ideal Investors</span>
            <div className="flex flex-wrap gap-2">
              {idealInvestors.map(inv => (
                <div key={inv} className="glass-card px-3 py-1.5 text-[13px] font-semibold text-foreground">{inv}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: CTA + Contact */}
        <div className="w-[460px] flex flex-col gap-4">
          <div className="glass-card-elevated p-10 flex-1 flex flex-col items-center justify-center text-center opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-5">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Join the Round</h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[340px] mb-6">
              First-mover position in the media layer of a $170B+ market.
              Early investors are buying category ownership at pre-revenue pricing.
            </p>
            <div className="divider-glow w-full mb-5" />
            <div className="text-[13px] text-muted-foreground/70 mb-1 font-mono-brand tracking-[0.1em] uppercase">Invest in the future of live commerce media</div>
            <div className="text-2xl font-black text-primary">Flipr.Media</div>
          </div>

          <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.65s' }}>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-[13px] font-bold text-foreground">Founder Contact</span>
            </div>
            <div className="space-y-2">
              {[
                { label: "Name", value: "Brian Weiss", color: "text-foreground" },
                { label: "Email", value: "brian@flipr.media", color: "text-primary" },
                { label: "Web", value: "flipr.media", color: "text-primary" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-[14px] text-muted-foreground/70 font-mono-brand tracking-[0.1em] uppercase w-12">{item.label}</span>
                  <span className={`text-[14px] font-medium ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TheAskSlide;
