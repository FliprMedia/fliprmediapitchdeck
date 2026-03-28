import SlideLayout from "../SlideLayout";

const phases = [
  {
    phase: "Phase 1",
    timeline: "Now",
    title: "Media Foundation",
    items: ["News & editorial", "Seller profiles", "Platform coverage", "Newsletter launch", "Basic discovery"],
    color: "border-primary",
    bgColor: "bg-primary/10",
  },
  {
    phase: "Phase 2",
    timeline: "6 Months",
    title: "Data & Monetization",
    items: ["Rankings & indexes", "Ad placements", "Sponsored content", "Enhanced profiles", "Show discovery v2"],
    color: "border-accent",
    bgColor: "bg-accent/10",
  },
  {
    phase: "Phase 3",
    timeline: "12 Months",
    title: "Platform Intelligence",
    items: ["Analytics dashboard", "Lead gen products", "API access", "Data reports", "Brand marketplace"],
    color: "border-primary",
    bgColor: "bg-primary/10",
  },
  {
    phase: "Phase 4",
    timeline: "18+ Months",
    title: "Industry OS",
    items: ["Seller tools suite", "Conference & events", "Acquisition funnel", "White-label data", "Global expansion"],
    color: "border-accent",
    bgColor: "bg-accent/10",
  },
];

const RoadmapSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/3" />

    <div className="relative z-10 flex flex-col h-full px-20 py-16">
      <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">11 — PRODUCT ROADMAP</div>
      <h2 className="text-[44px] font-bold leading-tight mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        From Media Platform to{" "}
        <span className="text-primary">Industry Operating System</span>
      </h2>
      <p className="text-xl text-muted-foreground mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Each phase compounds audience, data, and revenue into deeper moats.
      </p>

      {/* Timeline */}
      <div className="flex-1 flex items-center">
        <div className="w-full">
          {/* Progress bar */}
          <div className="relative h-1 bg-border rounded-full mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute left-0 top-0 h-full w-[25%] bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            {phases.map((_, i) => (
              <div
                key={i}
                className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 ${
                  i === 0 ? 'bg-primary border-primary' : 'bg-background border-border'
                }`}
                style={{ left: `${i * 33}%` }}
              />
            ))}
          </div>

          {/* Phase cards */}
          <div className="grid grid-cols-4 gap-5">
            {phases.map((p, i) => (
              <div
                key={p.phase}
                className={`glass-card p-6 border-t-2 ${p.color} opacity-0 animate-fade-up`}
                style={{ animationDelay: `${0.25 + i * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${p.bgColor} ${i < 2 ? 'text-primary' : 'text-accent'}`}>{p.timeline}</span>
                  <span className="text-xs text-muted-foreground">{p.phase}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{p.title}</h3>
                <ul className="space-y-2">
                  {p.items.map(item => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-[8px]">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default RoadmapSlide;
