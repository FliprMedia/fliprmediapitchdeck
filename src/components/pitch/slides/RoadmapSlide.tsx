import SlideLayout from "../SlideLayout";
import { Settings, Users, BarChart3, Rocket, ArrowRight } from "lucide-react";

const phases = [
  {
    num: "01",
    icon: Settings,
    timeline: "Now",
    badge: "IN PROGRESS",
    badgeColor: "primary",
    title: "Foundation & Polish",
    items: [
      "Polish site UX & design system",
      "Make all pages fully operational",
      "Tighten navigation & data structure",
      "Forms, SEO, newsletter, advertiser inquiries",
      "Improve mobile & page performance",
    ],
  },
  {
    num: "02",
    icon: Users,
    timeline: "Next",
    badge: "MONTHS 2–5",
    badgeColor: "primary",
    title: "Profiles & Monetization",
    items: [
      "Seller profile system",
      "Searchable seller directory",
      "Featured live show engine",
      "Editorial workflow improvements",
      "Monetization infrastructure",
    ],
  },
  {
    num: "03",
    icon: BarChart3,
    timeline: "Later",
    badge: "MONTHS 6–12",
    badgeColor: "accent",
    title: "Data & Intelligence",
    items: [
      "Rankings / Flipr Activity Index",
      "Category reports & insights",
      "Brand & advertiser dashboards",
      "Premium packages",
      "Research products",
    ],
  },
  {
    num: "04",
    icon: Rocket,
    timeline: "Scale",
    badge: "12–18+ MONTHS",
    badgeColor: "accent",
    title: "Category Operating Layer",
    items: [
      "Industry intelligence layer",
      "Lead-gen & sponsorship marketplace",
      "Data products & API",
      "Event & franchise opportunities",
      "Conference / awards / annual report",
    ],
  },
];

const RoadmapSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute bottom-0 left-[300px] w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[180px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">11 — PRODUCT ROADMAP</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        From media property to <span className="font-display italic text-[50px] text-primary">category operating layer.</span>
      </h2>
      <p className="slide-subhead mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Each phase compounds audience, data, and revenue into deeper moats.
      </p>

      {/* Timeline bar */}
      <div className="relative mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="h-1 bg-border/40 rounded-full relative">
          <div className="absolute left-0 top-0 h-full w-[18%] bg-gradient-to-r from-primary to-primary/40 rounded-full" />
          {phases.map((p, i) => (
            <div key={p.num} className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${i * 28 + 6}%` }}>
              <div className={`w-5 h-5 rounded-full border-2 ${i === 0 ? 'bg-primary border-primary' : `border-muted-foreground/30 bg-background`} z-10`} />
              <span className={`text-[10px] font-bold mt-2 ${i === 0 ? 'text-primary' : 'text-muted-foreground'}`}>{p.timeline}</span>
            </div>
          ))}
        </div>
        {/* Arrow at end */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
        </div>
      </div>

      {/* Phase cards */}
      <div className="grid grid-cols-4 gap-4 flex-1">
        {phases.map((phase, i) => (
          <div
            key={phase.num}
            className={`glass-card p-5 flex flex-col opacity-0 animate-fade-up border-t-2 border-t-${phase.badgeColor}/40 hover:border-${phase.badgeColor}/30 transition-colors`}
            style={{ animationDelay: `${0.3 + i * 0.08}s` }}
          >
            {/* Top row */}
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 rounded-lg bg-${phase.badgeColor}/10 flex items-center justify-center shrink-0`}>
                <phase.icon className={`w-4 h-4 text-${phase.badgeColor}`} />
              </div>
              <div>
                <span className={`text-[9px] px-2 py-0.5 rounded-full bg-${phase.badgeColor}/10 text-${phase.badgeColor} font-bold`}>
                  {phase.badge}
                </span>
              </div>
            </div>

            <h3 className="text-[15px] font-bold text-foreground mb-3">{phase.title}</h3>

            <div className="flex flex-col gap-2 flex-1">
              {phase.items.map(item => (
                <div key={item} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${phase.badgeColor}/40 shrink-0 mt-1.5`} />
                  <span className="text-[11px] text-muted-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom evolution strip */}
      <div className="mt-5 flex items-center justify-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        {["Media Property", "Discovery Platform", "Data & Intelligence", "Industry OS"].map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className={`glass-card px-4 py-1.5 text-[10px] font-semibold ${i === 3 ? 'text-primary border-primary/30' : 'text-foreground/70'}`}>
              {label}
            </div>
            {i < 3 && <ArrowRight className="w-3.5 h-3.5 text-primary/30" />}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default RoadmapSlide;
