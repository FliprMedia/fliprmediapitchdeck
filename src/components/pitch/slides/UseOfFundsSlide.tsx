import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const funds = [
  { category: "Platform Development", amount: 175000, pct: 35, color: "hsl(145 100% 49%)" },
  { category: "Content Operations", amount: 100000, pct: 20, color: "hsl(263 70% 58%)" },
  { category: "Marketing & Growth", amount: 100000, pct: 20, color: "hsl(145 80% 35%)" },
  { category: "Sales & BD", amount: 75000, pct: 15, color: "hsl(263 50% 45%)" },
  { category: "Operations", amount: 50000, pct: 10, color: "hsl(240 10% 40%)" },
];

const chartData = funds.map(f => ({ name: f.category.split(' ')[0], value: f.pct }));

const UseOfFundsSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

    <div className="relative z-10 flex h-full px-20 py-16">
      <div className="w-[700px] flex flex-col">
        <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">14 — USE OF FUNDS</div>
        <h2 className="text-[44px] font-bold leading-tight mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-primary">$500,000</span> to Full Operations
        </h2>
        <p className="text-xl text-muted-foreground mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Capital to finish the platform, build audience, and activate revenue.
        </p>

        {/* Fund breakdown */}
        <div className="space-y-4 flex-1">
          {funds.map((f, i) => (
            <div
              key={f.category}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-semibold text-foreground">{f.category}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">${(f.amount / 1000).toFixed(0)}K</span>
                  <span className="text-sm font-bold text-primary">{f.pct}%</span>
                </div>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${f.pct}%`, backgroundColor: f.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col justify-center pl-10">
        <div className="glass-card p-8 opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-sm text-muted-foreground mb-6 font-medium">Allocation Breakdown</div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical">
                <XAxis type="number" stroke="hsl(240 5% 35%)" fontSize={12} tickFormatter={v => `${v}%`} />
                <YAxis type="category" dataKey="name" stroke="hsl(240 5% 35%)" fontSize={12} width={80} />
                <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                  {funds.map((f, i) => (
                    <Cell key={i} fill={f.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 mt-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <h4 className="text-base font-semibold text-foreground mb-2">What This Capital Unlocks</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Fully operational platform with all core features</li>
            <li>• First revenue from advertising & sponsored content</li>
            <li>• 10K+ newsletter subscribers</li>
            <li>• 12-18 months of runway</li>
          </ul>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default UseOfFundsSlide;
