import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import DesktopMockup from "../mockups/DesktopMockup";
import MobileMockup from "../mockups/MobileMockup";
import { Globe, Palette, Target, Layers, Zap, Code, Newspaper, Users, Radio, BarChart3, Megaphone, ShoppingBag, ArrowRight } from "lucide-react";

const proofPoints = [
  { icon: Globe, title: "Product Is Live", desc: "Operational site with news, seller coverage, platform pages, newsletter, and show discovery" },
  { icon: Palette, title: "Category Position Is Clear", desc: "Brand and concept validated — no competitor occupies this niche" },
  { icon: Target, title: "Advertiser Thesis Forming", desc: "Inbound interest from brands validates demand for this audience" },
  { icon: Layers, title: "Architecture Is Scalable", desc: "Content taxonomy and monetization hooks designed for rapid expansion" },
  { icon: Zap, title: "Capital Efficiency Proven", desc: "Built to this stage with near-zero capital — demonstrating founder execution" },
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
    <SlideBackground intensity="subtle" glowPosition="top-right" />

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">12 — TRACTION & EARLY PROOF</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Already live. Already working. <span className="font-display italic text-[58px] text-primary">Built on near-zero capital.</span>
      </h2>
      <p className="text-[17px] text-foreground/85 leading-[1.55] max-w-[1200px] mb-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Most companies at this stage have a pitch deck and a prototype. Flipr Media has a fully operational publication with 8 published articles, 9 active ad units, 15 priced ad placements, a working newsletter on Beehiiv, seller profiles, eBay integration, Google Analytics, Search Console, sitemap, RSS feed, and Stripe launching June 1. <span className="text-primary font-semibold">Built by one founder with minimal capital.</span>
      </p>

      <div className="flex flex-1 gap-6 min-h-0">
        {/* Left: Proof points */}
        <div className="flex-1 flex flex-col gap-3">
          {proofPoints.map((point, i) => (
            <div
              key={point.title}
              className="glass-card p-5 flex items-start gap-4 opacity-0 animate-fade-up hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${0.2 + i * 0.06}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-foreground mb-0.5">{point.title}</h3>
                <p className="text-[17px] text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}

          {/* Built with minimal capital */}
          <div className="glass-card p-5 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-center gap-2.5 mb-2.5">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-[17px] font-bold text-foreground">Built With Minimal Capital</span>
              <div className="ml-auto glass-card px-3 py-1 border-primary/20">
                <span className="text-[15px] font-bold text-primary">BOOTSTRAP-POWERED</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {builtWith.map(item => (
                <div key={item.label} className="flex items-center gap-2.5 bg-muted/20 rounded-lg px-3 py-2.5">
                  <item.icon className="w-4 h-4 text-primary/70 shrink-0" />
                  <span className="text-[15px] text-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Screenshots */}
        <div className="w-[520px] flex flex-col gap-3 opacity-0 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <DesktopMockup variant="news" className="flex-1" />
          <div className="flex gap-3 h-[200px]">
            <DesktopMockup variant="platforms" className="flex-1" />
            <MobileMockup variant="homepage" className="w-[110px]" />
          </div>
          <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <span className="text-[16px] text-muted-foreground font-mono-brand tracking-wider">LIVE SITE — FLIPR.MEDIA</span>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-3 glass-card p-4 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
        <div className="flex items-center justify-center gap-3">
          <Zap className="w-5 h-5 text-primary shrink-0" />
          <p className="text-[17px] text-muted-foreground text-center">
            <span className="text-foreground font-semibold">Honest assessment:</span> Pre-revenue with a live product, validated positioning, and a clear monetization path.
            $250K bridges the gap from prototype to operating business.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TractionSlide;