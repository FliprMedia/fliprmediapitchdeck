import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import DesktopMockup from "../mockups/DesktopMockup";
import MobileMockup from "../mockups/MobileMockup";
import { Globe, Newspaper, Mail, DollarSign, Zap } from "lucide-react";

const proofPoints = [
  {
    icon: Globe,
    title: "The site is live",
    desc: "flipr.media is operational today — news, seller coverage, platform pages, and live show discovery all running.",
  },
  {
    icon: Newspaper,
    title: "Content is published",
    desc: "Industry articles, seller spotlights, and platform reporting are already live and indexed.",
  },
  {
    icon: Mail,
    title: "Newsletter is active",
    desc: "A working newsletter on Beehiiv, ready to grow into the daily briefing for the industry.",
  },
  {
    icon: DollarSign,
    title: "Monetization launching",
    desc: "Ad units priced and placed, premium seller modules in build, paid products coming online next.",
  },
];

const TractionSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="top-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">07 — TRACTION</div>
      <h2 className="slide-headline mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Already live.{" "}
        <span className="font-display italic text-[58px] text-primary">Built with minimal capital.</span>
      </h2>
      <p className="text-[19px] text-foreground/85 leading-[1.55] max-w-[1300px] mb-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Most companies at this stage have a deck and a prototype. Flipr Media is a real, operating publication. The core product is shipped, content is published, and monetization is coming online — built solo with very little capital.
      </p>

      <div className="flex flex-1 gap-7 min-h-0">
        {/* Left: Proof points */}
        <div className="flex-1 flex flex-col gap-4">
          {proofPoints.map((point, i) => (
            <div
              key={point.title}
              className="glass-card p-6 flex items-start gap-5 opacity-0 animate-fade-up flex-1 hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-foreground mb-1.5">{point.title}</h3>
                <p className="text-[18px] text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
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

      <div className="mt-5 glass-card p-4 border-primary/15 opacity-0 animate-fade-up" style={{ animationDelay: '0.75s' }}>
        <div className="flex items-center justify-center gap-3">
          <Zap className="w-5 h-5 text-primary shrink-0" />
          <p className="text-[18px] text-muted-foreground text-center">
            <span className="text-foreground font-semibold">Honest read:</span> pre-revenue with a live product, validated positioning, and a clear path to monetization. This raise turns the prototype into an operating business.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TractionSlide;
