import SlideLayout from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Code, Megaphone, Handshake, FileText, Briefcase } from "lucide-react";

const funds = [
  {
    icon: Code,
    category: "Product & Engineering",
    pct: 30,
    amount: 150000,
    color: "hsl(145 100% 49%)",
    items: ["Site completion & UX polish", "Backend functionality & integrations", "Monetization flows", "Performance & database improvements"],
  },
  {
    icon: Megaphone,
    category: "Marketing & Audience Growth",
    pct: 25,
    amount: 125000,
    color: "hsl(263 70% 58%)",
    items: ["Newsletter growth & distribution", "Paid acquisition experiments", "Social/video clips & SEO", "Creator collaborations"],
  },
  {
    icon: Handshake,
    category: "Sales / Partnerships / BD",
    pct: 20,
    amount: 100000,
    color: "hsl(145 80% 35%)",
    items: ["Advertiser outreach & brand partnerships", "Platform relationships", "Sponsorship packaging", "Outbound systems"],
  },
  {
    icon: FileText,
    category: "Content & Operations",
    pct: 15,
    amount: 75000,
    color: "hsl(263 50% 45%)",
    items: ["Editorial production & contributors", "Scheduling & workflows", "Content repurposing", "Operations support"],
  },
  {
    icon: Briefcase,
    category: "Working Capital / Admin",
    pct: 10,
    amount: 50000,
    color: "hsl(240 10% 45%)",
    items: ["Legal, admin & tools", "Flexibility and runway buffer"],
  },
];

const chartData = funds.map(f => ({ name: f.category, value: f.pct, color: f.color }));

const UseOfFundsSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute bottom-0 left-[200px] w-[600px] h-[500px] bg-primary/[0.03] rounded-full blur-[180px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">14 — USE OF FUNDS</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <span className="text-primary neon-glow">$500K</span> buys 12–18 months of focused execution.
      </h2>
      <p className="slide-subhead mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Every dollar is mapped to a specific milestone: complete the platform, activate revenue, and prove the model before raising again.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Donut */}
        <div className="w-[420px] flex flex-col items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} cx="50%" cy="50%" innerRadius={85} outerRadius={140} paddingAngle={3} dataKey="value">
                  {chartData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="text-3xl font-black text-primary">$500K</div>
                <div className="text-[10px] text-muted-foreground">Total Raise</div>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="flex flex-col gap-1.5 w-full mt-2">
            {funds.map(f => (
              <div key={f.category} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: f.color }} />
                <span className="text-[10px] text-muted-foreground flex-1">{f.category}</span>
                <span className="text-[10px] font-bold text-foreground">{f.pct}%</span>
                <span className="text-[10px] text-muted-foreground">${(f.amount / 1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Detail cards */}
        <div className="flex-1 flex flex-col gap-2.5">
          {funds.map((f, i) => (
            <div
              key={f.category}
              className="glass-card p-4 flex items-start gap-3 opacity-0 animate-fade-up hover:border-primary/20 transition-colors"
              style={{ animationDelay: `${0.3 + i * 0.07}s` }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${f.color.replace(')', ' / 0.15)')}` }}>
                <f.icon className="w-4.5 h-4.5" style={{ color: f.color.replace(' / 0.15)', ')') }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[13px] font-bold text-foreground">{f.category}</h3>
                  <span className="ml-auto text-[10px] font-bold" style={{ color: f.color }}>{f.pct}% — ${(f.amount / 1000).toFixed(0)}K</span>
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {f.items.map(item => (
                    <div key={item} className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: f.color }} />
                      <span className="text-[10px] text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default UseOfFundsSlide;
