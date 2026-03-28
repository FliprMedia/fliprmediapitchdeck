interface MobileMockupProps {
  variant?: "homepage" | "live" | "seller" | "article";
  className?: string;
  style?: React.CSSProperties;
}

const MobileMockup = ({ variant = "homepage", className = "", style }: MobileMockupProps) => {
  const renderContent = () => {
    switch (variant) {
      case "homepage": return <MobileHome />;
      case "live": return <MobileLive />;
      case "seller": return <MobileSeller />;
      case "article": return <MobileArticle />;
      default: return <MobileHome />;
    }
  };

  return (
    <div className={`rounded-[20px] overflow-hidden flex flex-col ${className}`} style={{
      background: 'hsl(240 20% 5%)',
      border: '2px solid hsl(var(--border) / 0.4)',
      boxShadow: '0 20px 50px -8px hsl(0 0% 0% / 0.6), 0 0 30px -8px hsl(var(--primary) / 0.06)',
      ...style
    }}>
      {/* Notch */}
      <div className="h-5 flex items-center justify-center bg-[hsl(240,15%,6%)] border-b border-border/15">
        <div className="w-16 h-1.5 bg-muted-foreground/10 rounded-full" />
      </div>
      {renderContent()}
      {/* Home indicator */}
      <div className="h-4 flex items-center justify-center bg-[hsl(240,15%,6%)] border-t border-border/15">
        <div className="w-20 h-1 bg-muted-foreground/15 rounded-full" />
      </div>
    </div>
  );
};

const MobileHome = () => (
  <div className="flex-1 bg-[hsl(240,20%,4%)] overflow-hidden">
    <div className="px-3 py-2 flex items-center justify-between">
      <div className="text-[10px] font-black"><span className="text-primary">Flipr</span><span className="text-foreground/70">.Media</span></div>
      <div className="flex gap-2">
        <div className="w-4 h-4 rounded bg-muted/20" />
        <div className="w-4 h-4 rounded bg-primary/20" />
      </div>
    </div>
    {/* Hero */}
    <div className="mx-2 rounded-lg h-[70px] relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(240,15%,12%), hsl(260,20%,10%))'
    }}>
      <div className="p-2.5 flex flex-col justify-end h-full">
        <div className="text-[6px] text-primary font-bold mb-0.5">NEWS</div>
        <div className="text-[8px] font-bold text-foreground leading-tight">Whatnot Hits Record $500M GMV</div>
        <div className="text-[6px] text-muted-foreground/50 mt-0.5">Read Story →</div>
      </div>
    </div>
    {/* Articles */}
    <div className="px-2 mt-2 space-y-1.5">
      {["TikTok Shop Changes E-Commerce", "CardCollector99's 6-Figure Journey", "Mercari Cuts Fees to 8%"].map((t, i) => (
        <div key={i} className="flex gap-2 p-1.5 rounded bg-[hsl(240,15%,6%)] border border-border/10">
          <div className="w-8 h-8 rounded bg-muted/15 shrink-0" />
          <div className="flex-1">
            <div className="text-[7px] font-semibold text-foreground/80 leading-tight">{t}</div>
            <div className="text-[5px] text-muted-foreground/30 mt-0.5">6 min read</div>
          </div>
        </div>
      ))}
    </div>
    {/* Live strip */}
    <div className="px-2 mt-2">
      <div className="flex items-center gap-1 mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[6px] font-bold text-primary">LIVE NOW</span>
      </div>
      <div className="flex gap-1.5">
        {["Pokemon Break", "Luxury Bags"].map((s, i) => (
          <div key={i} className="flex-1 rounded bg-[hsl(240,15%,7%)] border border-border/10 p-1.5">
            <div className="text-[6px] font-semibold text-foreground/70">{s}</div>
            <div className="text-[5px] text-primary/50">Watch →</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MobileLive = () => (
  <div className="flex-1 bg-[hsl(240,20%,4%)] overflow-hidden">
    <div className="px-3 py-2 flex items-center justify-between">
      <div className="text-[10px] font-black"><span className="text-primary">Flipr</span><span className="text-foreground/70">.Media</span></div>
      <span className="text-[7px] text-foreground/50 font-medium">Live Shows</span>
    </div>
    <div className="px-2 space-y-1.5">
      {[
        { title: "Pokemon Card Break Night", seller: "CardCollector99", platform: "Whatnot", live: true },
        { title: "Luxury Bag Auction", seller: "LuxeResale", platform: "Poshmark", live: true },
        { title: "K-Beauty Flash Deals", seller: "GlowUpBeauty", platform: "TikTok Shop", live: false },
        { title: "Vintage Comics Hour", seller: "ComicKingdom", platform: "eBay Live", live: false },
      ].map((s, i) => (
        <div key={i} className="p-2 rounded-lg border border-border/10 bg-[hsl(240,15%,6%)]">
          <div className="flex items-center gap-1 mb-1">
            {s.live && <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
            <span className="text-[6px] text-primary font-bold">{s.live ? "LIVE" : "UPCOMING"}</span>
            <span className="text-[5px] text-muted-foreground/30 ml-auto">{s.platform}</span>
          </div>
          <div className="text-[8px] font-semibold text-foreground/80">{s.title}</div>
          <div className="text-[6px] text-muted-foreground/40">{s.seller}</div>
        </div>
      ))}
    </div>
  </div>
);

const MobileSeller = () => (
  <div className="flex-1 bg-[hsl(240,20%,4%)] overflow-hidden">
    <div className="px-3 py-2 flex items-center justify-between">
      <div className="text-[10px] font-black"><span className="text-primary">Flipr</span><span className="text-foreground/70">.Media</span></div>
      <span className="text-[7px] text-foreground/50 font-medium">Seller Profile</span>
    </div>
    <div className="px-3 pt-2">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center">
          <span className="text-[12px] font-bold text-primary">C</span>
        </div>
        <div>
          <div className="text-[10px] font-bold text-foreground">CardCollector99</div>
          <div className="text-[7px] text-primary/60">Verified Seller · Whatnot</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {[{ v: "1.2K", l: "Followers" }, { v: "156", l: "Shows" }, { v: "98%", l: "Rating" }].map(s => (
          <div key={s.l} className="text-center p-1.5 rounded bg-[hsl(240,15%,7%)] border border-border/10">
            <div className="text-[9px] font-bold text-primary">{s.v}</div>
            <div className="text-[5px] text-muted-foreground/40">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="text-[7px] text-muted-foreground/50 mb-2">Trading Cards · Pokemon · Sports Cards</div>
      <div className="text-[7px] font-bold text-foreground mb-1">Upcoming Shows</div>
      <div className="space-y-1">
        {["Pokemon Break Night", "Sports Card Monday", "Vintage Packs Opening"].map((s, i) => (
          <div key={i} className="flex items-center gap-1.5 p-1.5 rounded bg-[hsl(240,15%,6%)] border border-border/10">
            <div className="w-1 h-1 rounded-full bg-primary/50" />
            <span className="text-[7px] text-foreground/70">{s}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MobileArticle = () => (
  <div className="flex-1 bg-[hsl(240,20%,4%)] overflow-hidden">
    <div className="px-3 py-2 flex items-center justify-between">
      <div className="text-[10px] font-black"><span className="text-primary">Flipr</span><span className="text-foreground/70">.Media</span></div>
      <span className="text-[7px] text-foreground/50 font-medium">Article</span>
    </div>
    <div className="mx-2 rounded-lg h-[55px] bg-gradient-to-br from-muted/25 to-muted/10" />
    <div className="px-3 pt-2">
      <div className="text-[6px] text-primary font-bold mb-1">NEWS · 6 MIN READ</div>
      <div className="text-[10px] font-bold text-foreground leading-tight mb-2">Whatnot Hits Record-Breaking $500M GMV in Q1 2026</div>
      <div className="space-y-1.5">
        <div className="h-1.5 bg-foreground/6 rounded w-full" />
        <div className="h-1.5 bg-foreground/6 rounded w-full" />
        <div className="h-1.5 bg-foreground/6 rounded w-[90%]" />
        <div className="h-1.5 bg-foreground/6 rounded w-full" />
        <div className="h-1.5 bg-foreground/6 rounded w-3/4" />
      </div>
      <div className="mt-2 p-1.5 rounded bg-primary/5 border border-primary/10">
        <div className="text-[6px] text-primary font-bold mb-0.5">RELATED</div>
        <div className="text-[7px] text-foreground/60">TikTok Shop Changes E-Commerce →</div>
      </div>
    </div>
  </div>
);

export default MobileMockup;
