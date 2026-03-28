import SlideLayout from "../SlideLayout";
import { Globe, FileText, Mail, Users, Code, Zap } from "lucide-react";

const stats = [
  { icon: Globe, value: "Live", label: "Site Launched", desc: "flipr.media is live and publishing" },
  { icon: FileText, value: "50+", label: "Articles Published", desc: "Original reporting and coverage" },
  { icon: Mail, value: "500+", label: "Newsletter Subs", desc: "Growing organically, no paid spend" },
  { icon: Users, value: "25+", label: "Seller Profiles", desc: "Across Whatnot, TikTok, eBay" },
  { icon: Code, value: "100%", label: "Vibe-Coded", desc: "Built primarily in Lovable" },
  { icon: Zap, value: "$0", label: "Marketing Spend", desc: "All organic traction so far" },
];

const TractionSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

    <div className="relative z-10 flex flex-col h-full px-20 py-16">
      <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">12 — TRACTION & EARLY PROOF</div>
      <h2 className="text-[44px] font-bold leading-tight mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Already Live. Already <span className="text-primary">Building Audience.</span>
      </h2>
      <p className="text-xl text-muted-foreground mb-10 max-w-[800px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        Built from scratch using "vibe coding" in Lovable — proving the concept with minimal capital. Now ready to scale with investment.
      </p>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="glass-card p-8 flex flex-col items-center text-center opacity-0 animate-fade-up hover:border-primary/30 transition-all"
            style={{ animationDelay: `${0.2 + i * 0.08}s` }}
          >
            <s.icon className="w-10 h-10 text-primary mb-4" />
            <div className="text-5xl font-black text-primary mb-2">{s.value}</div>
            <div className="text-lg font-semibold text-foreground mb-1">{s.label}</div>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Built with Lovable badge */}
      <div className="mt-6 flex justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
        <div className="glass-card px-6 py-3 flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Built with</span>
          <span className="text-lg font-bold text-foreground">Lovable</span>
          <span className="text-sm text-muted-foreground">— proving vibe coding can build real media products</span>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TractionSlide;
