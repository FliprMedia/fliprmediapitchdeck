import SlideLayout from "../SlideLayout";
import { ShoppingBag, Eye, Building2, Megaphone } from "lucide-react";

const personas = [
  {
    icon: ShoppingBag,
    title: "Live Sellers & Creators",
    count: "2M+",
    desc: "Full-time and part-time live sellers who need news, discovery, rankings, and tools to grow their businesses",
    color: "text-primary",
    borderColor: "border-primary/20",
  },
  {
    icon: Eye,
    title: "Buyers & Collectors",
    count: "50M+",
    desc: "Enthusiasts who watch, shop, and engage with live selling shows across platforms",
    color: "text-accent",
    borderColor: "border-accent/20",
  },
  {
    icon: Building2,
    title: "Platforms & Industry",
    count: "8+",
    desc: "Live commerce platforms, tech companies, investors, and ecosystem partners tracking the space",
    color: "text-primary",
    borderColor: "border-primary/20",
  },
  {
    icon: Megaphone,
    title: "Brands & Advertisers",
    count: "10K+",
    desc: "Companies wanting to reach live sellers and buyers — the next wave of commerce-focused ad spend",
    color: "text-accent",
    borderColor: "border-accent/20",
  },
];

const AudienceSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/3" />

    <div className="relative z-10 flex flex-col h-full px-20 py-16">
      <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">07 — AUDIENCE & USERS</div>
      <h2 className="text-[48px] font-bold leading-tight mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Four Core Audiences, <span className="text-primary">One Platform</span>
      </h2>
      <p className="text-xl text-muted-foreground mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Every stakeholder in the live commerce ecosystem comes to Flipr.Media for information, discovery, and connection.
      </p>

      <div className="grid grid-cols-4 gap-6 flex-1">
        {personas.map((p, i) => (
          <div
            key={p.title}
            className={`glass-card p-7 flex flex-col ${p.borderColor} opacity-0 animate-fade-up`}
            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
          >
            <p.icon className={`w-10 h-10 ${p.color} mb-4`} />
            <div className={`text-4xl font-black ${p.color} mb-2`}>{p.count}</div>
            <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Funnel */}
      <div className="mt-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-center justify-center gap-2">
          {["Awareness", "Engagement", "Subscription", "Monetization"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="glass-card px-5 py-2 text-sm font-medium text-foreground">{step}</div>
              {i < 3 && <div className="text-primary text-xl">→</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default AudienceSlide;
