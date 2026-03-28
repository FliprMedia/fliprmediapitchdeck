import SlideLayout from "../SlideLayout";
import { Newspaper, Users, Radio, BarChart3, Mail, Star, Monitor, Smartphone, Megaphone, Mic, Layers, Zap, Code } from "lucide-react";

const currentModules = [
  { icon: Newspaper, title: "Industry News", desc: "Breaking coverage across all platforms", live: true },
  { icon: Users, title: "Seller Spotlights", desc: "In-depth creator profiles & stories", live: true },
  { icon: Radio, title: "Live Show Discovery", desc: "Find shows across Whatnot, TikTok & more", live: true },
  { icon: Star, title: "Platform Watch", desc: "Deep-dive platform reporting", live: true },
  { icon: Mic, title: "Interviews", desc: "Conversations with industry leaders", live: true },
  { icon: Mail, title: "Newsletter", desc: "Daily/weekly industry briefing", live: true },
];

const nextModules = [
  { icon: BarChart3, title: "Rankings & Activity Index", desc: "Seller performance data & benchmarks" },
  { icon: Megaphone, title: "Advertiser Placements", desc: "Native ads & sponsored content modules" },
  { icon: Star, title: "Premium Seller Profiles", desc: "Verified profiles with analytics" },
  { icon: Layers, title: "Data & Insights", desc: "Market intelligence & trend reports" },
];

const ProductSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[200px]" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/[0.025] rounded-full blur-[180px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">05 — PRODUCT OVERVIEW</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Flipr.Media is building the <span className="font-display italic text-[50px] text-primary">media layer</span> for live selling.
      </h2>
      <p className="slide-subhead mb-7 max-w-[900px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        A modular media and intelligence ecosystem — from news and discovery to data, rankings, and advertiser infrastructure.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Device Mockups */}
        <div className="w-[520px] flex flex-col gap-4 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          {/* Laptop */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col" style={{
              background: 'linear-gradient(145deg, hsl(var(--card) / 0.7), hsl(var(--card) / 0.4))',
              border: '1px solid hsl(var(--border) / 0.4)',
              boxShadow: '0 20px 60px -12px hsl(0 0% 0% / 0.5), 0 0 30px -8px hsl(var(--primary) / 0.05)'
            }}>
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,70%,55%)]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[hsl(45,80%,55%)]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-muted/30 rounded px-6 py-1 text-[9px] text-muted-foreground/40 font-mono-brand">flipr.media</div>
                </div>
                <Monitor className="w-3 h-3 text-muted-foreground/20" />
              </div>
              <div className="flex-1 p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-lg font-black"><span className="text-primary">Flipr</span><span className="text-foreground/60">.Media</span></div>
                  <div className="flex gap-4 ml-auto text-[9px] text-muted-foreground/40 font-medium">
                    <span>News</span><span>Shows</span><span>Sellers</span><span>Rankings</span>
                  </div>
                </div>
                <div className="h-px bg-primary/15" />
                <div className="flex gap-3 flex-1">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="bg-muted/20 rounded-lg flex-1 flex items-center justify-center border border-border/10">
                      <Newspaper className="w-6 h-6 text-primary/15" />
                    </div>
                    <div className="h-2.5 bg-foreground/10 rounded w-[90%]" />
                    <div className="h-2 bg-muted-foreground/6 rounded w-[65%]" />
                  </div>
                  <div className="w-[42%] flex flex-col gap-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-2 items-start">
                        <div className="w-10 h-9 bg-muted/20 rounded shrink-0 border border-border/10" />
                        <div className="flex-1 flex flex-col gap-1 pt-0.5">
                          <div className="h-2 bg-foreground/8 rounded w-full" />
                          <div className="h-1.5 bg-muted-foreground/5 rounded w-3/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Mobile + Newsletter + Ad module */}
          <div className="flex gap-3 h-[170px]">
            <div className="w-[100px] rounded-2xl overflow-hidden flex flex-col" style={{
              background: 'hsl(var(--card) / 0.5)',
              border: '2px solid hsl(var(--border) / 0.3)',
              boxShadow: '0 12px 30px -6px hsl(0 0% 0% / 0.4)'
            }}>
              <div className="h-3 border-b border-border/20 flex items-center justify-center">
                <div className="w-7 h-0.5 bg-muted-foreground/15 rounded-full" />
              </div>
              <div className="flex-1 p-2 flex flex-col gap-1">
                <div className="text-[6px] font-black"><span className="text-primary">Flipr</span><span className="text-foreground/40">.M</span></div>
                <div className="bg-muted/15 rounded h-9 border border-border/10" />
                <div className="h-1.5 bg-foreground/6 rounded w-3/4" />
                <div className="h-1 bg-muted-foreground/4 rounded w-full" />
              </div>
              <Smartphone className="w-2.5 h-2.5 text-muted-foreground/15 mx-auto mb-1" />
            </div>

            <div className="flex-1 glass-card p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary/50" />
                <span className="text-[9px] font-semibold text-foreground/60">Flipr Daily Briefing</span>
              </div>
              <div className="h-px bg-border/20" />
              <div className="flex flex-col gap-1.5 flex-1">
                {["Top sellers this week on Whatnot", "TikTok Shop launches new...", "Exclusive: eBay Live data"].map((t, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    <span className="text-[7px] text-muted-foreground/60">{t}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/8 border border-primary/15 rounded px-2 py-1 text-center">
                <span className="text-[7px] text-primary/60 font-medium">Subscribe →</span>
              </div>
            </div>

            <div className="flex-1 glass-card p-3 flex flex-col gap-2 border-accent/10">
              <div className="flex items-center gap-2">
                <Megaphone className="w-3.5 h-3.5 text-accent/50" />
                <span className="text-[9px] font-semibold text-foreground/60">Sponsor Module</span>
              </div>
              <div className="h-px bg-accent/10" />
              <div className="bg-accent/5 rounded-lg flex-1 flex flex-col items-center justify-center gap-1 border border-accent/10">
                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center">
                  <Star className="w-4 h-4 text-accent/30" />
                </div>
                <div className="text-[6px] text-accent/30">Featured Partner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Modules */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          {/* Live Now */}
          <div>
            <div className="flex items-center gap-2 mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono-brand text-primary tracking-[0.15em] uppercase">Live Now</span>
              <div className="h-px flex-1 bg-primary/10" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {currentModules.map((m, i) => (
                <div key={m.title} className="glass-card p-3 flex flex-col opacity-0 animate-fade-up group hover:border-primary/20 transition-all"
                  style={{ animationDelay: `${0.3 + i * 0.04}s` }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <m.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="text-[12px] font-bold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-[9px] text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Next */}
          <div>
            <div className="flex items-center gap-2 mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] font-mono-brand text-accent tracking-[0.15em] uppercase">Coming Next</span>
              <div className="h-px flex-1 bg-accent/10" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {nextModules.map((m, i) => (
                <div key={m.title} className="glass-card p-3 flex flex-col opacity-0 animate-fade-up group hover:border-accent/20 transition-all border-accent/8"
                  style={{ animationDelay: `${0.6 + i * 0.04}s` }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <m.icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                    <h3 className="text-[12px] font-bold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-[9px] text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder transparency */}
          <div className="glass-card p-4 flex items-start gap-3 opacity-0 animate-fade-up mt-auto" style={{ animationDelay: '0.75s' }}>
            <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 border border-primary/12">
              <Code className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[11px] font-bold text-foreground">Founder Transparency</span>
                <Zap className="w-3 h-3 text-primary" />
              </div>
              <p className="text-[9px] text-muted-foreground leading-relaxed">
                Built to date primarily through rapid Lovable-driven development. Capital now accelerates the transition from strong prototype to fully operational platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProductSlide;
