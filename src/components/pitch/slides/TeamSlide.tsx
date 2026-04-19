import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { User, Plus, Eye, Code, Target, Mic, Rocket, Users, FileText, Handshake, TrendingUp } from "lucide-react";

const whyWin = [
  { icon: Eye, label: "Spotted the white space before any competitor" },
  { icon: Code, label: "Built and shipped the platform solo with minimal capital" },
  { icon: Mic, label: "Deep media instinct — understands editorial and brand-building" },
  { icon: Target, label: "Knows the audience and the business model" },
];

const futureHires = [
  { icon: Code, role: "Engineering / Product", desc: "Scale the platform and data infrastructure" },
  { icon: FileText, role: "Editorial / Content", desc: "Lead the newsroom and editorial cadence" },
  { icon: Handshake, role: "Partnerships / Ad Sales", desc: "Advertiser relationships and sponsorships" },
  { icon: TrendingUp, role: "Growth / Operations", desc: "Newsletter, SEO, analytics, and operations" },
];

const TeamSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="top-left" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">12 — FOUNDER</div>
      <h2 className="slide-headline mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        A founder who knows media —{" "}
        <span className="font-display italic text-[58px] text-primary">and ships product.</span>
      </h2>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left */}
        <div className="w-[600px] flex flex-col gap-4">
          <div className="glass-card p-7 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-5">
              <div className="w-[100px] h-[100px] rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 border border-primary/20">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-[28px] font-bold text-foreground">Brian Weiss</h3>
                <p className="text-[18px] text-primary font-semibold mb-3">Founder & CEO — Flipr.Media</p>
                <p className="text-[17px] text-muted-foreground leading-relaxed">
                  Serial entrepreneur and media consultant. Founded L.A. Cannabis News (Canopy Boulder accelerator). Featured in Forbes and Business Insider. <span className="text-primary font-semibold">Identified the live selling media gap early, built the entire Flipr Media platform himself, and launched it live — all with minimal capital.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-[18px] font-bold text-foreground">Why this founder can win</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {whyWin.map((w) => (
                <div key={w.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <w.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[17px] text-foreground font-medium">{w.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <Users className="w-6 h-6 text-primary" />
            <span className="text-[20px] font-bold text-foreground">First key hires</span>
            <div className="h-px flex-1 bg-primary/15" />
          </div>
          <p className="text-[17px] text-muted-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            This round funds the first hires that move Flipr from founder-led execution to an operating team.
          </p>

          <div className="flex flex-col gap-3.5 flex-1">
            {futureHires.map((hire, i) => (
              <div
                key={hire.role}
                className="glass-card p-5 flex items-start gap-4 opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.55 + i * 0.06}s` }}
              >
                <div className="w-11 h-11 rounded-lg bg-muted/30 border border-dashed border-muted-foreground/20 flex items-center justify-center shrink-0">
                  <Plus className="w-5 h-5 text-muted-foreground/70" />
                </div>
                <div>
                  <h4 className="text-[19px] font-bold text-foreground mb-0.5">{hire.role}</h4>
                  <p className="text-[17px] text-muted-foreground leading-relaxed">{hire.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TeamSlide;
