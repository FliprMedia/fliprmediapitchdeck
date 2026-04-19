import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";
import { Video, MessageCircle, ShoppingCart, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Video,
    title: "A seller goes live on video",
    desc: "Hosts broadcast in real time — showing products, telling stories, demoing items, and running auctions.",
  },
  {
    icon: MessageCircle,
    title: "Shoppers watch and interact",
    desc: "Viewers chat, ask questions, place bids, and react live. It feels closer to a show than a storefront.",
  },
  {
    icon: ShoppingCart,
    title: "They buy in the moment",
    desc: "Checkout happens inside the stream. No carts, no waiting — entertainment and commerce in one experience.",
  },
  {
    icon: Sparkles,
    title: "An entire industry has formed",
    desc: "Sellers, platforms, agencies, and brands now make a living inside this category. It is real, growing, and maturing fast.",
  },
];

const platforms = [
  "TikTok Shop", "Whatnot", "eBay Live", "Amazon Live",
  "Poshmark Live", "YouTube Shopping", "Instagram Live", "TalkShopLive",
];

const WhatIsLiveSellingSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="subtle" glowPosition="top-left" />

    <div className="relative z-10 flex flex-col h-full px-24 py-16">
      <div className="mb-8">
        <div className="slide-label mb-4 opacity-0 animate-fade-up">02 — WHAT IS LIVE SELLING?</div>
        <h2 className="slide-headline mb-5 opacity-0 animate-fade-up max-w-[1300px]" style={{ animationDelay: '0.1s' }}>
          A new way to shop —{" "}
          <span className="font-display italic text-[58px] text-primary">live, social, and in real time.</span>
        </h2>
        <p className="text-[20px] text-foreground/85 leading-[1.55] max-w-[1400px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Live selling is the merger of QVC-style shopping with social media. Sellers go live on video, shoppers watch and chat, and purchases happen inside the stream. It is commerce, entertainment, creators, and community — all at once.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5 mb-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="glass-card p-6 flex flex-col opacity-0 animate-fade-up"
            style={{ animationDelay: `${0.2 + i * 0.08}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-[20px] font-bold text-foreground mb-2 leading-tight">{step.title}</h3>
            <p className="text-[16px] text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
        <div className="text-[15px] font-mono-brand text-muted-foreground tracking-[0.18em] uppercase mb-3 font-semibold">
          Where it happens
        </div>
        <div className="flex flex-wrap gap-2.5">
          {platforms.map((p) => (
            <span key={p} className="px-5 py-2.5 rounded-full bg-primary/8 border border-primary/15 text-[16px] font-semibold text-foreground">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.65s' }}>
        <p className="text-[22px] font-bold text-primary text-center leading-snug">
          A real industry — with real revenue, real careers, and no trade publication covering it.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default WhatIsLiveSellingSlide;
