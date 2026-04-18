import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { User, Plus, Eye, Zap, Palette, Target, Mic, Rocket, Code, Users, FileText, Handshake, TrendingUp } from "lucide-react";

const whyWin = [
  { icon: Palette, label: "Deep media instinct — knows how to build editorial brands" },
  { icon: Eye, label: "Spotted white space before any competitor" },
  { icon: Code, label: "Shipped a full product solo using modern AI tooling" },
  { icon: Target, label: "Understands both the audience and the business model" },
  { icon: Mic, label: "Combines editorial credibility with business development" },
];

const credibilityChips = [
  "Media & Entertainment",
  "Marketing & Brand Strategy",
  "Entrepreneurial Execution",
  "AI-Driven Product Dev",
  "Category Research",
  "Partnerships & BD",
];

const futureHires = [
  { icon: Code, role: "Engineering / Product", desc: "Scale platform, build data infrastructure" },
  { icon: FileText, role: "Content / Editorial", desc: "Lead newsroom, editorial calendar" },
  { icon: Handshake, role: "Partnerships / Ad Sales", desc: "Advertiser relationships, sponsorship" },
  { icon: TrendingUp, role: "Operations / Growth", desc: "Newsletter, SEO, analytics, growth" },
];

const TeamSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="top-left" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">16 — TEAM & FOUNDER</div>
      <h2 className="slide-headline mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Built by someone who knows media, business, <span className="font-display italic text-[58px] text-primary">and this market.</span>
      </h2>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left */}
        <div className="w-[600px] flex flex-col gap-4">
          <div className="glass-card p-6 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-5">
              <div className="w-[100px] h-[100px] rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 border border-primary/20">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-[26px] font-bold text-foreground">Brian Weiss</h3>
                <p className="text-[18px] text-primary font-semibold">Founder & CEO — Flipr.Media</p>
                <p className="text-[16px] text-muted-foreground mt-2 leading-relaxed">
                  Brian Weiss is a serial entrepreneur and media consultant who has advised over 100 businesses across entertainment, cannabis, digital media, and tech. He founded L.A. Cannabis News, accepted into the Canopy Boulder accelerator. Featured in Forbes and Business Insider. His grandfather Lou Weiss spent 70 years at William Morris Agency, rising to co-chairman and helping shape modern entertainment. <span className="text-primary font-semibold">Media is not a new skill for this founder — it is in the DNA.</span> Brian identified the live selling media gap early, built the entire Flipr Media platform himself, and launched it live — all with minimal capital.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {credibilityChips.map(chip => (
              <div key={chip} className="glass-card px-4 py-2.5 text-[16px] font-semibold text-foreground">{chip}</div>
            ))}
          </div>

          <div className="glass-card p-5 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 mb-3">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-[17px] font-bold text-foreground">Why This Founder Can Win</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {whyWin.map((w) => (
                <div key={w.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <w.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <span className="text-[17px] text-foreground font-medium">{w.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-5 border-accent/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-center gap-2 mb-1.5">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-[17px] font-bold text-foreground">Built with AI-Powered Tools</span>
            </div>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              Leveraged AI-powered development to build and launch a complete media platform solo — proving the right founder with modern tools can create real products before raising.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Users className="w-6 h-6 text-primary" />
            <span className="text-[20px] font-bold text-foreground">Founder + Future Hires</span>
            <div className="h-px flex-1 bg-primary/15" />
          </div>
          <p className="text-[17px] text-muted-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.52s' }}>
            This round funds the first key hires to scale from founder-led execution to an operational team.
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
                  <h4 className="text-[18px] font-bold text-foreground mb-0.5">{hire.role}</h4>
                  <p className="text-[17px] text-muted-foreground leading-relaxed">{hire.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-5 mt-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-[17px] text-muted-foreground leading-relaxed text-center italic">
              "The best vertical media companies start with a single obsessed founder. This round enables the transition to a <span className="text-primary font-semibold not-italic">high-leverage operating team</span>."
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TeamSlide;