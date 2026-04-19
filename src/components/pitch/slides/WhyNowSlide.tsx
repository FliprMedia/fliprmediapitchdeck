import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingUp, Radio, Globe, Target } from "lucide-react";

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

const themes = [
  { icon: TrendingUp, title: "The category is scaling fast", desc: "US live commerce grew to $14.64B in 2025 — up 30%+ year over year, faster than any other ecommerce segment." },
  { icon: Radio, title: "Every major platform is investing", desc: "TikTok Shop, Amazon Live, eBay, YouTube, and Whatnot are all pouring capital into live selling right now." },
  { icon: Globe, title: "Live selling is going mainstream", desc: "Whatnot just raised at a $5B valuation. The category is moving from niche to a mainstream commerce channel." },
  { icon: Target, title: "No media brand has emerged yet", desc: "There is no Variety, Billboard, or Ad Age for this industry. The defining media slot is open and won't stay that way." },
];

const WhyNowSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="strong" glowPosition="top-left" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">04 — WHY NOW</div>
      <h2 className="slide-headline mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        The window is open <span className="font-display italic text-[58px] text-primary">right now.</span>
      </h2>
      <p className="text-[19px] text-foreground/85 leading-[1.55] max-w-[1300px] mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Live selling is moving from fringe to mainstream this decade. The platforms are scaling, the dollars are flowing, and the defining trade publication has not been built yet.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Chart */}
        <div className="w-[560px] flex flex-col">
          <div className="glass-card-elevated p-6 flex-1 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[16px] font-mono-brand text-muted-foreground tracking-[0.15em] uppercase">US Livestream Ecommerce ($B)</span>
              <span className="text-[14px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono-brand font-semibold">ILLUSTRATIVE</span>
            </div>
            <div className="h-[340px]">
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
              <span className="text-[20px] text-primary font-bold stat-value">$14.64B</span>
              <span className="text-[18px] text-muted-foreground">US livestream ecommerce in 2025</span>
            </div>
          </div>
        </div>

        {/* Right: 4 Theme cards */}
        <div className="flex-1 flex flex-col gap-4">
          {themes.map((theme, i) => (
            <div key={theme.title} className="glass-card p-6 flex items-start gap-5 opacity-0 animate-fade-up flex-1 group hover:border-primary/20 transition-all"
              style={{ animationDelay: `${0.25 + i * 0.08}s` }}>
              <div className="w-14 h-14 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors">
                <theme.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-foreground mb-1.5">{theme.title}</h3>
                <p className="text-[18px] text-muted-foreground leading-relaxed">{theme.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default WhyNowSlide;
