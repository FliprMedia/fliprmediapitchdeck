import SlideLayout from "../SlideLayout";
import { AlertTriangle, Search, Users, BarChart3, Megaphone, Shuffle, Eye, Radio, ShieldQuestion, Layers, ArrowRight } from "lucide-react";

const painCards = [
  {
    title: "Sellers & Creators",
    icon: Users,
    color: "primary",
    pains: [
      "No cross-platform profile or reputation layer",
      "No way to be discovered by buyers or brands",
      "Zero press infrastructure — no credibility signals",
      "No benchmarks to measure or prove performance",
    ],
  },
  {
    title: "Advertisers & Brands",
    icon: Megaphone,
    color: "accent",
    pains: [
      "No dedicated media channel to reach live sellers",
      "No audience segmentation or targeting data",
      "No sponsorship, native ad, or placement infrastructure",
      "No ROI benchmarks — impossible to plan spend",
    ],
  },
  {
    title: "Platforms & Investors",
    icon: Eye,
    color: "primary",
    pains: [
      "No aggregated discovery layer for shows or sellers",
      "No independent reporting on the live commerce sector",
      "No market intelligence, rankings, or trend data",
      "No trusted editorial source — category lacks credibility",
    ],
  },
];

const gapItems = [
  { icon: Shuffle, label: "Fragmented" },
  { icon: Search, label: "No Discovery" },
  { icon: BarChart3, label: "No Data" },
  { icon: Megaphone, label: "No Ad Layer" },
  { icon: AlertTriangle, label: "No Coverage" },
  { icon: ShieldQuestion, label: "No Trust Layer" },
  { icon: Radio, label: "No Show Index" },
  { icon: Layers, label: "No Central Hub" },
];

const ProblemSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />

    {/* Fragmentation visual — disconnected circles */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1920 1080">
      {[
        { cx: 200, cy: 200, r: 60 }, { cx: 500, cy: 120, r: 70 }, { cx: 850, cy: 180, r: 55 },
        { cx: 1200, cy: 100, r: 65 }, { cx: 1500, cy: 200, r: 50 }, { cx: 350, cy: 500, r: 45 },
        { cx: 1600, cy: 500, r: 55 },
      ].map((c, i) => (
        <g key={i}>
          <circle cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 6" />
        </g>
      ))}
      <line x1="260" y1="200" x2="430" y2="140" stroke="hsl(var(--destructive))" strokeWidth="0.5" strokeDasharray="8 12" opacity="0.5" />
      <line x1="570" y1="130" x2="795" y2="175" stroke="hsl(var(--destructive))" strokeWidth="0.5" strokeDasharray="8 12" opacity="0.4" />
      <line x1="905" y1="180" x2="1135" y2="115" stroke="hsl(var(--destructive))" strokeWidth="0.5" strokeDasharray="8 12" opacity="0.3" />
    </svg>

    <div className="absolute top-[-100px] right-[-50px] w-[700px] h-[700px] bg-destructive/[0.04] rounded-full blur-[180px]" />
    <div className="absolute bottom-[-100px] left-[200px] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-16">
      {/* Header */}
      <div className="mb-6">
        <div className="slide-label mb-4 opacity-0 animate-fade-up">02 — THE PROBLEM</div>
        <h2 className="slide-headline mb-4 opacity-0 animate-fade-up max-w-[1100px]" style={{ animationDelay: '0.1s' }}>
          A $170B market with zero{" "}
          <span className="font-display italic text-[50px] text-primary">media infrastructure.</span>
        </h2>
        <p className="slide-subhead max-w-[850px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Live commerce generates billions in GMV across 7+ platforms — yet no one covers it, ranks it, or monetizes the attention around it.
        </p>
      </div>

      {/* Gap strip — visual chips */}
      <div className="flex items-center gap-2 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        {gapItems.map((item) => (
          <div key={item.label} className="glass-card px-3.5 py-2 flex items-center gap-2">
            <item.icon className="w-3.5 h-3.5 text-destructive/60" />
            <span className="text-[11px] text-muted-foreground/70 font-medium whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Main: 3 pain cards + comparison */}
      <div className="flex-1 flex gap-5 min-h-0">
        {painCards.map((card, i) => (
          <div
            key={card.title}
            className={`flex-1 glass-card p-6 flex flex-col opacity-0 animate-fade-up group relative overflow-hidden`}
            style={{ animationDelay: `${0.25 + i * 0.08}s` }}
          >
            {/* Top accent */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-${card.color}/40 via-${card.color}/20 to-transparent`} />
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl bg-${card.color}/10 flex items-center justify-center border border-${card.color}/15`}>
                <card.icon className={`w-5 h-5 text-${card.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
            </div>
            <div className="space-y-3 flex-1">
              {card.pains.map((pain, j) => (
                <div key={j} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 shrink-0" />
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Split comparison */}
        <div className="w-[340px] shrink-0 flex flex-col gap-3">
          <div className="flex-1 glass-card p-5 relative overflow-hidden opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-destructive/50 to-destructive/10" />
            <div className="text-[10px] font-mono-brand text-destructive/70 tracking-[0.2em] mb-2">TODAY</div>
            <h4 className="text-base font-bold text-foreground mb-3">Fragmented & Invisible</h4>
            <div className="space-y-2">
              {["Industry conversation stuck in Reddit & Discord", "No centralized discovery or data", "No ad infrastructure for advertisers", "No editorial authority or trust layer"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] text-muted-foreground">
                  <span className="text-destructive/70 text-[10px]">✕</span> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <ArrowRight className="w-4 h-4 text-primary/40 rotate-90" />
          </div>
          <div className="flex-1 glass-card p-5 relative overflow-hidden opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
            <div className="text-[10px] font-mono-brand text-primary tracking-[0.2em] mb-2">WITH FLIPR.MEDIA</div>
            <h4 className="text-base font-bold text-foreground mb-3">Centralized & Powerful</h4>
            <div className="space-y-2">
              {["One media hub for the industry", "Discovery, rankings & intel", "Built-in ad & sponsorship layer", "Trusted editorial brand"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] text-muted-foreground">
                  <span className="text-primary text-[10px]">✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProblemSlide;
