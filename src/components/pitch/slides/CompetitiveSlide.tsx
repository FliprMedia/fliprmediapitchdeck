import SlideLayout from "../SlideLayout";

const competitors = [
  { name: "Reddit / Discord", coverage: 2, commerce: 4, data: 1, monetization: 1, dedicated: false },
  { name: "YouTube / TikTok", coverage: 2, commerce: 3, data: 1, monetization: 1, dedicated: false },
  { name: "Generic Tech Press", coverage: 1, commerce: 1, data: 1, monetization: 3, dedicated: false },
  { name: "Platform Blogs", coverage: 2, commerce: 3, data: 2, monetization: 1, dedicated: false },
  { name: "Flipr.Media", coverage: 5, commerce: 5, data: 5, monetization: 4, dedicated: true },
];

const Dot = ({ filled }: { filled: boolean }) => (
  <div className={`w-3 h-3 rounded-full ${filled ? 'bg-primary' : 'bg-muted-foreground/20'}`} />
);

const Rating = ({ value }: { value: number }) => (
  <div className="flex gap-1">
    {[1,2,3,4,5].map(i => <Dot key={i} filled={i <= value} />)}
  </div>
);

const CompetitiveSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

    <div className="relative z-10 flex flex-col h-full px-20 py-16">
      <div className="text-primary font-mono text-sm tracking-widest mb-4 opacity-0 animate-fade-up">10 — COMPETITIVE LANDSCAPE</div>
      <h2 className="text-[44px] font-bold leading-tight mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        No Real <span className="text-primary">Direct Competitor</span> Exists
      </h2>

      <div className="flex gap-8 flex-1">
        {/* Quadrant chart */}
        <div className="w-[520px] flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-[460px] h-[460px]">
            {/* Axes */}
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-border" />
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-border" />
            {/* Labels */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">General Coverage</div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-semibold text-primary">Deep Coverage</div>
            <div className="absolute top-1/2 -left-[90px] -translate-y-1/2 text-xs text-muted-foreground -rotate-90">General Media</div>
            <div className="absolute top-1/2 -right-[100px] -translate-y-1/2 text-xs text-muted-foreground font-semibold text-primary -rotate-90">Commerce-Focused</div>
            
            {/* Competitor dots */}
            <div className="absolute top-[280px] left-[280px] flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-muted-foreground/30" />
              <span className="text-[10px] text-muted-foreground mt-1">Reddit/Discord</span>
            </div>
            <div className="absolute top-[300px] left-[160px] flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-muted-foreground/30" />
              <span className="text-[10px] text-muted-foreground mt-1">YouTube</span>
            </div>
            <div className="absolute top-[150px] left-[100px] flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-muted-foreground/30" />
              <span className="text-[10px] text-muted-foreground mt-1">Tech Press</span>
            </div>
            <div className="absolute top-[220px] left-[300px] flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-muted-foreground/30" />
              <span className="text-[10px] text-muted-foreground mt-1">Platform Blogs</span>
            </div>
            {/* Flipr */}
            <div className="absolute top-[60px] right-[40px] flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-primary animate-pulse-neon flex items-center justify-center">
                <span className="text-[8px] font-bold text-primary-foreground">F</span>
              </div>
              <span className="text-xs text-primary font-bold mt-1">Flipr.Media</span>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="flex-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
          <div className="glass-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Source</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground">Coverage</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground">Commerce</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground">Data</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground">Monetize</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map(c => (
                  <tr key={c.name} className={`border-b border-border/50 ${c.dedicated ? 'bg-primary/5' : ''}`}>
                    <td className={`p-4 text-sm font-medium ${c.dedicated ? 'text-primary' : 'text-foreground'}`}>{c.name}</td>
                    <td className="p-4"><div className="flex justify-center"><Rating value={c.coverage} /></div></td>
                    <td className="p-4"><div className="flex justify-center"><Rating value={c.commerce} /></div></td>
                    <td className="p-4"><div className="flex justify-center"><Rating value={c.data} /></div></td>
                    <td className="p-4"><div className="flex justify-center"><Rating value={c.monetization} /></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default CompetitiveSlide;
