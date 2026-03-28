import SlideLayout from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const revenueData = [
  { name: "Advertising", value: 35, color: "hsl(145 100% 49%)" },
  { name: "Sponsored Content", value: 25, color: "hsl(263 70% 58%)" },
  { name: "Premium Profiles", value: 15, color: "hsl(145 80% 35%)" },
  { name: "Data & Analytics", value: 10, color: "hsl(263 50% 45%)" },
  { name: "Lead Gen", value: 10, color: "hsl(145 60% 25%)" },
  { name: "Events", value: 5, color: "hsl(240 10% 40%)" },
];

const layers = [
  { title: "Display & Native Advertising", desc: "Banner ads, sponsored placements, platform ads", timeline: "Now" },
  { title: "Sponsored Content & Partnerships", desc: "Branded articles, platform spotlights, interviews", timeline: "Q1 2026" },
  { title: "Premium Seller Profiles", desc: "Enhanced profiles, verified badges, analytics", timeline: "Q2 2026" },
  { title: "Data & Analytics Products", desc: "Rankings API, market reports, industry indexes", timeline: "Q3 2026" },
  { title: "Lead Generation", desc: "Seller acquisition for platforms, brand matchmaking", timeline: "Q4 2026" },
  { title: "Events & Conferences", desc: "Industry summits, awards, virtual events", timeline: "2027" },
];

const BusinessModelSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

    <div className="relative z-10 flex h-full px-20 py-16">
      <div className="w-[680px] flex flex-col">
        <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">08 — BUSINESS MODEL</div>
        <h2 className="text-[44px] font-bold leading-tight mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Six Revenue Layers,{" "}
          <span className="text-primary">Compounding Value</span>
        </h2>

        {/* Monetization layers */}
        <div className="space-y-3 flex-1">
          {layers.map((l, i) => (
            <div
              key={l.title}
              className="glass-card p-4 flex items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.07}s` }}
            >
              <div className="w-20 text-xs font-mono text-primary shrink-0">{l.timeline}</div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground">{l.title}</h4>
                <p className="text-xs text-muted-foreground">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Donut chart */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="glass-card p-8 w-full opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-sm text-muted-foreground mb-4 font-medium text-center">Projected Revenue Mix (Year 3)</div>
          <div className="h-[350px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {revenueData.map(r => (
              <div key={r.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: r.color }} />
                <span className="text-xs text-muted-foreground">{r.name} ({r.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default BusinessModelSlide;
