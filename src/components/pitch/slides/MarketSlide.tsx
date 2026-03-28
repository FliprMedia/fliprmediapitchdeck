import SlideLayout from "../SlideLayout";

const platforms = [
  "Whatnot", "TikTok Shop", "eBay Live", "Poshmark", 
  "Instagram Live", "YouTube Shopping", "TalkShopLive", "Amazon Live"
];

const MarketSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

    <div className="relative z-10 flex h-full">
      <div className="w-[700px] flex flex-col justify-center pl-20 pr-10">
        <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">04 — MARKET OPPORTUNITY</div>
        <h2 className="text-[48px] font-bold leading-tight mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Massive TAM,{" "}
          <span className="text-primary">Zero Competition</span>
        </h2>

        {/* TAM/SAM/SOM */}
        <div className="relative w-[400px] h-[400px] mx-auto opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          {/* TAM */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 flex items-start justify-center pt-8">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">TAM</div>
              <div className="text-2xl font-bold text-primary">$50B+</div>
              <div className="text-xs text-muted-foreground">Live Commerce GMV</div>
            </div>
          </div>
          {/* SAM */}
          <div className="absolute inset-[60px] rounded-full border-2 border-accent/30 flex items-start justify-center pt-8">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">SAM</div>
              <div className="text-2xl font-bold text-accent">$2B+</div>
              <div className="text-xs text-muted-foreground">Media & Ad Spend</div>
            </div>
          </div>
          {/* SOM */}
          <div className="absolute inset-[130px] rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">SOM</div>
              <div className="text-2xl font-bold text-primary">$50M+</div>
              <div className="text-xs text-muted-foreground">Year 1-3 Target</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col justify-center pr-16 gap-6">
        {/* Key stats */}
        <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {[
            { num: "$50B+", label: "Global Live Commerce GMV", sub: "Growing 30%+ YoY" },
            { num: "2M+", label: "Active Live Sellers", sub: "US alone" },
            { num: "500M+", label: "Live Commerce Viewers", sub: "Monthly globally" },
            { num: "$0", label: "Dedicated Media Spend", sub: "Industry-specific" },
          ].map(s => (
            <div key={s.label} className="glass-card p-5">
              <div className="text-3xl font-black text-primary">{s.num}</div>
              <div className="text-sm font-medium text-foreground mt-1">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="glass-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <div className="text-sm text-muted-foreground mb-3 font-medium">Platforms We Cover</div>
          <div className="flex flex-wrap gap-2">
            {platforms.map(p => (
              <span key={p} className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground border border-border">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default MarketSlide;
