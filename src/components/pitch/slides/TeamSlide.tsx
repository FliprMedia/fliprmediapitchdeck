import SlideLayout from "../SlideLayout";
import { User, Plus, Eye, Zap, Palette, Target, Mic, Rocket, Code, Users, FileText, Handshake, TrendingUp } from "lucide-react";

const whyWin = [
  { icon: Palette, label: "Understands media & storytelling" },
  { icon: Eye, label: "Sees white space early" },
  { icon: Code, label: "Builds quickly with modern tools" },
  { icon: Target, label: "Positions brands & sells opportunity" },
  { icon: Mic, label: "Blends editorial instinct with BD" },
];

const credibilityChips = [
  "Media & Entertainment Background",
  "Marketing & Brand Strategy",
  "Entrepreneurial Execution",
  "AI-Driven Product Development",
  "Category Research & Analysis",
  "Partnerships & Business Development",
];

const futureHires = [
  { icon: Code, role: "Engineering / Product", desc: "Scale platform beyond prototype, build data infrastructure" },
  { icon: FileText, role: "Content / Editorial", desc: "Lead newsroom, editorial calendar, contributor network" },
  { icon: Handshake, role: "Partnerships / Ad Sales", desc: "Advertiser relationships, sponsorship packaging, outbound" },
  { icon: TrendingUp, role: "Operations / Growth", desc: "Newsletter, SEO, social, analytics, and growth systems" },
];

const TeamSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
    <div className="absolute top-[100px] left-[100px] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[200px]" />

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      {/* Header */}
      <div className="text-primary font-mono text-sm tracking-widest mb-3 opacity-0 animate-fade-up">16 — TEAM & FOUNDER</div>
      <h2 className="text-[42px] font-bold leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Founder-led, category-obsessed, <span className="text-primary">execution-driven.</span>
      </h2>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Founder profile */}
        <div className="w-[600px] flex flex-col gap-4">
          {/* Profile card */}
          <div className="glass-card p-6 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-5">
              <div className="w-[100px] h-[100px] rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 border border-primary/20">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground">Brian Weiss</h3>
                <p className="text-sm text-primary font-semibold">Founder & CEO — Flipr.Media</p>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                  Media-minded entrepreneur with a background in entertainment and marketing. Spotted the live selling
                  category early, recognized the media gap, and built Flipr.Media from the ground up using Lovable and
                  modern AI-driven workflows — demonstrating speed, resourcefulness, and deep founder hustle.
                </p>
              </div>
            </div>
          </div>

          {/* Credibility chips */}
          <div className="flex flex-wrap gap-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {credibilityChips.map(chip => (
              <div key={chip} className="glass-card px-3 py-1.5 text-[10px] font-semibold text-foreground/80">{chip}</div>
            ))}
          </div>

          {/* Why this founder can win */}
          <div className="glass-card p-5 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 mb-3">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-foreground">Why This Founder Can Win</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {whyWin.map((w, i) => (
                <div key={w.label} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <w.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-[11px] text-foreground/80 font-medium">{w.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Built with Lovable note */}
          <div className="glass-card p-4 border-accent/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-foreground">Built with Lovable</span>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Leveraged AI-powered vibe coding to build and launch a full media platform from scratch — proving that
              a single founder with vision and modern tools can create real products fast.
            </p>
          </div>
        </div>

        {/* Right: Future hires */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Users className="w-5 h-5 text-primary" />
            <span className="text-base font-bold text-foreground">Founder + Future Hires</span>
            <div className="h-px flex-1 bg-primary/15" />
          </div>
          <p className="text-[11px] text-muted-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.52s' }}>
            Key hires unlocked by this round to scale from founder-led to operational team.
          </p>

          <div className="flex flex-col gap-3 flex-1">
            {futureHires.map((hire, i) => (
              <div
                key={hire.role}
                className="glass-card p-4 flex items-start gap-3 opacity-0 animate-fade-up hover:border-primary/20 transition-colors"
                style={{ animationDelay: `${0.55 + i * 0.06}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-muted/30 border border-dashed border-muted-foreground/20 flex items-center justify-center shrink-0">
                  <Plus className="w-4 h-4 text-muted-foreground/50" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-foreground mb-0.5">{hire.role}</h4>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{hire.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team philosophy */}
          <div className="glass-card p-4 mt-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-[10px] text-muted-foreground leading-relaxed text-center italic">
              "Small, focused teams with strong founder DNA build the best vertical media companies.
              This round enables the transition from solo founder to <span className="text-primary font-semibold not-italic">high-leverage operating team</span>."
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TeamSlide;
