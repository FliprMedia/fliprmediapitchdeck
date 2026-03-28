import SlideLayout from "../SlideLayout";
import DesktopMockup from "../mockups/DesktopMockup";
import MobileMockup from "../mockups/MobileMockup";
import { Newspaper, Users, Radio, BarChart3, Mail, Star, Megaphone, Mic, Layers, Zap, Code } from "lucide-react";

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

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">05 — PRODUCT OVERVIEW</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Already built. Already live. <span className="font-display italic text-[50px] text-primary">Already proving the thesis.</span>
      </h2>
      <p className="slide-subhead mb-5 max-w-[900px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Six operational modules today. Four high-margin modules next. The product already demonstrates category ownership.
      </p>

      <div className="flex flex-1 gap-6 min-h-0">
        {/* Left: Large site mockups showcase */}
        <div className="w-[540px] flex flex-col gap-3 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          {/* Main desktop - Homepage */}
          <DesktopMockup variant="homepage" className="flex-1" />
          
          {/* Bottom row: Mobile + Desktop variants */}
          <div className="flex gap-3 h-[180px]">
            <MobileMockup variant="seller" className="w-[100px]" />
            <DesktopMockup variant="newsletter" className="flex-1" />
            <MobileMockup variant="live" className="w-[100px]" />
          </div>
        </div>

        {/* Right: Modules */}
        <div className="flex-1 flex flex-col gap-3 min-h-0">
          {/* Live Now */}
          <div>
            <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono-brand text-primary tracking-[0.15em] uppercase">Operational</span>
              <div className="h-px flex-1 bg-primary/10" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {currentModules.map((m, i) => (
                <div key={m.title} className="glass-card p-2.5 flex flex-col opacity-0 animate-fade-up group hover:border-primary/20 transition-all"
                  style={{ animationDelay: `${0.3 + i * 0.04}s` }}>
                  <div className="flex items-center gap-1.5 mb-1">
                    <m.icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="text-[11px] font-bold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-[8px] text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Next */}
          <div>
            <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] font-mono-brand text-accent tracking-[0.15em] uppercase">Revenue Modules</span>
              <div className="h-px flex-1 bg-accent/10" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {nextModules.map((m, i) => (
                <div key={m.title} className="glass-card p-2.5 flex flex-col opacity-0 animate-fade-up group hover:border-accent/20 transition-all border-accent/8"
                  style={{ animationDelay: `${0.6 + i * 0.04}s` }}>
                  <div className="flex items-center gap-1.5 mb-1">
                    <m.icon className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
                    <h3 className="text-[11px] font-bold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-[8px] text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder transparency */}
          <div className="glass-card p-3 flex items-start gap-3 opacity-0 animate-fade-up mt-auto" style={{ animationDelay: '0.75s' }}>
            <div className="w-7 h-7 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 border border-primary/12">
              <Code className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-bold text-foreground">Capital-Efficient Build</span>
                <Zap className="w-3 h-3 text-primary" />
              </div>
              <p className="text-[8px] text-muted-foreground leading-relaxed">
                Built to this point with near-zero capital using AI-driven development. This round transitions from working prototype to fully operational, revenue-generating platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProductSlide;
