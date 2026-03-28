import SlideLayout from "../SlideLayout";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const milestones = [
  { icon: Zap, title: "Fully Operational Platform", desc: "Complete all core features, data systems, and content workflows" },
  { icon: Users, title: "10K+ Newsletter Subscribers", desc: "Build the most engaged audience in live commerce" },
  { icon: TrendingUp, title: "First Revenue", desc: "Activate advertising, sponsored content, and premium profiles" },
  { icon: Target, title: "Market Position", desc: "Establish Flipr.Media as the definitive source for live commerce news and data" },
];

const TheAskSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
    <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]" />

    <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
      <div className="text-primary font-mono text-sm tracking-widest mb-6 opacity-0 animate-fade-up">17 — THE ASK</div>
      
      <h2 className="text-[56px] font-bold leading-tight text-center mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        We're Raising{" "}
        <span className="text-primary neon-glow">$500,000</span>
      </h2>
      
      <p className="text-2xl text-muted-foreground text-center max-w-[800px] mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        Pre-seed / angel round to take Flipr.Media from proof-of-concept to the category-defining media platform for live commerce.
      </p>

      {/* Terms */}
      <div className="glass-card p-8 mb-10 max-w-[700px] w-full opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-primary">$500K</div>
            <div className="text-sm text-muted-foreground mt-1">Raise Amount</div>
          </div>
          <div>
            <div className="text-3xl font-black text-foreground">SAFE</div>
            <div className="text-sm text-muted-foreground mt-1">Instrument</div>
          </div>
          <div>
            <div className="text-3xl font-black text-accent">12-18mo</div>
            <div className="text-sm text-muted-foreground mt-1">Runway</div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="grid grid-cols-4 gap-4 max-w-[1200px] w-full">
        {milestones.map((m, i) => (
          <div
            key={m.title}
            className="glass-card p-6 text-center opacity-0 animate-fade-up"
            style={{ animationDelay: `${0.4 + i * 0.1}s` }}
          >
            <m.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="text-sm font-bold text-foreground mb-1">{m.title}</h4>
            <p className="text-xs text-muted-foreground">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default TheAskSlide;
