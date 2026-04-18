import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
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
];

const ProblemSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="strong" glowPosition="top-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-16">
      <div className="mb-6">
        <div className="slide-label mb-4 opacity-0 animate-fade-up">02 — THE PROBLEM</div>
        <h2 className="slide-headline mb-4 opacity-0 animate-fade-up max-w-[1200px]" style={{ animationDelay: '0.1s' }}>
          Millions of sellers.{" "}
          <span className="font-display italic text-[58px] text-primary">Zero trade press.</span>
        </h2>
        <p className="text-[18px] text-foreground/85 leading-[1.55] max-w-[1150px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Imagine the film industry with no Variety. The music industry with no Billboard. Advertising with no Ad Age. That is exactly the situation in live selling today. It is a multi-hundred-billion dollar global industry and there is not a single dedicated trade publication covering it. <span className="text-primary font-semibold">No trusted news source. No place for sellers to be discovered. No channel for brands to reach this audience.</span>
        </p>
      </div>

      {/* Gap strip */}
      <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        {gapItems.map((item) => (
          <div key={item.label} className="glass-card px-5 py-3 flex items-center gap-3">
            <item.icon className="w-5 h-5 text-destructive/80" />
            <span className="text-[17px] text-foreground font-semibold whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Pain cards + comparison */}
      <div className="flex-1 flex gap-5 min-h-0">
        {painCards.map((card, i) => (
          <div
            key={card.title}
            className="flex-1 glass-card p-7 flex flex-col opacity-0 animate-fade-up relative overflow-hidden"
            style={{ animationDelay: `${0.25 + i * 0.08}s` }}
          >
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-${card.color}/40 via-${card.color}/20 to-transparent`} />
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-${card.color}/10 flex items-center justify-center border border-${card.color}/15`}>
                <card.icon className={`w-6 h-6 text-${card.color}`} />
              </div>
              <h3 className="text-[22px] font-bold text-foreground">{card.title}</h3>
            </div>
            <div className="space-y-3.5 flex-1">
              {card.pains.map((pain, j) => (
                <div key={j} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive/50 mt-2.5 shrink-0" />
                  <p className="text-[17px] text-muted-foreground leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Split comparison */}
        <div className="w-[360px] shrink-0 flex flex-col gap-3">
          <div className="flex-1 glass-card p-6 relative overflow-hidden opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-destructive/50 to-destructive/10" />
            <div className="text-[16px] font-mono-brand text-destructive/80 tracking-[0.2em] mb-2">TODAY</div>
            <h4 className="text-[20px] font-bold text-foreground mb-3">Fragmented & Invisible</h4>
            <div className="space-y-3">
              {["Industry stuck in Reddit & Discord", "No centralized discovery or data", "No ad infrastructure for advertisers", "No editorial authority or trust layer"].map((t, i) => (
                <div key={i} className="flex items-center gap-3 text-[17px] text-muted-foreground">
                  <span className="text-destructive/70 text-[16px]">✕</span> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <ArrowRight className="w-5 h-5 text-primary/40 rotate-90" />
          </div>
          <div className="flex-1 glass-card p-6 relative overflow-hidden opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
            <div className="text-[16px] font-mono-brand text-primary tracking-[0.2em] mb-2">WITH FLIPR.MEDIA</div>
            <h4 className="text-[20px] font-bold text-foreground mb-3">Centralized & Powerful</h4>
            <div className="space-y-3">
              {["One media hub for the industry", "Discovery, rankings & intel", "Built-in ad & sponsorship layer", "Trusted editorial brand"].map((t, i) => (
                <div key={i} className="flex items-center gap-3 text-[17px] text-muted-foreground">
                  <span className="text-primary text-[16px]">✓</span> {t}
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