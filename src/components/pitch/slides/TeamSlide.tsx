import SlideLayout from "../SlideLayout";
import { User, Plus, Eye, Zap, Palette, Target, Mic, Rocket, Code, Users, FileText, Handshake, TrendingUp } from "lucide-react";

const whyWin = [
  { icon: Palette, label: "Deep media instinct — knows how to build editorial brands" },
  { icon: Eye, label: "Spotted white space before any competitor" },
  { icon: Code, label: "Shipped a full product solo using modern AI tooling" },
  { icon: Target, label: "Understands both the audience and the business model" },
  { icon: Mic, label: "Combines editorial credibility with business development" },
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
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-[100px] left-[100px] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[200px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">16 — TEAM & FOUNDER</div>
      <h2 className="slide-headline mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Solo founder. Full product. <span className="font-display italic text-[54px] text-primary">Zero capital burned.</span>
      </h2>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Founder profile */}
        <div className="w-[600px] flex flex-col gap-4">
          <div className="glass-card p-6 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-5">
              <div className="w-[100px] h-[100px] rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 border border-primary/20">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-[24px] font-bold text-foreground">Brian Weiss</h3>
                <p className="text-[16px] text-primary font-semibold">Founder & CEO — Flipr.Media</p>
                <p className="text-[15px] text-muted-foreground mt-2 leading-relaxed">
                  Background in entertainment, marketing, and brand strategy. Identified the live selling media gap early,
                  built and launched the entire Flipr.Media platform using AI-driven workflows — demonstrating
                  speed, resourcefulness, and product instinct.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {credibilityChips.map(chip => (
              <div key={chip} className="glass-card px-3.5 py-2 text-[15px] font-semibold text-foreground">{chip}</div>
            ))}
          </div>

          <div className="glass-card p-5 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 mb-3">
              <Rocket className="w-4.5 h-4.5 text-primary" />
              <span className="text-[15px] font-bold text-foreground">Why This Founder Can Win</span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {whyWin.map((w, i) => (
                <div key={w.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <w.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[15px] text-foreground font-medium">{w.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 border-accent/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4.5 h-4.5 text-accent" />
              <span className="text-[15px] font-bold text-foreground">Built with AI-Powered Tools</span>
            </div>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Leveraged AI-powered development to build and launch a complete media platform solo — proving that
              the right founder with modern tools can create real products before raising a dollar.
            </p>
          </div>
        </div>

        {/* Right: Future hires */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Users className="w-5 h-5 text-primary" />
            <span className="text-[18px] font-bold text-foreground">Founder + Future Hires</span>
            <div className="h-px flex-1 bg-primary/15" />
          </div>
          <p className="text-[15px] text-muted-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.52s' }}>
            This round funds the first key hires to scale from founder-led execution to an operational team.
          </p>

          <div className="flex flex-col gap-3 flex-1">
            {futureHires.map((hire, i) => (
              <div
                key={hire.role}
                className="glass-card p-4 flex items-start gap-3.5 opacity-0 animate-fade-up hover:border-primary/20 transition-colors"
                style={{ animationDelay: `${0.55 + i * 0.06}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-muted/30 border border-dashed border-muted-foreground/20 flex items-center justify-center shrink-0">
                  <Plus className="w-4.5 h-4.5 text-muted-foreground/70" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-foreground mb-0.5">{hire.role}</h4>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{hire.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-4 mt-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-[15px] text-muted-foreground leading-relaxed text-center italic">
              "The best vertical media companies start with a single obsessed founder. This round enables the transition to a <span className="text-primary font-semibold not-italic">high-leverage operating team</span>."
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TeamSlide;
