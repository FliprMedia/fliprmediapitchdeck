import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import DesktopMockup from "../mockups/DesktopMockup";
import MobileMockup from "../mockups/MobileMockup";
import { Newspaper, Radio, Megaphone, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Newspaper,
    title: "Media",
    desc: "Industry news, seller spotlights, platform coverage, and a daily newsletter — the editorial backbone of the category.",
  },
  {
    icon: Radio,
    title: "Discovery",
    desc: "A central place to find the best sellers, live shows, and platforms — the front door to live selling for shoppers and the press.",
  },
  {
    icon: Megaphone,
    title: "Advertiser Access",
    desc: "The only media property that reaches live sellers, shoppers, and platforms at scale — opening up sponsorship and ad dollars.",
  },
  {
    icon: BarChart3,
    title: "Rankings & Data",
    desc: "Seller rankings, category benchmarks, and intelligence products — becoming the trusted scorecard for the industry.",
  },
];

const ProductSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="top-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">05 — WHY FLIPR</div>
      <h2 className="slide-headline mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        We build the media brand first —{" "}
        <span className="font-display italic text-[58px] text-primary">then everything around it.</span>
      </h2>
      <p className="text-[19px] text-foreground/85 leading-[1.55] max-w-[1300px] mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Trade publications win by becoming the trusted voice of an industry — and then expanding into discovery, rankings, advertising, and data. That is exactly the path Flipr Media is built for. The publication is live today. Each layer above compounds the next.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: mockups */}
        <div className="w-[480px] flex flex-col gap-3 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <DesktopMockup variant="homepage" className="flex-1" />
          <div className="flex gap-3 h-[180px]">
            <MobileMockup variant="seller" className="w-[100px]" />
            <DesktopMockup variant="newsletter" className="flex-1" />
            <MobileMockup variant="live" className="w-[100px]" />
          </div>
        </div>

        {/* Right: 4 pillars */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="glass-card p-6 flex flex-col opacity-0 animate-fade-up hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-3">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-[22px] font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-[17px] text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProductSlide;
