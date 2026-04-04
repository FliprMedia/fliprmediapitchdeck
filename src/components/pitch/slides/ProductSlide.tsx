import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import DesktopMockup from "../mockups/DesktopMockup";
import MobileMockup from "../mockups/MobileMockup";
import { Newspaper, Users, Radio, Star, Mic, Mail, BarChart3, Megaphone, Layers, Zap, Code } from "lucide-react";

const currentModules = [
  { icon: Newspaper, title: "Industry News", desc: "Breaking coverage across platforms" },
  { icon: Users, title: "Seller Spotlights", desc: "In-depth creator profiles" },
  { icon: Radio, title: "Live Show Discovery", desc: "Shows across Whatnot, TikTok & more" },
  { icon: Star, title: "Platform Watch", desc: "Deep-dive platform reporting" },
  { icon: Mic, title: "Interviews", desc: "Industry leader conversations" },
  { icon: Mail, title: "Newsletter", desc: "Daily/weekly industry briefing" },
];

const nextModules = [
  { icon: BarChart3, title: "Rankings & Activity Index", desc: "Seller performance benchmarks" },
  { icon: Megaphone, title: "Advertiser Placements", desc: "Native ads & sponsored content" },
  { icon: Star, title: "Premium Seller Profiles", desc: "Verified profiles with analytics" },
  { icon: Layers, title: "Data & Insights", desc: "Market intelligence & reports" },
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
        Already built. Already live. <span className="font-display italic text-[58px] text-primary">Already proving the thesis.</span>
      </h2>
      <p className="slide-subhead mb-5 max-w-[900px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Six operational modules today. Four high-margin modules next.
      </p>

      <div className="flex flex-1 gap-6 min-h-0">
        {/* Left: Large site mockups */}
        <div className="w-[540px] flex flex-col gap-3 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <DesktopMockup variant="homepage" className="flex-1" />
          <div className="flex gap-3 h-[180px]">
            <MobileMockup variant="seller" className="w-[100px]" />
            <DesktopMockup variant="newsletter" className="flex-1" />
            <MobileMockup variant="live" className="w-[100px]" />
          </div>
        </div>

        {/* Right: Modules */}
        <div className="flex-1 flex flex-col gap-3 min-h-0">
          <div>
            <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-[17px] font-mono-brand text-primary tracking-[0.15em] uppercase font-semibold">Operational</span>
              <div className="h-px flex-1 bg-primary/10" />
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {currentModules.map((m, i) => (
                <div key={m.title} className="glass-card p-3.5 flex flex-col opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.3 + i * 0.04}s` }}>
                  <div className="flex items-center gap-2 mb-1">
                    <m.icon className="w-4.5 h-4.5 text-primary" />
                    <h3 className="text-[16px] font-bold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-[17px] font-mono-brand text-accent tracking-[0.15em] uppercase font-semibold">Revenue Modules</span>
              <div className="h-px flex-1 bg-accent/10" />
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {nextModules.map((m, i) => (
                <div key={m.title} className="glass-card p-3.5 flex flex-col opacity-0 animate-fade-up border-accent/8"
                  style={{ animationDelay: `${0.6 + i * 0.04}s` }}>
                  <div className="flex items-center gap-2 mb-1">
                    <m.icon className="w-4.5 h-4.5 text-accent" />
                    <h3 className="text-[16px] font-bold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 flex items-start gap-3 opacity-0 animate-fade-up mt-auto" style={{ animationDelay: '0.75s' }}>
            <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 border border-primary/12">
              <Code className="w-4.5 h-4.5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[17px] font-bold text-foreground">Capital-Efficient Build</span>
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <p className="text-[16px] text-muted-foreground leading-relaxed">
                Built with near-zero capital using AI-driven development. This round transitions from working prototype to revenue-generating platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProductSlide;