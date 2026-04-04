import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { TrendingUp, Award, Users, Database, RefreshCw, Megaphone, ArrowRight, Star } from "lucide-react";

const scenarioData = [
  { year: "Year 1", conservative: 50, base: 100, upside: 180 },
  { year: "Year 2", conservative: 200, base: 450, upside: 900 },
  { year: "Year 3", conservative: 550, base: 1400, upside: 2800 },
];

const streams = [
  "Advertisers & Display", "Newsletter Sponsors", "Premium Placements",
  "Seller Subscriptions", "Featured Listings", "Reports & Research",
  "Partnerships & Events",
];

const valueDrivers = [
  { icon: Award, label: "Media Brand Equity" },
  { icon: Users, label: "Audience Ownership" },
  { icon: Database, label: "Category Data" },
  { icon: RefreshCw, label: "Recurring Subs" },
  { icon: Megaphone, label: "Advertiser Network" },
  { icon: TrendingUp, label: "M&A Optionality" },
];

const RevenueSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">15 — REVENUE POTENTIAL</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Media revenue first. <span className="font-display italic text-[58px] text-primary">SaaS-like margins next.</span>
      </h2>
      <p className="slide-subhead mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Illustrative scenarios — not forecasts. Each pathway shows how stacked revenue layers compound.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Chart + Streams */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="glass-card p-5 flex-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-[17px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">3-Year Revenue Scenarios ($K)</div>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scenarioData} barCategoryGap="25%">
                  <XAxis dataKey="year" stroke="hsl(240 5% 55%)" fontSize={15} tickLine={false} />
                  <YAxis stroke="hsl(240 5% 55%)" fontSize={14} tickLine={false} axisLine={false} tickFormatter={v => v >= 1000 ? `$${v/1000}M` : `$${v}K`} />
                  <Bar dataKey="conservative" name="Conservative" radius={[3, 3, 0, 0]} fill="hsl(240 10% 40%)" />
                  <Bar dataKey="base" name="Base" radius={[3, 3, 0, 0]} fill="hsl(145 100% 49%)" />
                  <Bar dataKey="upside" name="Upside" radius={[3, 3, 0, 0]} fill="hsl(263 70% 58%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-2">
              {[
                { label: "Conservative", color: "hsl(240 10% 40%)" },
                { label: "Base", color: "hsl(145 100% 49%)" },
                { label: "Upside", color: "hsl(263 70% 58%)" },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: l.color }} />
                  <span className="text-[16px] text-muted-foreground font-medium">{l.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-[17px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">Revenue Streams Modeled</span>
            <div className="flex flex-wrap gap-2.5">
              {streams.map(s => (
                <div key={s} className="px-4 py-2 rounded-full bg-muted/30 text-[16px] text-foreground font-medium">{s}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-[500px] flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {[
              { label: "Conservative", yr3: "$550K", color: "hsl(240 10% 40%)", desc: "Organic growth, limited sales" },
              { label: "Base", yr3: "$1.4M", color: "hsl(145 100% 49%)", desc: "Active sales, strong content" },
              { label: "Upside", yr3: "$2.8M+", color: "hsl(263 70% 58%)", desc: "Fast adoption, premium products" },
            ].map(s => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="text-[16px] font-semibold text-muted-foreground uppercase mb-1">{s.label}</div>
                <div className="text-[28px] font-black mb-0.5" style={{ color: s.color }}>{s.yr3}</div>
                <div className="text-[15px] text-muted-foreground font-medium">Year 3</div>
                <div className="text-[15px] text-muted-foreground mt-1">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="glass-card p-5 border-primary/20 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-[17px] font-bold text-foreground">Long-Term Vision</span>
            </div>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              Built as a <span className="text-primary font-semibold">category platform with future optionality</span> across media, sponsorship, intelligence, and infrastructure — compounding into recurring, high-margin revenue.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {[
              { label: "Media", range: "8–12x" },
              { label: "Media + Data", range: "15–25x" },
              { label: "Commerce-Tech", range: "20–40x" },
            ].map(m => (
              <div key={m.label} className="glass-card p-4 text-center border-accent/10">
                <div className="text-[16px] text-muted-foreground mb-0.5 font-medium">{m.label}</div>
                <div className="text-[24px] font-black text-accent">{m.range}</div>
                <div className="text-[15px] text-muted-foreground">Revenue Multiple</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        <div className="flex items-center justify-between">
          {valueDrivers.map((d, i) => (
            <div key={d.label} className="flex items-center gap-1.5">
              {i > 0 && <ArrowRight className="w-4 h-4 text-muted-foreground/70 mr-2" />}
              <div className="glass-card px-4 py-2.5 flex items-center gap-2">
                <d.icon className="w-4.5 h-4.5 text-primary" />
                <span className="text-[16px] font-semibold text-foreground">{d.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default RevenueSlide;