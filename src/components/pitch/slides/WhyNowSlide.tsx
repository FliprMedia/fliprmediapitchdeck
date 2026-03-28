import SlideLayout from "../SlideLayout";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";

const marketData = [
  { year: "2020", value: 6 },
  { year: "2021", value: 11 },
  { year: "2022", value: 17 },
  { year: "2023", value: 25 },
  { year: "2024", value: 35 },
  { year: "2025", value: 50 },
  { year: "2026", value: 68 },
  { year: "2027", value: 90 },
];

const milestones = [
  { year: "2021", event: "Whatnot raises Series A", color: "text-primary" },
  { year: "2022", event: "TikTok Shop launches in US", color: "text-accent" },
  { year: "2023", event: "eBay Live launches", color: "text-primary" },
  { year: "2024", event: "YouTube Shopping expands", color: "text-accent" },
  { year: "2025", event: "Category hits mainstream", color: "text-primary" },
];

const WhyNowSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

    <div className="relative z-10 flex h-full">
      <div className="w-[750px] flex flex-col justify-center pl-20 pr-10">
        <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">03 — WHY NOW</div>
        <h2 className="text-[48px] font-bold leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Live Commerce Is at an{" "}
          <span className="text-primary">Inflection Point</span>
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          What started as QVC-on-phones is now a $50B+ global category with platforms racing to build infrastructure. 
          The industry needs its own media layer — and it needs it now.
        </p>

        {/* Stats row */}
        <div className="flex gap-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {[
            { num: "30%+", label: "YoY Growth" },
            { num: "2M+", label: "Active Sellers" },
            { num: "7+", label: "Major Platforms" },
          ].map(s => (
            <div key={s.label} className="glass-card px-6 py-4">
              <div className="text-3xl font-black text-primary">{s.num}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Chart + Timeline */}
      <div className="flex-1 flex flex-col justify-center pr-16">
        <div className="glass-card p-6 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-sm text-muted-foreground mb-4 font-medium">US Live Commerce Market Size ($B)</div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={marketData}>
                <defs>
                  <linearGradient id="neonGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(145 100% 49%)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="hsl(145 100% 49%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="hsl(240 5% 35%)" fontSize={12} tickLine={false} />
                <YAxis stroke="hsl(240 5% 35%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={v => `$${v}B`} />
                <Area type="monotone" dataKey="value" stroke="hsl(145 100% 49%)" strokeWidth={3} fill="url(#neonGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Timeline */}
        <div className="glass-card p-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <div className="flex items-center justify-between relative">
            <div className="absolute top-3 left-0 right-0 h-[2px] bg-border" />
            {milestones.map(m => (
              <div key={m.year} className="relative flex flex-col items-center text-center">
                <div className={`w-3 h-3 rounded-full bg-primary mb-2 z-10`} />
                <div className="text-xs font-bold text-foreground">{m.year}</div>
                <div className="text-[11px] text-muted-foreground mt-1 max-w-[120px]">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default WhyNowSlide;
