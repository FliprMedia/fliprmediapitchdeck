import SlideLayout from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Monitor, Star, BarChart3, Rocket, RefreshCw, Zap, ArrowRight } from "lucide-react";

const layers = [
  {
    num: "01",
    title: "Media & Advertising Revenue",
    type: "Recurring",
    color: "primary",
    icon: Monitor,
    items: [
      "Display advertising",
      "Sponsored newsletter placements",
      "Sponsored articles & branded content",
      "Featured homepage & category placements",
    ],
  },
  {
    num: "02",
    title: "Seller Products & Services",
    type: "Recurring + Transactional",
    color: "primary",
    icon: Star,
    items: [
      "Premium seller profiles",
      "Verified seller badges",
      "Featured live show listings",
      "Promotional launch packages",
    ],
  },
  {
    num: "03",
    title: "Enterprise & Partnerships",
    type: "High-Value Contracts",
    color: "accent",
    icon: BarChart3,
    items: [
      "Reports / rankings / category insights",
      "Sponsorship packages for brands & platforms",
      "Lead generation for advertisers & agencies",
      "Event partnerships",
    ],
  },
  {
    num: "04",
    title: "Intelligence & Data Products",
    type: "High-Margin SaaS",
    color: "accent",
    icon: Rocket,
    items: [
      "Subscription intelligence products",
      "Seller analytics dashboards",
      "Category benchmarks & trend data",
      "Job board / marketplace / deal database",
    ],
  },
];

const revenueData = [
  { name: "Advertising", value: 30, color: "hsl(145 100% 49%)" },
  { name: "Sponsored Content", value: 20, color: "hsl(145 80% 35%)" },
  { name: "Seller Products", value: 18, color: "hsl(263 70% 58%)" },
  { name: "Data & Intel", value: 15, color: "hsl(263 50% 45%)" },
  { name: "Lead Gen", value: 10, color: "hsl(145 60% 28%)" },
  { name: "Events & Partners", value: 7, color: "hsl(240 10% 40%)" },
];

const BusinessModelSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[180px]" />

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      {/* Header */}
      <div className="text-primary font-mono text-sm tracking-widest mb-3 opacity-0 animate-fade-up">08 — BUSINESS MODEL</div>
      <h2 className="text-[42px] font-bold leading-tight mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Multi-layered revenue from <span className="text-primary">media to intelligence.</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Stacked monetization model that evolves from ad-supported media into high-margin data and intelligence products.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Staircase layers */}
        <div className="flex-1 flex flex-col gap-3">
          {layers.map((layer, i) => (
            <div
              key={layer.num}
              className={`glass-card p-4 opacity-0 animate-fade-up border-${layer.color}/15 hover:border-${layer.color}/30 transition-colors`}
              style={{
                animationDelay: `${0.2 + i * 0.08}s`,
                marginLeft: `${i * 30}px`,
              }}
            >
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-lg bg-${layer.color}/10 flex items-center justify-center shrink-0`}>
                  <layer.icon className={`w-4.5 h-4.5 text-${layer.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono text-${layer.color}/60`}>{layer.num}</span>
                    <h3 className="text-[14px] font-bold text-foreground">{layer.title}</h3>
                    <div className="ml-auto flex items-center gap-1.5">
                      {layer.type.includes("Recurring") && <RefreshCw className="w-3 h-3 text-primary/50" />}
                      <span className={`text-[8px] px-2 py-0.5 rounded-full bg-${layer.color}/10 text-${layer.color} font-semibold`}>
                        {layer.type}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                    {layer.items.map(item => (
                      <div key={item} className="flex items-center gap-1.5">
                        <div className={`w-1 h-1 rounded-full bg-${layer.color}/40 shrink-0`} />
                        <span className="text-[10px] text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Margin arrow */}
          <div className="flex items-center gap-3 mt-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s', marginLeft: '30px' }}>
            <ArrowRight className="w-4 h-4 text-primary/40" />
            <span className="text-[10px] text-muted-foreground">Increasing margin & defensibility</span>
            <ArrowRight className="w-4 h-4 text-primary/40" />
            <div className="glass-card px-3 py-1 border-accent/30">
              <span className="text-[10px] font-bold text-accent flex items-center gap-1">
                <Zap className="w-3 h-3" /> High-Margin Future Upside
              </span>
            </div>
          </div>
        </div>

        {/* Right: Donut chart + revenue type breakdown */}
        <div className="w-[440px] flex flex-col gap-4">
          {/* Donut */}
          <div className="glass-card p-5 flex-1 opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-xs text-muted-foreground font-medium mb-2 text-center">Projected Revenue Mix — Year 3</div>
            <div className="h-[240px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={revenueData} cx="50%" cy="50%" innerRadius={65} outerRadius={105} paddingAngle={3} dataKey="value">
                    {revenueData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-black text-foreground">6</div>
                  <div className="text-[9px] text-muted-foreground">Revenue<br/>Streams</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              {revenueData.map(r => (
                <div key={r.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: r.color }} />
                  <span className="text-[10px] text-muted-foreground">{r.name} ({r.value}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue type cards */}
          <div className="grid grid-cols-2 gap-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-3 text-center border-primary/15">
              <RefreshCw className="w-4 h-4 text-primary mx-auto mb-1" />
              <div className="text-[11px] font-semibold text-foreground">Recurring</div>
              <div className="text-[9px] text-muted-foreground">Ads, subscriptions,<br/>profiles, newsletters</div>
            </div>
            <div className="glass-card p-3 text-center border-accent/15">
              <Zap className="w-4 h-4 text-accent mx-auto mb-1" />
              <div className="text-[11px] font-semibold text-foreground">High-Margin</div>
              <div className="text-[9px] text-muted-foreground">Data products, intel,<br/>lead gen, events</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default BusinessModelSlide;
