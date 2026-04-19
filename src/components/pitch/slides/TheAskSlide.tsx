import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { Rocket, Globe, Megaphone, BarChart3, Users, Mail, CheckCircle } from "lucide-react";

const unlocks = [
  { icon: Globe, label: "Site fully operational with monetization live" },
  { icon: Megaphone, label: "Stronger content cadence and newsletter growth" },
  { icon: BarChart3, label: "First advertisers and sponsorship revenue" },
  { icon: Users, label: "Audience and seller traction validated" },
];

const TheAskSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="strong" glowPosition="top-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">13 — THE ASK</div>
      <h2 className="text-[48px] font-extrabold leading-[1.15] mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Raising <span className="text-primary neon-glow">$250K</span> to prove this model{" "}
        <span className="font-display italic text-[50px]">in a $170B+ market.</span>
      </h2>
      <p className="text-[19px] text-foreground/85 leading-[1.55] max-w-[1300px] mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        A disciplined early check. The product is already live. This round turns Flipr Media into a monetizing publication with a growing audience, first advertisers, and a clear path to a follow-on round.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-5">
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

          <div className="glass-card p-6 flex-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-[20px] font-bold text-foreground">What this round unlocks</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {unlocks.map((u, i) => (
                <div key={u.label} className="flex items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
                  <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center shrink-0">
                    <u.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[18px] text-foreground font-medium leading-tight">{u.label}</span>
                </div>
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
            <h3 className="text-[26px] font-bold text-foreground mb-3">A disciplined first check</h3>
            <p className="text-[18px] text-muted-foreground leading-relaxed max-w-[340px] mb-6">
              Big market. Lean raise. Shipped product. Clear path to revenue and a follow-on round.
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
                  <span className={`${item.size || 'text-[18px]'} font-semibold ${item.color}`}>{item.value}</span>
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
