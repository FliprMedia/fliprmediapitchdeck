import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { Newspaper, DollarSign, BarChart3, Rocket, ArrowRight } from "lucide-react";

const phases = [
  {
    num: "01",
    icon: Newspaper,
    timeline: "Now",
    badge: "MONTHS 0–3",
    badgeColor: "primary",
    title: "Strengthen the publication",
    items: [
      "Sharpen editorial cadence",
      "Grow newsletter audience",
      "Polish site UX & SEO",
    ],
  },
  {
    num: "02",
    icon: DollarSign,
    timeline: "Next",
    badge: "MONTHS 3–6",
    badgeColor: "primary",
    title: "Launch monetization",
    items: [
      "Advertising & sponsorships live",
      "Premium seller profiles",
      "Featured live show packages",
    ],
  },
  {
    num: "03",
    icon: BarChart3,
    timeline: "Later",
    badge: "MONTHS 6–12",
    badgeColor: "accent",
    title: "Build rankings & data",
    items: [
      "Seller rankings / activity index",
      "Category reports & benchmarks",
      "Brand & advertiser dashboards",
    ],
  },
  {
    num: "04",
    icon: Rocket,
    timeline: "Scale",
    badge: "12+ MONTHS",
    badgeColor: "accent",
    title: "Expand industry products",
    items: [
      "Subscription intelligence layer",
      "Sponsorship & lead-gen marketplace",
      "Events, awards, and annual report",
    ],
  },
];

const RoadmapSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="bottom-left" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">10 — ROADMAP</div>
      <h2 className="slide-headline mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        From publication to{" "}
        <span className="font-display italic text-[58px] text-primary">industry platform.</span>
      </h2>
      <p className="text-[19px] text-foreground/85 leading-[1.55] max-w-[1300px] mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        We are already live with the core publication. Each phase below builds on the last — strengthening the media brand, then layering in monetization, data, and category-wide products.
      </p>

      {/* Timeline bar */}
      <div className="relative mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="h-1 bg-border/40 rounded-full relative">
          <div className="absolute left-0 top-0 h-full w-[18%] bg-gradient-to-r from-primary to-primary/40 rounded-full" />
          {phases.map((p, i) => (
            <div key={p.num} className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${i * 28 + 6}%` }}>
              <div className={`w-5 h-5 rounded-full border-2 ${i === 0 ? 'bg-primary border-primary' : `border-muted-foreground/30 bg-background`} z-10`} />
              <span className={`text-[16px] font-bold mt-2 ${i === 0 ? 'text-primary' : 'text-muted-foreground'}`}>{p.timeline}</span>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <ArrowRight className="w-5 h-5 text-muted-foreground/80" />
        </div>
      </div>

      {/* Phase cards */}
      <div className="grid grid-cols-4 gap-4 flex-1">
        {phases.map((phase, i) => (
          <div
            key={phase.num}
            className={`glass-card p-5 flex flex-col opacity-0 animate-fade-up border-t-2 border-t-${phase.badgeColor}/40`}
            style={{ animationDelay: `${0.3 + i * 0.08}s` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-10 h-10 rounded-lg bg-${phase.badgeColor}/10 flex items-center justify-center shrink-0`}>
                <phase.icon className={`w-5 h-5 text-${phase.badgeColor}`} />
              </div>
              <span className={`text-[14px] px-2.5 py-0.5 rounded-full bg-${phase.badgeColor}/10 text-${phase.badgeColor} font-bold`}>
                {phase.badge}
              </span>
            </div>

            <h3 className="text-[20px] font-bold text-foreground mb-3 leading-tight">{phase.title}</h3>

            <div className="flex flex-col gap-3 flex-1">
              {phase.items.map(item => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className={`w-2 h-2 rounded-full bg-${phase.badgeColor}/40 shrink-0 mt-2`} />
                  <span className="text-[17px] text-muted-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default RoadmapSlide;
