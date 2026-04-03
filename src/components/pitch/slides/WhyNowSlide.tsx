import SlideLayout from "../SlideLayout";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingUp, ShoppingBag, Radio, Target, Users, Globe } from "lucide-react";

const marketData = [
  { year: "2020", value: 2 },
  { year: "2021", value: 4.2 },
  { year: "2022", value: 6.8 },
  { year: "2023", value: 9.5 },
  { year: "2024", value: 12.1 },
  { year: "2025", value: 14.64 },
  { year: "2026E", value: 19 },
  { year: "2027E", value: 25 },
];

const evolution = [
  { era: "2015", label: "Social Media", sub: "Platforms build audiences" },
  { era: "2018", label: "Creators", sub: "Monetization of influence" },
  { era: "2021", label: "Live Selling", sub: "Commerce meets content" },
  { era: "2025+", label: "Media Layer", sub: "Flipr.Media emerges", active: true },
];

const themes = [
  { icon: TrendingUp, title: "US Livestream Commerce Hit $14.64B", desc: "Growing 30%+ YoY — fastest-rising segment in ecommerce" },
  { icon: ShoppingBag, title: "Shoppable Media Is Mainstream", desc: "30%+ of US internet users made a shoppable media purchase" },
  { icon: Users, title: "Creator-Merchants Are a New Asset Class", desc: "Live sellers building six- and seven-figure businesses" },
  { icon: Radio, title: "Every Major Platform Is Investing", desc: "TikTok, YouTube, eBay, Whatnot — all pouring capital in" },
  { icon: Target, title: "Advertisers Have No Way In", desc: "Brands want to reach commerce creators but no channel serves them" },
  { icon: Globe, title: "The Category Has No Voice", desc: "No TechCrunch, no Bloomberg, no PitchBook for this market" },
];

const WhyNowSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-[-200px] left-[300px] w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-[200px]" />
    <div className="absolute bottom-[-100px] right-[100px] w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">03 — WHY NOW</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        The window is open <span className="font-display italic text-[58px] text-primary">right now.</span>
      </h2>
      <p className="slide-subhead mb-6 max-w-[800px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Six forces converging to create a once-in-a-category opportunity for a media brand that moves first.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Chart + Timeline */}
        <div className="w-[620px] flex flex-col gap-4">
          <div className="glass-card-elevated p-6 flex-1 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[16px] font-mono-brand text-muted-foreground tracking-[0.15em] uppercase">US Livestream Ecommerce ($B)</span>
              <span className="text-[14px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono-brand font-semibold">ILLUSTRATIVE</span>
            </div>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
                  <defs>
                    <linearGradient id="whyNowGrad3" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(145 100% 49%)" stopOpacity={0.3} />
                      <stop offset="50%" stopColor="hsl(263 70% 58%)" stopOpacity={0.12} />
                      <stop offset="100%" stopColor="hsl(145 100% 49%)" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 10% 18%)" strokeOpacity={0.4} />
                  <XAxis dataKey="year" stroke="hsl(240 5% 55%)" fontSize={14} tickLine={false} fontFamily="JetBrains Mono" />
                  <YAxis stroke="hsl(240 5% 55%)" fontSize={14} tickLine={false} axisLine={false} tickFormatter={v => `$${v}B`} fontFamily="JetBrains Mono" />
                  <Area type="monotone" dataKey="value" stroke="hsl(145 100% 49%)" strokeWidth={2.5} fill="url(#whyNowGrad3)" dot={{ r: 3, fill: "hsl(145 100% 49%)", strokeWidth: 0 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[18px] text-primary font-bold stat-value">$14.64B</span>
              <span className="text-[17px] text-muted-foreground">US livestream ecommerce in 2025</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-[16px] font-mono-brand text-muted-foreground tracking-[0.15em] uppercase mb-3">Evolution</div>
            <div className="flex items-center gap-0">
              {evolution.map((t, i) => (
                <div key={t.era} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className={`w-4 h-4 rounded-full ${t.active ? 'bg-primary ring-4 ring-primary/20' : 'bg-muted-foreground/20 border border-muted-foreground/30'}`} />
                    <span className={`text-[17px] font-bold ${t.active ? 'text-primary' : 'text-muted-foreground'}`}>{t.era}</span>
                    <span className={`text-[16px] ${t.active ? 'text-primary/80 font-semibold' : 'text-muted-foreground'}`}>{t.label}</span>
                  </div>
                  {i < evolution.length - 1 && <div className="h-px flex-1 bg-border/30 -mt-5" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Theme cards */}
        <div className="flex-1 flex flex-col gap-3">
          {themes.map((theme, i) => (
            <div key={theme.title} className="glass-card p-5 flex items-start gap-4 opacity-0 animate-fade-up group hover:border-primary/20 transition-all"
              style={{ animationDelay: `${0.25 + i * 0.06}s` }}>
              <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors">
                <theme.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-foreground mb-0.5">{theme.title}</h3>
                <p className="text-[17px] text-muted-foreground leading-relaxed">{theme.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default WhyNowSlide;