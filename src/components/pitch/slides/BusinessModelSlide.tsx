import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { Megaphone, Star, BarChart3 } from "lucide-react";

const buckets = [
  {
    num: "01",
    icon: Megaphone,
    title: "Advertising & Sponsorships",
    tag: "Recurring",
    desc: "Display ads, sponsored newsletter placements, sponsored articles, and branded content. The proven trade publication revenue engine.",
    items: ["Display advertising", "Newsletter sponsorships", "Sponsored articles", "Featured placements"],
  },
  {
    num: "02",
    icon: Star,
    title: "Premium Seller Products",
    tag: "Recurring + Transactional",
    desc: "Premium seller profiles, verified badges, and featured live show listings — paid by sellers who want visibility.",
    items: ["Premium seller profiles", "Verified seller badges", "Featured show listings", "Promotional packages"],
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Data & Intelligence",
    tag: "Future High-Margin",
    desc: "Rankings, category reports, seller benchmarks, and subscription intelligence products for brands and agencies.",
    items: ["Industry rankings", "Category reports", "Seller analytics", "Subscription intel products"],
  },
];

const BusinessModelSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="bottom-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">06 — BUSINESS MODEL</div>
      <h2 className="slide-headline mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        How Flipr Media{" "}
        <span className="font-display italic text-[58px] text-primary">makes money.</span>
      </h2>
      <p className="text-[19px] text-foreground/85 leading-[1.55] max-w-[1300px] mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Think about how trade publications make money — advertising, sponsorships, and subscriptions. That is exactly how Flipr Media makes money.
      </p>
      <p className="text-[19px] text-foreground/85 leading-[1.55] max-w-[1300px] mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.18s' }}>
        We are not inventing a new business model. <span className="text-primary font-semibold">We are applying a proven 100-year-old model to a market that does not have one yet.</span>
      </p>

      <div className="flex-1 grid grid-cols-3 gap-6 min-h-0">
        {buckets.map((b, i) => (
          <div
            key={b.num}
            className="glass-card p-7 flex flex-col opacity-0 animate-fade-up hover:border-primary/30 transition-colors"
            style={{ animationDelay: `${0.25 + i * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-[16px] font-mono-brand text-primary/70 tracking-wider">{b.num}</span>
            </div>
            <h3 className="text-[26px] font-bold text-foreground mb-2 leading-tight">{b.title}</h3>
            <span className="inline-block self-start text-[14px] px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold mb-4 font-mono-brand tracking-wider uppercase">
              {b.tag}
            </span>
            <p className="text-[17px] text-muted-foreground leading-relaxed mb-5">{b.desc}</p>
            <div className="mt-auto flex flex-col gap-2.5 pt-4 border-t border-border/30">
              {b.items.map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span className="text-[16px] text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        <p className="text-[20px] font-bold text-primary text-center leading-snug">
          As the audience grows, every revenue stream grows with it.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default BusinessModelSlide;
