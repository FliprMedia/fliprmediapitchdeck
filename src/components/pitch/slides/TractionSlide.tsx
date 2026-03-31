import SlideLayout from "../SlideLayout";
import DesktopMockup from "../mockups/DesktopMockup";
import MobileMockup from "../mockups/MobileMockup";
import { Globe, Palette, Target, Layers, Zap, Code, Newspaper, Users, Radio, BarChart3, Megaphone, ShoppingBag, ArrowRight } from "lucide-react";

const proofPoints = [
  { icon: Globe, title: "Product Is Live", desc: "Operational site with news, seller coverage, platform pages, newsletter, and show discovery" },
  { icon: Palette, title: "Category Position Is Clear", desc: "Brand and concept validated — no competitor occupies this niche" },
  { icon: Target, title: "Advertiser Thesis Forming", desc: "Inbound interest from brands validates demand for this audience" },
  { icon: Layers, title: "Architecture Is Scalable", desc: "Content taxonomy and monetization hooks designed for rapid expansion" },
  { icon: Zap, title: "Capital Efficiency Proven", desc: "Built to this stage with near-zero capital — demonstrating founder execution speed" },
];

const builtWith = [
  { icon: Newspaper, label: "Industry News Engine" },
  { icon: Users, label: "Seller Spotlights" },
  { icon: Radio, label: "Live Show Discovery" },
  { icon: BarChart3, label: "Platform Coverage" },
  { icon: Megaphone, label: "Newsletter System" },
  { icon: ShoppingBag, label: "Category Pages" },
];

const TractionSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-[200px] right-[100px] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[200px]" />

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">12 — TRACTION & EARLY PROOF</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Pre-revenue, <span className="font-display italic text-[54px] text-primary">not pre-product.</span>
      </h2>
      <p className="text-[22px] text-muted-foreground font-medium mb-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        The product is live. The category position is clear. Capital unlocks revenue and scale.
      </p>

      <div className="flex flex-1 gap-6 min-h-0">
        {/* Left: Proof points */}
        <div className="flex-1 flex flex-col gap-2.5">
          {proofPoints.map((point, i) => (
            <div
              key={point.title}
              className="glass-card p-4 flex items-start gap-3.5 opacity-0 animate-fade-up hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${0.2 + i * 0.06}s` }}
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <point.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-foreground mb-0.5">{point.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}

          {/* Built with minimal capital */}
          <div className="glass-card p-4 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-[15px] font-bold text-foreground">Built With Minimal Capital</span>
              <div className="ml-auto glass-card px-2.5 py-0.5 border-primary/20">
                <span className="text-[14px] font-bold text-primary">BOOTSTRAP-POWERED</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {builtWith.map(item => (
                <div key={item.label} className="flex items-center gap-2 bg-muted/20 rounded-lg px-2.5 py-2">
                  <item.icon className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                  <span className="text-[14px] text-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Large site screenshots */}
        <div className="w-[520px] flex flex-col gap-3 opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <DesktopMockup variant="news" className="flex-1" />
          <div className="flex gap-3 h-[200px]">
            <DesktopMockup variant="platforms" className="flex-1" />
            <MobileMockup variant="homepage" className="w-[110px]" />
          </div>
          <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <span className="text-[15px] text-muted-foreground font-mono-brand tracking-wider">LIVE SITE — FLIPR.MEDIA</span>
          </div>
        </div>
      </div>

      {/* Bottom transparency note */}
      <div className="mt-3 glass-card p-3 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
        <div className="flex items-center justify-center gap-3">
          <Zap className="w-4 h-4 text-primary shrink-0" />
          <p className="text-[15px] text-muted-foreground text-center">
            <span className="text-foreground font-semibold">Honest assessment:</span> This is a pre-revenue company with a live product, validated positioning, and a clear path to monetization.
            $200K efficiently bridges the gap from prototype to operating business with disciplined capital deployment.
          </p>
          <ArrowRight className="w-4 h-4 text-primary/40 shrink-0" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TractionSlide;
