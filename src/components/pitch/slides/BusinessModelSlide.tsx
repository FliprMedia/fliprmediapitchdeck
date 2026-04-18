import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Monitor, Star, BarChart3, Rocket, RefreshCw, Zap, ArrowRight } from "lucide-react";

const layers = [
  {
    num: "01",
    title: "Media & Advertising Revenue",
    type: "Recurring",
    color: "primary",
    icon: Monitor,
    items: ["Display advertising", "Sponsored newsletter placements", "Sponsored articles & branded content", "Featured homepage placements"],
  },
  {
    num: "02",
    title: "Seller Products & Services",
    type: "Recurring + Transactional",
    color: "primary",
    icon: Star,
    items: ["Premium seller profiles", "Verified seller badges", "Featured live show listings", "Promotional launch packages"],
  },
  {
    num: "03",
    title: "Enterprise & Partnerships",
    type: "High-Value Contracts",
    color: "accent",
    icon: BarChart3,
    items: ["Reports / rankings / category insights", "Sponsorship packages for brands", "Lead generation for agencies", "Event partnerships"],
  },
  {
    num: "04",
    title: "Intelligence & Data Products",
    type: "High-Margin SaaS",
    color: "accent",
    icon: Rocket,
    items: ["Subscription intelligence products", "Seller analytics dashboards", "Category benchmarks & trend data", "Job board / marketplace"],
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
    <SlideBackground intensity="subtle" glowPosition="bottom-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">08 — BUSINESS MODEL</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        How Flipr Media <span className="font-display italic text-[58px] text-primary">makes money.</span>
      </h2>
      <p className="text-[18px] text-foreground/85 leading-[1.55] max-w-[1200px] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        This is not a new or complicated business model. Trade publications have made money the same way for over a hundred years. We are applying that proven model to a market that does not have one yet. <span className="text-primary font-semibold">As our audience grows, each of these four revenue layers grows with it.</span>
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Staircase */}
        <div className="flex-1 flex flex-col gap-3">
          {layers.map((layer, i) => (
            <div
              key={layer.num}
              className={`glass-card p-5 opacity-0 animate-fade-up border-${layer.color}/15 hover:border-${layer.color}/30 transition-colors`}
              style={{ animationDelay: `${0.2 + i * 0.08}s`, marginLeft: `${i * 30}px` }}
            >
              <div className="flex items-start gap-3.5">
                <div className={`w-11 h-11 rounded-lg bg-${layer.color}/10 flex items-center justify-center shrink-0`}>
                  <layer.icon className={`w-5 h-5 text-${layer.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-[15px] font-mono text-${layer.color}/70`}>{layer.num}</span>
                    <h3 className="text-[18px] font-bold text-foreground">{layer.title}</h3>
                    <span className={`ml-auto text-[15px] px-3 py-1 rounded-full bg-${layer.color}/10 text-${layer.color} font-semibold`}>
                      {layer.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {layer.items.map(item => (
                      <div key={item} className="flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${layer.color}/40 shrink-0`} />
                        <span className="text-[16px] text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3 mt-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s', marginLeft: '30px' }}>
            <ArrowRight className="w-4 h-4 text-primary/40" />
            <span className="text-[17px] text-muted-foreground font-medium">Increasing margin & defensibility</span>
            <ArrowRight className="w-4 h-4 text-primary/40" />
            <div className="glass-card px-3 py-1.5 border-accent/30">
              <span className="text-[17px] font-bold text-accent flex items-center gap-1">
                <Zap className="w-4 h-4" /> High-Margin Future Upside
              </span>
            </div>
          </div>
        </div>

        {/* Right: Donut */}
        <div className="w-[440px] flex flex-col gap-4">
          <div className="glass-card p-5 flex-1 opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-[16px] text-muted-foreground font-semibold mb-2 text-center">Projected Revenue Mix — Year 3</div>
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
                  <div className="text-[28px] font-black text-foreground">6</div>
                  <div className="text-[16px] text-muted-foreground">Revenue<br/>Streams</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mt-2">
              {revenueData.map(r => (
                <div key={r.name} className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-sm shrink-0" style={{ backgroundColor: r.color }} />
                  <span className="text-[15px] text-muted-foreground font-medium">{r.name} ({r.value}%)</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-4 text-center border-primary/15">
              <RefreshCw className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <div className="text-[17px] font-semibold text-foreground">Recurring</div>
              <div className="text-[15px] text-muted-foreground">Ads, subscriptions,<br/>profiles, newsletters</div>
            </div>
            <div className="glass-card p-4 text-center border-accent/15">
              <Zap className="w-5 h-5 text-accent mx-auto mb-1.5" />
              <div className="text-[17px] font-semibold text-foreground">High-Margin</div>
              <div className="text-[15px] text-muted-foreground">Data products, intel,<br/>lead gen, events</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default BusinessModelSlide;