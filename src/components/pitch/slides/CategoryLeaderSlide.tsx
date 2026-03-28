import SlideLayout from "../SlideLayout";
import { Shield, Database, Trophy, Megaphone, Heart } from "lucide-react";

const moats = [
  { icon: Shield, title: "Audience Lock-In", desc: "Daily habit through newsletter + discovery" },
  { icon: Database, title: "Proprietary Data", desc: "Rankings, indexes, seller metrics nobody else has" },
  { icon: Trophy, title: "Brand Trust", desc: "Editorial credibility built over time, hard to replicate" },
  { icon: Megaphone, title: "Advertiser Network", desc: "Direct relationships with brands wanting to reach sellers" },
  { icon: Heart, title: "Community", desc: "Seller profiles, engagement, and identity on-platform" },
];

const comparables = [
  { name: "TechCrunch", category: "Startups / VC", outcome: "Acquired by AOL for $30M → Verizon" },
  { name: "The Block", category: "Crypto / Web3", outcome: "Scaled to $60M+ revenue" },
  { name: "The Information", category: "Tech / Business", outcome: "$100M+ valuation, premium model" },
  { name: "Pitchbook", category: "VC / PE Data", outcome: "Acquired by Morningstar for $225M" },
  { name: "Business of Fashion", category: "Fashion Industry", outcome: "$100M+ valuation, events + data" },
];

const CategoryLeaderSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

    <div className="relative z-10 flex h-full px-20 py-16">
      <div className="w-[700px] flex flex-col">
        <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">13 — CATEGORY LEADERSHIP</div>
        <h2 className="text-[40px] font-bold leading-tight mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Why Niche Vertical Media{" "}
          <span className="text-primary">Wins Big</span>
        </h2>

        {/* Moats */}
        <div className="space-y-3 mb-8">
          {moats.map((m, i) => (
            <div
              key={m.title}
              className="glass-card p-4 flex items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.07}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">{m.title}</h4>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            "The most defensible media companies own the attention, data, and advertiser access inside a specific vertical. 
            Flipr.Media is building exactly this for live commerce."
          </p>
        </div>
      </div>

      {/* Comparables */}
      <div className="flex-1 flex flex-col justify-center pl-8">
        <h3 className="text-xl font-bold text-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
          Comparable Success Stories
        </h3>
        <div className="space-y-3">
          {comparables.map((c, i) => (
            <div
              key={c.name}
              className="glass-card p-5 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.4 + i * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-lg font-bold text-foreground">{c.name}</h4>
                <span className="text-xs text-muted-foreground font-mono">{c.category}</span>
              </div>
              <p className="text-sm text-primary">{c.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default CategoryLeaderSlide;
