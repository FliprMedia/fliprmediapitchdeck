import { Monitor } from "lucide-react";

interface DesktopMockupProps {
  variant?: "homepage" | "news" | "platforms" | "sellers" | "newsletter";
  className?: string;
  style?: React.CSSProperties;
}

const DesktopMockup = ({ variant = "homepage", className = "", style }: DesktopMockupProps) => {
  const renderContent = () => {
    switch (variant) {
      case "homepage":
        return <HomepageContent />;
      case "news":
        return <NewsContent />;
      case "platforms":
        return <PlatformsContent />;
      case "sellers":
        return <SellersContent />;
      case "newsletter":
        return <NewsletterContent />;
      default:
        return <HomepageContent />;
    }
  };

  return (
    <div className={`rounded-2xl overflow-hidden flex flex-col ${className}`} style={{
      background: 'linear-gradient(145deg, hsl(240 20% 8% / 0.95), hsl(240 20% 5% / 0.9))',
      border: '1px solid hsl(var(--border) / 0.5)',
      boxShadow: '0 25px 80px -12px hsl(0 0% 0% / 0.7), 0 0 60px -8px hsl(var(--primary) / 0.08)',
      ...style
    }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30 bg-[hsl(240,15%,8%)]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-3 flex-1 h-7 rounded-lg bg-[hsl(240,10%,12%)] flex items-center px-4 border border-border/20">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-primary/30" />
            <span className="text-[11px] text-muted-foreground/60 font-mono-brand">flipr.media</span>
          </div>
        </div>
        <Monitor className="w-3.5 h-3.5 text-muted-foreground/20" />
      </div>
      {renderContent()}
    </div>
  );
};

const SiteNav = () => (
  <div className="flex items-center justify-between px-5 py-3 border-b border-border/15">
    <div className="flex items-center gap-2">
      <div className="text-base font-black">
        <span className="text-primary">Flipr</span>
        <span className="text-foreground/80">.Media</span>
      </div>
    </div>
    <div className="flex gap-5 text-[10px] text-muted-foreground/50 font-medium tracking-wide">
      <span className="text-foreground/70">News</span>
      <span>Platforms</span>
      <span>Categories</span>
      <span>Artists</span>
      <span>Rankings</span>
      <span>Guides</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="px-2 py-1 rounded bg-primary/15 text-[8px] text-primary font-bold">Newsletter</div>
      <div className="px-2 py-1 rounded bg-primary text-[8px] text-background font-bold">Sign Up</div>
    </div>
  </div>
);

const HomepageContent = () => (
  <div className="flex-1 bg-[hsl(240,20%,4%)]">
    <SiteNav />
    {/* Hero article */}
    <div className="mx-4 mt-4 rounded-xl overflow-hidden relative h-[160px]" style={{
      background: 'linear-gradient(135deg, hsl(240,15%,12%), hsl(260,20%,10%))',
      border: '1px solid hsl(var(--border) / 0.15)'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(240,15%,6%)] via-transparent to-transparent" />
      <div className="relative p-5 flex flex-col justify-end h-full">
        <div className="px-2 py-0.5 rounded bg-primary/20 text-[7px] text-primary font-bold w-fit mb-2">NEWS</div>
        <div className="text-[14px] font-bold text-foreground leading-tight mb-1">Whatnot Hits Record-Breaking $500M GMV in Q1 2026</div>
        <div className="text-[9px] text-muted-foreground/60">The live auction platform continues to dominate with explosive growth</div>
        <div className="mt-2 px-3 py-1 rounded-full bg-primary text-[8px] text-background font-semibold w-fit">Read Story →</div>
      </div>
    </div>
    {/* Article grid */}
    <div className="px-4 mt-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold text-foreground">Latest Articles</span>
        <span className="text-[8px] text-primary">All Articles →</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { tag: "Trends", title: "The Rise of TikTok Shop: How Live Selling Changed E-Commerce", color: "accent" },
          { tag: "Spotlight", title: "How CardCollector99 Built a 6-Figure Live Selling Business", color: "primary" },
          { tag: "News", title: "Mercari Slashes Seller Fees to 8% in Bold Market Move", color: "primary" },
        ].map((a, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-border/15 bg-[hsl(240,15%,7%)]">
            <div className="h-[50px] bg-gradient-to-br from-muted/30 to-muted/10" />
            <div className="p-2.5">
              <div className={`text-[6px] font-bold text-${a.color} mb-1`}>{a.tag}</div>
              <div className="text-[8px] font-semibold text-foreground/80 leading-tight line-clamp-2">{a.title}</div>
              <div className="text-[7px] text-muted-foreground/40 mt-1">6 min read</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Platform Watch */}
    <div className="px-4 mt-4 pb-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold text-foreground">Platform Watch</span>
        <span className="text-[8px] text-primary">All Platforms →</span>
      </div>
      <div className="flex gap-2">
        {["Whatnot", "TikTok Shop", "eBay Live", "Poshmark"].map((p, i) => (
          <div key={i} className="flex-1 rounded-lg border border-border/15 bg-[hsl(240,15%,7%)] p-2.5 text-center">
            <div className="w-6 h-6 rounded-lg bg-primary/10 mx-auto mb-1.5 flex items-center justify-center">
              <span className="text-[8px] font-bold text-primary">{p[0]}</span>
            </div>
            <div className="text-[8px] font-semibold text-foreground/80">{p}</div>
            <div className="text-[6px] text-muted-foreground/40 mt-0.5">Live Now: —</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const NewsContent = () => (
  <div className="flex-1 bg-[hsl(240,20%,4%)]">
    <SiteNav />
    <div className="px-5 pt-5 pb-4">
      <div className="text-[13px] font-bold text-foreground mb-1">Industry News</div>
      <div className="text-[9px] text-muted-foreground/50 mb-4">Breaking coverage across all live selling platforms</div>
      <div className="space-y-3">
        {[
          { tag: "NEWS", title: "Whatnot Hits Record-Breaking $500M GMV in Q1 2026", desc: "The live auction platform continues to dominate", time: "2h ago" },
          { tag: "TRENDS", title: "TikTok Shop: How Live Selling Changed E-Commerce", desc: "Reaching $20B in global GMV", time: "5h ago" },
          { tag: "SPOTLIGHT", title: "CardCollector99 Built a 6-Figure Live Selling Business", desc: "From hobby to full-time career on Whatnot", time: "1d ago" },
          { tag: "NEWS", title: "Mercari Slashes Seller Fees to 8% in Bold Market Move", desc: "Could reshape the resale marketplace landscape", time: "1d ago" },
          { tag: "ANALYSIS", title: "Live Selling Market Intelligence Report — Q1 2026", desc: "The data behind the surge in livestream commerce", time: "2d ago" },
        ].map((a, i) => (
          <div key={i} className="flex gap-3 items-start p-2.5 rounded-lg border border-border/10 bg-[hsl(240,15%,6%)] hover:border-primary/20 transition-colors">
            <div className="w-[60px] h-[42px] rounded bg-gradient-to-br from-muted/25 to-muted/10 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[6px] font-bold text-primary">{a.tag}</span>
                <span className="text-[6px] text-muted-foreground/30">{a.time}</span>
              </div>
              <div className="text-[9px] font-semibold text-foreground/85 leading-tight">{a.title}</div>
              <div className="text-[7px] text-muted-foreground/40 mt-0.5">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PlatformsContent = () => (
  <div className="flex-1 bg-[hsl(240,20%,4%)]">
    <SiteNav />
    <div className="px-5 pt-5 pb-4">
      <div className="text-[13px] font-bold text-foreground mb-1">Platform Watch</div>
      <div className="text-[9px] text-muted-foreground/50 mb-4">Latest updates from major live selling platforms</div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { name: "Whatnot", status: "Record-breaking sales days", color: "#00DC82" },
          { name: "TikTok Shop", status: "Live shopping GMV growing rapidly", color: "#ff0050" },
          { name: "eBay Live", status: "Collectibles category surging", color: "#e53238" },
          { name: "Poshmark", status: "Posh Shows expanding globally", color: "#7f0353" },
          { name: "Mercari", status: "New seller tools launching soon", color: "#4dc9f6" },
          { name: "Amazon Live", status: "Updates coming soon", color: "#ff9900" },
        ].map((p, i) => (
          <div key={i} className="rounded-lg border border-border/15 bg-[hsl(240,15%,7%)] p-3">
            <div className="w-8 h-8 rounded-lg mb-2 flex items-center justify-center" style={{ background: `${p.color}15` }}>
              <span className="text-[10px] font-black" style={{ color: p.color }}>{p.name[0]}</span>
            </div>
            <div className="text-[9px] font-bold text-foreground/80 mb-0.5">{p.name}</div>
            <div className="text-[7px] text-muted-foreground/40 leading-relaxed">{p.status}</div>
            <div className="mt-2 text-[7px] text-primary font-medium">View Platform →</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SellersContent = () => (
  <div className="flex-1 bg-[hsl(240,20%,4%)]">
    <SiteNav />
    <div className="px-5 pt-5 pb-4">
      <div className="text-[13px] font-bold text-foreground mb-1">Featured Sellers</div>
      <div className="text-[9px] text-muted-foreground/50 mb-4">Top live selling creators and their upcoming shows</div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "CardCollector99", platform: "Whatnot", category: "Trading Cards", shows: "12 shows/week" },
          { name: "LuxeResale", platform: "Poshmark", category: "Luxury Fashion", shows: "8 shows/week" },
          { name: "GlowUpBeauty", platform: "TikTok Shop", category: "K-Beauty", shows: "Daily streams" },
          { name: "VintageVault", platform: "eBay Live", category: "Collectibles", shows: "5 shows/week" },
        ].map((s, i) => (
          <div key={i} className="rounded-lg border border-border/15 bg-[hsl(240,15%,7%)] p-3 flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/15 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-primary">{s.name[0]}</span>
            </div>
            <div>
              <div className="text-[9px] font-bold text-foreground/85">{s.name}</div>
              <div className="text-[7px] text-primary/60 font-medium">{s.platform}</div>
              <div className="text-[7px] text-muted-foreground/40 mt-0.5">{s.category} · {s.shows}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Upcoming Lives */}
      <div className="mt-4">
        <div className="text-[10px] font-bold text-foreground mb-2">Upcoming Lives</div>
        <div className="space-y-1.5">
          {[
            { title: "Pokemon Card Break Night", seller: "CardCollector99", platform: "Whatnot", time: "Today 8:00 PM" },
            { title: "Luxury Bag Auction", seller: "LuxeResale", platform: "Poshmark", time: "Today 9:00 PM" },
            { title: "K-Beauty LIVE — New Arrivals", seller: "GlowUpBeauty", platform: "TikTok Shop", time: "Tomorrow 7:00 PM" },
          ].map((l, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded bg-[hsl(240,15%,6%)] border border-border/10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[8px] font-semibold text-foreground/80">{l.title}</div>
                <div className="text-[6px] text-muted-foreground/40">{l.seller} · {l.platform}</div>
              </div>
              <span className="text-[6px] text-primary/60 font-medium shrink-0">{l.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const NewsletterContent = () => (
  <div className="flex-1 bg-[hsl(240,20%,4%)]">
    <SiteNav />
    <div className="px-5 pt-5 pb-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 rounded bg-primary/15 flex items-center justify-center">
          <span className="text-[8px] text-primary">✉</span>
        </div>
        <div className="text-[13px] font-bold text-foreground">The Flipr Daily</div>
      </div>
      <div className="text-[9px] text-muted-foreground/50 mb-4">Stay ahead of live selling. Get daily updates on platforms, featured sellers, trends, and scams.</div>
      
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mb-4">
        <div className="text-[10px] font-bold text-foreground mb-2">Subscribe to the Flipr Daily</div>
        <div className="flex gap-2">
          <div className="flex-1 h-7 rounded-lg bg-[hsl(240,15%,10%)] border border-border/20 flex items-center px-3">
            <span className="text-[8px] text-muted-foreground/30">you@email.com</span>
          </div>
          <div className="px-4 h-7 rounded-lg bg-primary flex items-center">
            <span className="text-[8px] font-bold text-background">Get the Flipr Daily</span>
          </div>
        </div>
        <div className="text-[7px] text-muted-foreground/30 mt-2">No spam. Unsubscribe anytime.</div>
      </div>

      <div className="text-[10px] font-bold text-foreground mb-2">Recent Editions</div>
      <div className="space-y-2">
        {[
          "Monday Briefing: Whatnot's record Q1, TikTok Shop expansion, and new seller tools",
          "Weekend Recap: Top live shows, biggest sales, and trending categories",
          "Thursday Intel: Platform fee changes, creator spotlights, and market data",
        ].map((e, i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded bg-[hsl(240,15%,6%)] border border-border/10">
            <div className="text-[7px] text-primary/40 font-mono-brand w-6 shrink-0">#{i + 42}</div>
            <div className="text-[8px] text-foreground/70 font-medium">{e}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DesktopMockup;
