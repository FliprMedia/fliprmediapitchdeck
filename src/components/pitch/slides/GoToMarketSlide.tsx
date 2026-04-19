import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { FileText, Users, DollarSign, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Publish category-defining content",
    desc: "Industry news, seller interviews, platform coverage, and a daily newsletter that becomes the must-read for the space.",
    color: "primary",
  },
  {
    num: "02",
    icon: Users,
    title: "Attract audience and sellers",
    desc: "Sellers want coverage. Shoppers want discovery. Press wants context. The publication becomes the gravity well of the industry.",
    color: "primary",
  },
  {
    num: "03",
    icon: DollarSign,
    title: "Monetize the audience",
    desc: "Once the audience is concentrated, advertisers, sponsors, and premium seller products turn attention into revenue.",
    color: "accent",
  },
];

const GoToMarketSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="top-left" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">08 — GO-TO-MARKET</div>
      <h2 className="slide-headline mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        A simple three-step{" "}
        <span className="font-display italic text-[58px] text-primary">media flywheel.</span>
      </h2>
      <p className="text-[19px] text-foreground/85 leading-[1.55] max-w-[1300px] mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Every great trade publication followed the same playbook: publish indispensable content, build a loyal audience, then monetize. That is exactly our path — and each step compounds the next.
      </p>

      <div className="flex-1 grid grid-cols-3 gap-6 min-h-0">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`glass-card p-8 flex flex-col opacity-0 animate-fade-up border-${step.color}/15 hover:border-${step.color}/30 transition-colors relative`}
            style={{ animationDelay: `${0.25 + i * 0.12}s` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-[18px] font-mono-brand text-${step.color}/70 tracking-wider`}>{step.num}</span>
              <div className={`h-px flex-1 bg-${step.color}/20`} />
            </div>
            <div className={`w-16 h-16 rounded-2xl bg-${step.color}/10 border border-${step.color}/20 flex items-center justify-center mb-5`}>
              <step.icon className={`w-8 h-8 text-${step.color}`} />
            </div>
            <h3 className="text-[24px] font-bold text-foreground mb-3 leading-tight">{step.title}</h3>
            <p className="text-[18px] text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Loop indicator */}
      <div className="mt-8 flex items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.65s' }}>
        <div className="glass-card px-5 py-3 flex items-center gap-3 border-primary/20">
          <RefreshCw className="w-5 h-5 text-primary" />
          <span className="text-[18px] font-bold text-foreground">More revenue funds more content — the flywheel accelerates.</span>
          <ArrowRight className="w-5 h-5 text-primary/60" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default GoToMarketSlide;
