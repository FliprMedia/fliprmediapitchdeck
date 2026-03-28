import SlideLayout from "../SlideLayout";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { TrendingUp, Zap, ShoppingBag, Radio, Target, Users } from "lucide-react";

const marketData = [
  { year: "2020", value: 2 },
  { year: "2021", value: 4.2 },
  { year: "2022", value: 6.8 },
  { year: "2023", value: 9.5 },
  { year: "2024", value: 12.1 },
  { year: "2025", value: 14.64 },
  { year: "2026", value: 19 },
  { year: "2027", value: 25 },
];

const evolution = [
  { era: "2015–2018", label: "Social Media", sub: "Platforms build audiences" },
  { era: "2018–2021", label: "Creators", sub: "Monetization of influence" },
  { era: "2021–2024", label: "Live Selling", sub: "Commerce meets content" },
  { era: "2025+", label: "Dedicated Media Layer", sub: "Flipr.Media emerges", active: true },
];

const themes = [
  { icon: TrendingUp, title: "US Livestream Commerce Surging", desc: "US livestream ecommerce hit $14.64B in 2025 — and accelerating." },
  { icon: ShoppingBag, title: "Shoppable Media Going Mainstream", desc: "30%+ of US internet users made a shoppable media purchase in 2025." },
  { icon: Users, title: "Creator-Merchants Are a New Class", desc: "Live sellers are building real businesses — part creator, part retailer." },
  { icon: Radio, title: "Platforms Training Buy-Where-You-Watch", desc: "TikTok, YouTube, eBay, Whatnot all investing in live commerce infra." },
  { icon: Target, title: "Advertisers Need Vertical Media", desc: "Brands need performance-oriented channels to reach commerce creators." },
  { icon: Zap, title: "Social Commerce Accelerating", desc: "The broader social commerce wave is expanding the category rapidly." },
];

const badges = ["Commerce", "Content", "Creators", "Community"];

const WhyNowSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
    
    {/* Subtle upward growth lines */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
      {[0, 1, 2, 3, 4].map(i => (
        <line key={i} x1={`${15 + i * 18}%`} y1="100%" x2={`${25 + i * 14}%`} y2="10%" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      ))}
    </svg>

    {/* Ambient glow */}
    <div className="absolute top-[-100px] right-[200px] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-50px] left-[100px] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      {/* Header row */}
      <div className="flex items-start justify-between mb-6">
        <div className="max-w-[800px]">
          <div className="text-primary font-mono text-sm tracking-widest mb-3 opacity-0 animate-fade-up">03 — WHY NOW</div>
          <h2 className="text-[50px] font-bold leading-[1.08] mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Why this moment <span className="text-primary">matters.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Live selling is crossing from niche to mainstream. The infrastructure is being built. The creators are arriving. 
            The only thing missing is the media layer that ties the industry together.
          </p>
        </div>

        {/* Badges */}
        <div className="flex gap-3 mt-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {badges.map((b, i) => (
            <div key={b} className="glass-card px-5 py-2.5 text-sm font-semibold text-primary border-primary/20">
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Main content: chart + themes */}
      <div className="flex-1 flex gap-8">
        {/* Left: Chart + Evolution timeline */}
        <div className="w-[720px] flex flex-col gap-5">
          {/* Chart */}
          <div className="glass-card p-6 flex-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-muted-foreground font-medium">US Livestream Ecommerce Sales ($B)</div>
              <div className="flex items-center gap-2 text-xs text-primary font-mono">
                <TrendingUp className="w-3.5 h-3.5" /> RAPID GROWTH
              </div>
            </div>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData}>
                  <defs>
                    <linearGradient id="whyNowGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(145 100% 49%)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="hsl(145 100% 49%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" stroke="hsl(240 5% 35%)" fontSize={11} tickLine={false} />
                  <YAxis stroke="hsl(240 5% 35%)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={v => `$${v}B`} />
                  <Area type="monotone" dataKey="value" stroke="hsl(145 100% 49%)" strokeWidth={2.5} fill="url(#whyNowGrad)" dot={{ r: 3, fill: "hsl(145 100% 49%)", strokeWidth: 0 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            {/* Stat callouts under chart */}
            <div className="flex gap-4 mt-4 pt-4 border-t border-border/40">
              {[
                { val: "$14.64B", label: "US livestream ecommerce (2025)" },
                { val: "30%+", label: "US internet users bought via shoppable media" },
                { val: "Accelerating", label: "Social commerce growth trajectory" },
              ].map(s => (
                <div key={s.label} className="flex-1">
                  <div className="text-xl font-black text-primary">{s.val}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Evolution timeline */}
          <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="text-xs font-mono text-muted-foreground tracking-widest mb-4">EVOLUTION TIMELINE</div>
            <div className="flex items-center gap-0 relative">
              <div className="absolute top-[14px] left-0 right-0 h-[2px] bg-border" />
              {evolution.map((e, i) => (
                <div key={e.label} className="flex-1 relative flex flex-col items-center text-center">
                  <div className={`w-3.5 h-3.5 rounded-full z-10 mb-2 ${e.active ? 'bg-primary shadow-[0_0_12px_hsl(145_100%_49%/0.5)]' : 'bg-muted-foreground/30'}`} />
                  <div className="text-[10px] text-muted-foreground font-mono">{e.era}</div>
                  <div className={`text-sm font-bold mt-1 ${e.active ? 'text-primary' : 'text-foreground'}`}>{e.label}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{e.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Theme cards */}
        <div className="flex-1 grid grid-cols-2 gap-3.5">
          {themes.map((t, i) => (
            <div
              key={t.title}
              className="glass-card p-5 flex flex-col opacity-0 animate-fade-up hover:border-primary/20 transition-colors"
              style={{ animationDelay: `${0.25 + i * 0.06}s` }}
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <t.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <h3 className="text-[15px] font-bold text-foreground mb-1.5 leading-snug">{t.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default WhyNowSlide;
