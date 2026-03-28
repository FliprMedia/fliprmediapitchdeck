import SlideLayout from "../SlideLayout";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const revenueProjection = [
  { year: "Year 1", revenue: 150, arr: "$150K" },
  { year: "Year 2", revenue: 800, arr: "$800K" },
  { year: "Year 3", revenue: 2500, arr: "$2.5M" },
  { year: "Year 4", revenue: 6000, arr: "$6M" },
  { year: "Year 5", revenue: 12000, arr: "$12M" },
];

const exits = [
  { type: "Strategic Acquisition", buyer: "Major media, platform, or commerce company", range: "$30M–$100M+", timeline: "Year 3-5" },
  { type: "PE / Growth Equity", buyer: "Media-focused PE firm roll-up", range: "$50M–$150M+", timeline: "Year 4-6" },
  { type: "IPO Path", buyer: "Public markets via continued scaling", range: "$200M+", timeline: "Year 6+" },
];

const RevenueSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

    <div className="relative z-10 flex h-full px-20 py-16">
      <div className="w-[750px] flex flex-col">
        <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">15 — REVENUE POTENTIAL</div>
        <h2 className="text-[40px] font-bold leading-tight mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Path to <span className="text-primary">$10M+ ARR</span>{" "}
          and Exit-Scale Value
        </h2>

        {/* Revenue chart */}
        <div className="glass-card p-6 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-sm text-muted-foreground mb-4 font-medium">Projected Annual Revenue ($K)</div>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueProjection}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(145 100% 49%)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="hsl(263 70% 58%)" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="hsl(240 5% 35%)" fontSize={12} tickLine={false} />
                <YAxis stroke="hsl(240 5% 35%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={v => `$${v >= 1000 ? `${v/1000}M` : `${v}K`}`} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(145 100% 49%)" strokeWidth={3} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Comparable valuations */}
        <div className="flex gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {[
            { name: "Industry Avg", multiple: "8-12x", metric: "Revenue" },
            { name: "Media + Data", multiple: "15-25x", metric: "Revenue" },
            { name: "Commerce-Tech", multiple: "20-40x", metric: "Revenue" },
          ].map(c => (
            <div key={c.name} className="glass-card p-4 flex-1 text-center">
              <div className="text-xs text-muted-foreground mb-1">{c.name}</div>
              <div className="text-2xl font-black text-primary">{c.multiple}</div>
              <div className="text-xs text-muted-foreground">{c.metric}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Exit scenarios */}
      <div className="flex-1 flex flex-col justify-center pl-8">
        <h3 className="text-xl font-bold text-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>Exit Scenarios</h3>
        <div className="space-y-4">
          {exits.map((e, i) => (
            <div
              key={e.type}
              className="glass-card p-6 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.35 + i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-bold text-foreground">{e.type}</h4>
                <span className="text-xs text-muted-foreground font-mono">{e.timeline}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{e.buyer}</p>
              <div className="text-2xl font-black text-primary">{e.range}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default RevenueSlide;
