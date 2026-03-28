import SlideLayout from "../SlideLayout";
import { Newspaper, Users, Radio, BarChart3, Mail, Star } from "lucide-react";

const features = [
  { icon: Newspaper, title: "Industry News", desc: "Breaking coverage of live selling platforms, sellers, and trends" },
  { icon: Users, title: "Seller Profiles", desc: "Comprehensive profiles of top creators across every platform" },
  { icon: Radio, title: "Live Show Discovery", desc: "Find and follow live shows across Whatnot, TikTok, eBay, and more" },
  { icon: BarChart3, title: "Rankings & Data", desc: "Industry-first indexes, charts, and seller performance data" },
  { icon: Mail, title: "Newsletter", desc: "Daily/weekly briefing for sellers, platforms, and investors" },
  { icon: Star, title: "Platform Coverage", desc: "Deep-dive reporting on every major live commerce platform" },
];

const ProductSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/3" />

    <div className="relative z-10 flex flex-col h-full px-20 py-16">
      <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">05 — PRODUCT OVERVIEW</div>
      <h2 className="text-[48px] font-bold leading-tight mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Everything the Live Selling Industry <span className="text-primary">Needs to Know</span>
      </h2>
      <p className="text-xl text-muted-foreground mb-10 max-w-[800px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Flipr.Media is a comprehensive media and intelligence platform — think TechCrunch meets Bloomberg for live commerce.
      </p>

      <div className="flex flex-1 gap-6">
        {/* Site mockup placeholder */}
        <div className="w-[680px] glass-card p-4 flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-muted/80 to-muted/40 border border-border flex flex-col">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="flex-1 text-center text-xs text-muted-foreground font-mono">flipr.media</div>
            </div>
            {/* Fake content */}
            <div className="flex-1 p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-black"><span className="text-primary">Flipr</span>.Media</div>
                <div className="flex gap-4 ml-auto text-xs text-muted-foreground">
                  <span>News</span><span>Shows</span><span>Sellers</span><span>Rankings</span>
                </div>
              </div>
              <div className="h-[2px] bg-primary/30 w-full" />
              <div className="grid grid-cols-3 gap-3 flex-1">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-card/60 rounded-lg p-3 border border-border/50">
                    <div className="w-full h-24 bg-muted rounded mb-2" />
                    <div className="h-3 bg-muted-foreground/20 rounded w-3/4 mb-1.5" />
                    <div className="h-2 bg-muted-foreground/10 rounded w-full" />
                    <div className="h-2 bg-muted-foreground/10 rounded w-2/3 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card p-5 flex flex-col opacity-0 animate-fade-up hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${0.25 + i * 0.07}s` }}
            >
              <f.icon className="w-7 h-7 text-primary mb-2" />
              <h3 className="text-base font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProductSlide;
