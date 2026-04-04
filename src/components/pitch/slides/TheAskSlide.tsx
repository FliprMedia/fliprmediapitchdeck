import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { Rocket, Globe, Megaphone, BarChart3, Users, TrendingUp, Mail, CheckCircle } from "lucide-react";

const unlocks = [
  { icon: Globe, label: "Core site fully operational with monetization paths" },
  { icon: Megaphone, label: "Stronger content cadence and newsletter systems" },
  { icon: BarChart3, label: "Early advertiser outreach and sponsorship sales" },
  { icon: Users, label: "Validated audience and revenue traction" },
  { icon: TrendingUp, label: "Improved UX, backend flows, and performance" },
  { icon: Rocket, label: "Investable foundation for a follow-on round" },
];

const idealInvestors = [
  "Angel Investors", "Strategic Media", "Commerce-Tech", "Creator Economy",
  "Marketplaces", "Ad-Tech",
];

const TheAskSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="strong" glowPosition="top-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">17 — THE ASK</div>
      <h2 className="text-[48px] font-extrabold leading-[1.15] mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        A focused <span className="text-primary neon-glow">$250K</span> to prove the model{" "}
        <span className="font-display italic text-[50px]">in a $170B+ market.</span>
      </h2>
      <p className="slide-subhead mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        A disciplined pre-seed round to complete the platform, activate revenue, accelerate traction, and prove the model.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Terms */}
          <div className="glass-card-elevated p-7 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-[52px] font-black text-primary stat-value">$250K</div>
                <div className="text-[16px] text-muted-foreground font-mono-brand tracking-[0.1em] uppercase mt-1">Raise Amount</div>
              </div>
              <div>
                <div className="text-[52px] font-black text-foreground stat-value">SAFE</div>
                <div className="text-[16px] text-muted-foreground font-mono-brand tracking-[0.1em] uppercase mt-1">Instrument</div>
              </div>
              <div>
                <div className="text-[52px] font-black text-accent stat-value">10–14</div>
                <div className="text-[16px] text-muted-foreground font-mono-brand tracking-[0.1em] uppercase mt-1">Months Runway</div>
              </div>
            </div>
          </div>

          {/* Unlocks */}
          <div className="glass-card p-5 flex-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-[18px] font-bold text-foreground">What This Round Unlocks</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {unlocks.map((u, i) => (
                <div key={u.label} className="flex items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
                  <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center shrink-0">
                    <u.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[17px] text-foreground font-medium leading-tight">{u.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Investors */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <span className="text-[16px] font-mono-brand text-muted-foreground tracking-[0.15em] uppercase block mb-2">Ideal Investors</span>
            <div className="flex flex-wrap gap-2.5">
              {idealInvestors.map(inv => (
                <div key={inv} className="glass-card px-4 py-2.5 text-[17px] font-semibold text-foreground">{inv}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="w-[460px] flex flex-col gap-4">
          <div className="glass-card-elevated p-10 flex-1 flex flex-col items-center justify-center text-center opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-5">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-[26px] font-bold text-foreground mb-3">Smart First Check</h3>
            <p className="text-[18px] text-muted-foreground leading-relaxed max-w-[340px] mb-6">
              Big market. Lean raise. Fast execution. Strong validation path.
              A lower-risk entry point with clear follow-on upside.
            </p>
            <div className="divider-glow w-full mb-5" />
            <div className="text-[16px] text-muted-foreground mb-1 font-mono-brand tracking-[0.1em] uppercase">Invest in live commerce media</div>
            <div className="text-[28px] font-black text-primary">Flipr.Media</div>
          </div>

          <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.65s' }}>
            <div className="flex items-center gap-2.5 mb-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-[17px] font-bold text-foreground">Founder Contact</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "Name", value: "Brian Weiss", color: "text-foreground", size: "text-[18px]" },
                { label: "Email", value: "hello@flipr.media", color: "text-primary", size: "text-[22px]" },
                { label: "Web", value: "flipr.media", color: "text-primary" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-[16px] text-muted-foreground font-mono-brand tracking-[0.1em] uppercase w-14">{item.label}</span>
                  <span className={`text-[18px] font-medium ${item.color}`}>{item.value}</span>
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