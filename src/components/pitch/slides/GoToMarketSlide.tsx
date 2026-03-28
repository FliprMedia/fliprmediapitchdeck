import SlideLayout from "../SlideLayout";
import { FileText, Users, Database, DollarSign, Shield, Rss, Search, Share2, Handshake, UserPlus, Mic, RefreshCw, Rocket, BarChart3, Calendar, Star, ArrowRight } from "lucide-react";

const phases = [
  {
    num: "01",
    title: "Launch & Authority",
    timeline: "Now – Month 3",
    color: "primary",
    items: [
      "Category-defining news content",
      "Weekly top seller interviews",
      "Newsletter launch & growth",
      "Platform watch coverage",
      "Social clips & repostable content",
    ],
  },
  {
    num: "02",
    title: "Network & Monetize",
    timeline: "Month 4 – 8",
    color: "primary",
    items: [
      "Seller profile acquisition",
      "Top seller & creator partnerships",
      "Advertiser outreach campaigns",
      "Platform ecosystem mapping",
      "Founding advertiser packages",
    ],
  },
  {
    num: "03",
    title: "Scale & Expand",
    timeline: "Month 9 – 18",
    color: "accent",
    items: [
      "Rankings, reports & benchmarks",
      "Events, webinars, sponsorships",
      "Premium products launch",
      "Deeper data & intelligence layers",
    ],
  },
];

const channels = [
  { icon: Search, label: "SEO" },
  { icon: Rss, label: "Newsletter" },
  { icon: Share2, label: "Social" },
  { icon: UserPlus, label: "Founder Outreach" },
  { icon: Handshake, label: "Partnerships" },
  { icon: Mic, label: "Interviews" },
  { icon: Users, label: "Community" },
];

const flywheelSteps = [
  { icon: FileText, label: "Content", color: "primary" },
  { icon: Shield, label: "Authority", color: "primary" },
  { icon: Users, label: "Audience", color: "primary" },
  { icon: DollarSign, label: "Advertisers", color: "accent" },
  { icon: Database, label: "Data", color: "accent" },
];

const GoToMarketSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
    <div className="absolute top-[100px] left-[300px] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[200px]" />

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      {/* Header */}
      <div className="text-primary font-mono text-sm tracking-widest mb-3 opacity-0 animate-fade-up">09 — GO-TO-MARKET</div>
      <h2 className="text-[40px] font-bold leading-tight mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Build credibility fast, own the niche, <span className="text-primary">scale with community.</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        A phased strategy that compounds content into authority, audience, and revenue.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Flywheel + Channels */}
        <div className="w-[520px] flex flex-col gap-5">
          {/* Flywheel */}
          <div className="glass-card p-5 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Growth Flywheel</div>
            <div className="flex items-center justify-center gap-1">
              {flywheelSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-1">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-14 h-14 rounded-full bg-${step.color}/10 border border-${step.color}/30 flex items-center justify-center`}>
                      <step.icon className={`w-5 h-5 text-${step.color}`} />
                    </div>
                    <span className={`text-[10px] font-semibold text-${step.color}`}>{step.label}</span>
                  </div>
                  {i < flywheelSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground/30 mx-0.5 mb-5" />
                  )}
                </div>
              ))}
              {/* Loop back arrow */}
              <div className="flex items-center gap-1">
                <ArrowRight className="w-4 h-4 text-primary/30 mx-0.5 mb-5" />
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-14 h-14 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold text-primary">Repeat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Channels */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Acquisition Channels</div>
            <div className="flex flex-wrap gap-2">
              {channels.map((ch, i) => (
                <div
                  key={ch.label}
                  className="glass-card px-3 py-2 flex items-center gap-2 hover:border-primary/30 transition-colors opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.4 + i * 0.04}s` }}
                >
                  <ch.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[11px] font-semibold text-foreground">{ch.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Community flywheel note */}
          <div className="glass-card p-4 border-primary/20 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center gap-2 mb-1">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-foreground">Community Flywheel Effect</span>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Sellers share their Flipr profiles and coverage → new sellers want to be featured → content supply grows → audience grows → advertisers follow.
            </p>
          </div>
        </div>

        {/* Right: Phased GTM */}
        <div className="flex-1 flex flex-col gap-3">
          {phases.map((phase, i) => (
            <div
              key={phase.num}
              className={`glass-card p-5 flex-1 flex flex-col opacity-0 animate-fade-up border-${phase.color}/15 hover:border-${phase.color}/30 transition-colors`}
              style={{ animationDelay: `${0.25 + i * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-mono text-${phase.color}/60`}>{phase.num}</span>
                <h3 className="text-[15px] font-bold text-foreground">{phase.title}</h3>
                <span className={`ml-auto text-[9px] px-2 py-0.5 rounded-full bg-${phase.color}/10 text-${phase.color} font-semibold`}>
                  {phase.timeline}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {phase.items.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${phase.color}/40 shrink-0`} />
                    <span className="text-[11px] text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default GoToMarketSlide;
