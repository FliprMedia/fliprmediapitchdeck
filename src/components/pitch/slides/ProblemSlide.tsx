import SlideLayout from "../SlideLayout";
import { AlertTriangle, Search, Users, BarChart3, Megaphone, Shuffle } from "lucide-react";

const painPoints = [
  { icon: Shuffle, title: "Fragmented Information", desc: "Scattered across Reddit, Discord, YouTube, and private groups" },
  { icon: Search, title: "No Discovery Layer", desc: "No way to find live shows, sellers, or trending content" },
  { icon: Users, title: "No Seller Profiles", desc: "Creators have no centralized identity across platforms" },
  { icon: BarChart3, title: "No Data or Rankings", desc: "No industry indexes, benchmarks, or performance data" },
  { icon: Megaphone, title: "No Ad Infrastructure", desc: "Brands can't reach live sellers through any media channel" },
  { icon: AlertTriangle, title: "No Dedicated Press", desc: "No TechCrunch, no Bloomberg, no trade publication for live commerce" },
];

const ProblemSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-destructive/5" />

    <div className="relative z-10 flex h-full">
      {/* Left side */}
      <div className="w-[680px] flex flex-col justify-center pl-20 pr-10">
        <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">02 — THE PROBLEM</div>
        <h2 className="text-[52px] font-bold leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          A $50B+ Industry<br />
          With <span className="text-primary">Zero</span> Dedicated Media
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Live selling is exploding — but there's no central source for news, data, discovery, or intelligence. 
          Sellers, platforms, and brands are flying blind.
        </p>

        {/* Big stat */}
        <div className="mt-10 glass-card p-6 inline-flex items-baseline gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <span className="text-6xl font-black text-primary">0</span>
          <span className="text-xl text-muted-foreground">dedicated media platforms covering live commerce today</span>
        </div>
      </div>

      {/* Right side - pain points grid */}
      <div className="flex-1 flex items-center pr-16">
        <div className="grid grid-cols-2 gap-4 w-full">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className="glass-card p-6 opacity-0 animate-fade-up hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <point.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-1 text-foreground">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default ProblemSlide;
