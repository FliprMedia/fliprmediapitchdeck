import SlideLayout from "../SlideLayout";
import { FileText, Users, Database, DollarSign, ArrowRight, Rss, Search, Share2, Handshake, UserPlus } from "lucide-react";

const flywheel = [
  { icon: FileText, label: "Content", desc: "News, profiles, rankings" },
  { icon: Users, label: "Audience", desc: "Sellers, buyers, platforms" },
  { icon: Database, label: "Data", desc: "Engagement, rankings, intel" },
  { icon: DollarSign, label: "Revenue", desc: "Ads, sponsors, premium" },
];

const channels = [
  { icon: Rss, title: "Newsletter", desc: "Daily/weekly industry briefing driving repeat traffic and habit formation" },
  { icon: Search, title: "SEO & Content", desc: "Long-tail search capture: seller reviews, platform comparisons, how-to guides" },
  { icon: Share2, title: "Social & Community", desc: "Presence where sellers already are: TikTok, YouTube, Reddit, Discord" },
  { icon: Handshake, title: "Platform Partnerships", desc: "Co-marketing with Whatnot, eBay, Poshmark for mutual audience growth" },
  { icon: UserPlus, title: "Seller Acquisition", desc: "Direct outreach, seller referral programs, and featured profiles" },
];

const GoToMarketSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

    <div className="relative z-10 flex flex-col h-full px-20 py-16">
      <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">09 — GO-TO-MARKET</div>
      <h2 className="text-[44px] font-bold leading-tight mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        The <span className="text-primary">Media Flywheel</span> Strategy
      </h2>

      <div className="flex gap-8 flex-1">
        {/* Flywheel */}
        <div className="w-[500px] flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            {/* Circular flywheel */}
            <div className="w-[380px] h-[380px] rounded-full border-2 border-dashed border-primary/20 relative">
              {flywheel.map((item, i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180);
                const x = 190 + Math.cos(angle) * 150 - 70;
                const y = 190 + Math.sin(angle) * 150 - 45;
                return (
                  <div
                    key={item.label}
                    className="absolute glass-card p-4 w-[140px] text-center"
                    style={{ left: x, top: y }}
                  >
                    <item.icon className="w-6 h-6 text-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{item.label}</div>
                    <div className="text-[10px] text-muted-foreground">{item.desc}</div>
                  </div>
                );
              })}
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-black text-primary">Flywheel</div>
                  <div className="text-xs text-muted-foreground">Self-reinforcing</div>
                </div>
              </div>
              {/* Arrows */}
              {[0, 1, 2, 3].map(i => {
                const angle = i * 90 * (Math.PI / 180);
                const x = 190 + Math.cos(angle) * 110;
                const y = 190 + Math.sin(angle) * 110;
                return (
                  <div
                    key={i}
                    className="absolute text-primary/40"
                    style={{ left: x - 8, top: y - 8, transform: `rotate(${i * 90 + 45}deg)` }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-xl font-bold text-foreground mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>Growth Channels</h3>
          {channels.map((c, i) => (
            <div
              key={c.title}
              className="glass-card p-5 flex items-start gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.3 + i * 0.07}s` }}
            >
              <c.icon className="w-6 h-6 text-primary mt-0.5 shrink-0" />
              <div>
                <h4 className="text-base font-semibold text-foreground">{c.title}</h4>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default GoToMarketSlide;
