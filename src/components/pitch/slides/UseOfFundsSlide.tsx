import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Code, Megaphone, Handshake, FileText, Briefcase } from "lucide-react";

const funds = [
  {
    icon: Code,
    category: "Product & Engineering",
    pct: 35,
    amount: 87500,
    color: "hsl(145 100% 49%)",
    items: ["Site completion & UX polish", "Backend & integrations", "Monetization flows", "Performance improvements"],
  },
  {
    icon: Megaphone,
    category: "Marketing & Growth",
    pct: 20,
    amount: 50000,
    color: "hsl(263 70% 58%)",
    items: ["Newsletter growth", "Paid acquisition experiments", "Social/video & SEO", "Creator collaborations"],
  },
  {
    icon: Handshake,
    category: "Sales / Partnerships / BD",
    pct: 15,
    amount: 37500,
    color: "hsl(145 80% 35%)",
    items: ["Advertiser outreach", "Platform relationships", "Sponsorship packaging", "Outbound systems"],
  },
  {
    icon: FileText,
    category: "Content & Operations",
    pct: 20,
    amount: 50000,
    color: "hsl(263 50% 45%)",
    items: ["Editorial production", "Scheduling & workflows", "Content repurposing", "Operations support"],
  },
  {
    icon: Briefcase,
    category: "Working Capital / Admin",
    pct: 10,
    amount: 25000,
    color: "hsl(240 10% 45%)",
    items: ["Legal, admin & tools", "Runway buffer"],
  },
];

const chartData = funds.map(f => ({ name: f.category, value: f.pct, color: f.color }));

const UseOfFundsSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="bottom-left" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">11 — USE OF FUNDS</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <span className="text-primary neon-glow">$250K</span> — every dollar mapped <span className="font-display italic text-[58px] text-primary">to a specific outcome.</span>
      </h2>
      <p className="text-[17px] text-foreground/85 leading-[1.55] max-w-[1200px] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        This is a lean, focused raise. We are not raising to figure out the business model — we already know what it is. <span className="text-primary font-semibold">We are raising to accelerate what is already working: more content, faster audience growth, and Stripe monetization fully live by June 1.</span>
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Donut */}
        <div className="w-[420px] flex flex-col items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full h-[320px]">
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
                <div className="text-[32px] font-black text-primary">$250K</div>
                <div className="text-[17px] text-muted-foreground font-medium">Total Raise</div>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="flex flex-col gap-2.5 w-full mt-2">
            {funds.map(f => (
              <div key={f.category} className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-sm shrink-0" style={{ backgroundColor: f.color }} />
                <span className="text-[16px] text-muted-foreground flex-1">{f.category}</span>
                <span className="text-[16px] font-bold text-foreground">{f.pct}%</span>
                <span className="text-[16px] text-muted-foreground">${(f.amount / 1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Detail cards */}
        <div className="flex-1 flex flex-col gap-3">
          {funds.map((f, i) => (
            <div
              key={f.category}
              className="glass-card p-5 flex items-start gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.3 + i * 0.07}s` }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${f.color.replace(')', ' / 0.15)')}` }}>
                <f.icon className="w-5 h-5" style={{ color: f.color.replace(' / 0.15)', ')') }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-[17px] font-bold text-foreground">{f.category}</h3>
                  <span className="ml-auto text-[17px] font-bold" style={{ color: f.color }}>{f.pct}% — ${(f.amount / 1000).toFixed(0)}K</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {f.items.map(item => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: f.color }} />
                      <span className="text-[16px] text-muted-foreground">{item}</span>
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