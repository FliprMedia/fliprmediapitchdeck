import SlideLayout from "../SlideLayout";
import { User, Briefcase, Plus } from "lucide-react";

const TeamSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/3" />

    <div className="relative z-10 flex flex-col h-full px-20 py-16">
      <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">16 — TEAM & FOUNDER</div>
      <h2 className="text-[44px] font-bold leading-tight mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Built by a <span className="text-primary">Founder Who Lives the Space</span>
      </h2>

      <div className="flex gap-8 flex-1">
        {/* Founder card */}
        <div className="w-[600px] glass-card p-10 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
              <User className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Founder & CEO</h3>
              <p className="text-lg text-primary">Flipr.Media</p>
              <p className="text-sm text-muted-foreground mt-2">
                Deep domain expertise in live selling, media, and digital commerce. Active participant in the live commerce ecosystem.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-4 bg-primary/5">
              <h4 className="text-sm font-semibold text-primary mb-1">Domain Expertise</h4>
              <p className="text-sm text-muted-foreground">
                Active live seller, buyer, and community member across Whatnot, eBay Live, and TikTok Shop. 
                Deep understanding of seller pain points, platform dynamics, and market gaps.
              </p>
            </div>
            <div className="glass-card p-4 bg-accent/5">
              <h4 className="text-sm font-semibold text-accent mb-1">Built with Lovable</h4>
              <p className="text-sm text-muted-foreground">
                Leveraged "vibe coding" to build and launch Flipr.Media from scratch — demonstrating resourcefulness, 
                speed, and the ability to ship product without traditional engineering resources.
              </p>
            </div>
            <div className="glass-card p-4">
              <h4 className="text-sm font-semibold text-foreground mb-1">Vision</h4>
              <p className="text-sm text-muted-foreground">
                Building the definitive media and intelligence platform for live commerce — the TechCrunch + Bloomberg 
                + PitchBook of a $50B+ and rapidly growing industry.
              </p>
            </div>
          </div>
        </div>

        {/* Future team */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-foreground mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Key Hires (Post-Funding)
          </h3>
          {[
            { role: "Head of Content", desc: "Experienced media editor to lead editorial operations and build the newsroom" },
            { role: "Full-Stack Engineer", desc: "Scale the platform beyond Lovable — build data infrastructure, APIs, and tools" },
            { role: "Growth Lead", desc: "Drive newsletter, SEO, social, and partnership growth strategies" },
            { role: "Ad Sales Lead", desc: "Build advertiser relationships and launch monetization programs" },
          ].map((hire, i) => (
            <div
              key={hire.role}
              className="glass-card p-5 flex items-start gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.35 + i * 0.08}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Plus className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground">{hire.role}</h4>
                <p className="text-sm text-muted-foreground">{hire.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default TeamSlide;
