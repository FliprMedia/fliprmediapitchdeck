import SlideLayout from "../SlideLayout";
import { Globe, Palette, Target, Layers, Zap, Code, Newspaper, Users, Radio, BarChart3, Megaphone, ShoppingBag, ArrowRight } from "lucide-react";

const proofPoints = [
  { icon: Globe, title: "Product Progress", desc: "Full site built and live — news, seller coverage, platform pages, newsletter infrastructure, and show discovery all operational" },
  { icon: Palette, title: "Category Validation", desc: "Branding and concept are clear, differentiated, and resonant — no competitor occupies this niche in the market" },
  { icon: Target, title: "Advertiser Relevance", desc: "Advertiser and partner thesis is already forming — brands need access to the live selling creator audience" },
  { icon: Layers, title: "Ecosystem Readiness", desc: "Content architecture and niche positioning are strong — the product demonstrates the category vision visually and strategically" },
  { icon: Zap, title: "Founder Speed", desc: "Built substantially through Lovable-driven rapid execution — proving scrappy, capital-efficient founder capability" },
];

const builtWith = [
  { icon: Newspaper, label: "Industry News Engine" },
  { icon: Users, label: "Seller Spotlights" },
  { icon: Radio, label: "Live Show Discovery" },
  { icon: BarChart3, label: "Platform Coverage" },
  { icon: Megaphone, label: "Newsletter System" },
  { icon: ShoppingBag, label: "Category Pages" },
];

const platforms = ["Whatnot", "TikTok Shop", "eBay Live", "Poshmark", "Instagram Live", "YouTube Shopping", "TalkShopLive"];
const categories = ["Trading Cards", "Fashion", "Beauty", "Collectibles", "Luxury", "Reselling", "Creator Retail"];

const TractionSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-[200px] right-[100px] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[200px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">12 — TRACTION & EARLY PROOF</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Early proof, <span className="font-display italic text-[50px] text-primary">strong category signal.</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Built with minimal capital. Ready to scale with investment.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Proof point cards */}
        <div className="flex-1 flex flex-col gap-2.5">
          {proofPoints.map((point, i) => (
            <div
              key={point.title}
              className="glass-card p-4 flex items-start gap-3 opacity-0 animate-fade-up hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${0.2 + i * 0.06}s` }}
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <point.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-foreground mb-0.5">{point.title}</h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="w-[560px] flex flex-col gap-4">
          {/* What's been built */}
          <div className="glass-card p-5 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-foreground">Built With Minimal Capital</span>
              <div className="ml-auto glass-card px-2 py-0.5 border-primary/20">
                <span className="text-[8px] font-bold text-primary">LOVABLE-POWERED</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {builtWith.map(item => (
                <div key={item.label} className="flex items-center gap-2 bg-muted/20 rounded-lg px-3 py-2">
                  <item.icon className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                  <span className="text-[10px] text-foreground/80 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform coverage */}
          <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-3">Platforms Covered</span>
            <div className="flex flex-wrap gap-2">
              {platforms.map(p => (
                <div key={p} className="glass-card px-3 py-1.5 text-[10px] font-semibold text-foreground/80">{p}</div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.65s' }}>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-3">Categories in Pipeline</span>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <div key={c} className="glass-card px-3 py-1.5 text-[10px] font-semibold text-foreground/80 border-accent/10">{c}</div>
              ))}
            </div>
          </div>

          {/* Pipeline blocks */}
          <div className="grid grid-cols-3 gap-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            {[
              { label: "Advertiser Pipeline", status: "Thesis forming", color: "primary" },
              { label: "Seller Network", status: "Profiles growing", color: "primary" },
              { label: "Category Depth", status: "Expanding", color: "accent" },
            ].map(block => (
              <div key={block.label} className={`glass-card p-3 text-center border-${block.color}/15`}>
                <div className="text-[11px] font-semibold text-foreground mb-0.5">{block.label}</div>
                <div className={`text-[9px] font-medium text-${block.color}`}>{block.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom transparency note */}
      <div className="mt-4 glass-card p-3 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
        <div className="flex items-center justify-center gap-3">
          <Zap className="w-4 h-4 text-primary shrink-0" />
          <p className="text-[11px] text-muted-foreground text-center">
            <span className="text-foreground font-medium">Founder transparency:</span> This is a pre-revenue company with a clear product, strong positioning, and validated category thesis.
            Capital accelerates the path from prototype to fully operational platform.
          </p>
          <ArrowRight className="w-4 h-4 text-primary/40 shrink-0" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TractionSlide;
