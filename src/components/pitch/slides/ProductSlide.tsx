import SlideLayout from "../SlideLayout";
import { Newspaper, Users, Radio, BarChart3, Mail, Star, Monitor, Smartphone, TrendingUp, Megaphone, UserCheck, Database, Mic, Eye, Layers, Zap } from "lucide-react";

const currentModules = [
  { icon: Newspaper, title: "Industry News", desc: "Breaking coverage of live selling platforms, sellers, and trends", live: true },
  { icon: UserCheck, title: "Seller Spotlights", desc: "In-depth profiles and stories of top creators across platforms", live: true },
  { icon: Radio, title: "Live Show Discovery", desc: "Find and follow live shows across Whatnot, TikTok, eBay, and more", live: true },
  { icon: Eye, title: "Platform Watch", desc: "Deep-dive reporting on every major live commerce platform", live: true },
  { icon: Mic, title: "Interviews", desc: "Conversations with sellers, founders, and industry leaders", live: true },
  { icon: Mail, title: "Newsletter", desc: "Daily/weekly briefing for sellers, platforms, and investors", live: true },
];

const nextModules = [
  { icon: BarChart3, title: "Rankings / Activity Index", desc: "Industry-first indexes, charts, and seller performance data" },
  { icon: Megaphone, title: "Advertiser / Sponsor Placements", desc: "Native ad units and sponsored content for brands targeting sellers" },
  { icon: Star, title: "Premium Seller Profiles", desc: "Verified, enhanced profiles with analytics and credibility signals" },
  { icon: Database, title: "Data & Insights Products", desc: "Market intelligence, trend reports, and API access for enterprises" },
];

const ProductSlide = () => (
  <SlideLayout>
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-[180px]" />

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      {/* Header */}
      <div className="text-primary font-mono text-sm tracking-widest mb-3 opacity-0 animate-fade-up">05 — PRODUCT OVERVIEW</div>
      <h2 className="text-[44px] font-bold leading-tight mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Flipr.Media is building the <span className="text-primary">media layer</span> for live selling.
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-[900px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        A modular media and intelligence ecosystem — from news and discovery to data, rankings, and advertiser infrastructure.
      </p>

      <div className="flex flex-1 gap-8 min-h-0">
        {/* Left: Device Mockups */}
        <div className="w-[520px] flex flex-col gap-4 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          {/* Laptop mockup */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden flex flex-col">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-muted/40 rounded px-8 py-1 text-[10px] text-muted-foreground font-mono">flipr.media</div>
                </div>
                <Monitor className="w-3.5 h-3.5 text-muted-foreground/40" />
              </div>
              {/* Fake site content */}
              <div className="flex-1 p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-lg font-black"><span className="text-primary">Flipr</span><span className="text-foreground">.Media</span></div>
                  <div className="flex gap-3 ml-auto text-[9px] text-muted-foreground font-medium">
                    <span>News</span><span>Shows</span><span>Sellers</span><span>Rankings</span><span>Platforms</span>
                  </div>
                </div>
                <div className="h-px bg-primary/20" />
                {/* Hero article */}
                <div className="flex gap-3 flex-1">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="bg-muted/40 rounded-lg flex-1 flex items-center justify-center">
                      <Newspaper className="w-8 h-8 text-primary/20" />
                    </div>
                    <div className="h-2.5 bg-foreground/15 rounded w-[90%]" />
                    <div className="h-2 bg-muted-foreground/10 rounded w-[70%]" />
                  </div>
                  <div className="w-[45%] flex flex-col gap-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-2 items-start">
                        <div className="w-12 h-10 bg-muted/40 rounded shrink-0" />
                        <div className="flex-1 flex flex-col gap-1 pt-0.5">
                          <div className="h-2 bg-foreground/12 rounded w-full" />
                          <div className="h-1.5 bg-muted-foreground/8 rounded w-3/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile + Newsletter mockups side by side */}
          <div className="flex gap-3 h-[180px]">
            {/* Mobile */}
            <div className="w-[110px] rounded-xl border-2 border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden flex flex-col">
              <div className="h-3 border-b border-border/30 flex items-center justify-center">
                <div className="w-8 h-1 bg-muted-foreground/20 rounded-full" />
              </div>
              <div className="flex-1 p-2 flex flex-col gap-1.5">
                <div className="text-[7px] font-bold"><span className="text-primary">Flipr</span>.Media</div>
                <div className="bg-muted/30 rounded h-10 flex items-center justify-center">
                  <Radio className="w-3 h-3 text-primary/20" />
                </div>
                <div className="h-1.5 bg-foreground/10 rounded w-3/4" />
                <div className="h-1 bg-muted-foreground/8 rounded w-full" />
                <div className="h-1 bg-muted-foreground/8 rounded w-2/3" />
              </div>
              <Smartphone className="w-3 h-3 text-muted-foreground/20 mx-auto mb-1" />
            </div>

            {/* Newsletter mockup */}
            <div className="flex-1 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary/60" />
                <span className="text-[10px] font-semibold text-foreground/80">Flipr Daily Briefing</span>
              </div>
              <div className="h-px bg-border/40" />
              <div className="flex flex-col gap-1.5 flex-1">
                {["Top sellers this week on Whatnot", "TikTok Shop launches new...", "Exclusive: eBay Live data"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                    <span className="text-[8px] text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded px-2 py-1 text-center">
                <span className="text-[8px] text-primary font-medium">Subscribe →</span>
              </div>
            </div>

            {/* Ad placement mockup */}
            <div className="flex-1 rounded-xl border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-purple-400/60" />
                <span className="text-[10px] font-semibold text-foreground/80">Sponsor Module</span>
              </div>
              <div className="h-px bg-purple-500/20" />
              <div className="bg-purple-500/8 rounded-lg flex-1 flex flex-col items-center justify-center gap-1">
                <div className="w-10 h-10 rounded bg-purple-500/15 flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-400/40" />
                </div>
                <div className="text-[7px] text-purple-300/50">Featured Partner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Module Grid */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          {/* Current State */}
          <div>
            <div className="flex items-center gap-2 mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Live Now</span>
              <div className="h-px flex-1 bg-primary/15" />
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {currentModules.map((m, i) => (
                <div
                  key={m.title}
                  className="glass-card p-3.5 flex flex-col opacity-0 animate-fade-up hover:border-primary/30 transition-all group cursor-default"
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <m.icon className="w-4.5 h-4.5 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="text-[13px] font-semibold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next State */}
          <div>
            <div className="flex items-center gap-2 mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-xs font-semibold text-purple-400 tracking-wide uppercase">Coming Next</span>
              <div className="h-px flex-1 bg-purple-500/15" />
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {nextModules.map((m, i) => (
                <div
                  key={m.title}
                  className="glass-card p-3.5 flex flex-col opacity-0 animate-fade-up hover:border-purple-500/30 transition-all group cursor-default border-purple-500/10"
                  style={{ animationDelay: `${0.65 + i * 0.05}s` }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <m.icon className="w-4.5 h-4.5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <h3 className="text-[13px] font-semibold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder transparency */}
          <div className="glass-card p-4 flex items-start gap-3 opacity-0 animate-fade-up mt-auto" style={{ animationDelay: '0.85s' }}>
            <Layers className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-foreground">Founder Transparency</span>
                <Zap className="w-3 h-3 text-primary" />
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Built to date primarily through rapid Lovable-driven development and vibe coding, with select integrations already in place.
                Capital now accelerates the transition from strong prototype/media property to fully operational platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProductSlide;
