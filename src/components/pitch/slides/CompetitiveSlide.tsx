import SlideLayout from "../SlideLayout";
import { Check, Minus } from "lucide-react";

const columns = [
  "Dedicated to Live Selling",
  "Cross-Platform Coverage",
  "Editorial Credibility",
  "Seller Discovery",
  "Advertiser Inventory",
  "Rankings & Data",
  "Category Brand",
];

const competitors = [
  { name: "Flipr.Media", highlight: true, scores: [true, true, true, true, true, true, true] },
  { name: "General Ecommerce Media", highlight: false, scores: [false, true, true, false, true, false, false] },
  { name: "Creator Economy Newsletters", highlight: false, scores: [false, false, true, false, false, false, false] },
  { name: "Platform Seller Communities", highlight: false, scores: [true, false, false, true, false, false, false] },
  { name: "Marketplace Blogs", highlight: false, scores: [false, false, false, false, false, false, false] },
  { name: "Social Trend Pages", highlight: false, scores: [false, false, false, false, false, false, false] },
  { name: "Seller Tools / SaaS", highlight: false, scores: [false, false, false, true, false, true, false] },
  { name: "Agencies / Consultants", highlight: false, scores: [false, false, false, false, true, false, false] },
];

const CompetitiveSlide = () => (
  <SlideLayout>
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />

    <div className="relative z-10 flex flex-col h-full px-20 py-14">
      {/* Header */}
      <div className="text-primary font-mono text-sm tracking-widest mb-3 opacity-0 animate-fade-up">10 — COMPETITIVE LANDSCAPE</div>
      <h2 className="text-[42px] font-bold leading-tight mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Flipr.Media occupies a <span className="text-primary">white space.</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-6 max-w-[1000px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        No existing player combines dedicated live selling coverage, cross-platform editorial, seller discovery, and advertiser infrastructure.
      </p>

      {/* Comparison Matrix */}
      <div className="flex-1 glass-card overflow-hidden opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <table className="w-full h-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-5 py-3 text-[12px] font-semibold text-muted-foreground w-[260px]">Competitor</th>
              {columns.map(col => (
                <th key={col} className="text-center px-2 py-3 text-[10px] font-semibold text-muted-foreground leading-tight">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <tr
                key={c.name}
                className={`border-b border-border/30 transition-colors ${
                  c.highlight
                    ? 'bg-primary/8'
                    : i % 2 === 1
                    ? 'bg-muted/5'
                    : ''
                }`}
              >
                <td className={`px-5 py-2.5 text-[13px] font-semibold ${c.highlight ? 'text-primary' : 'text-foreground/80'}`}>
                  {c.highlight && <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />}
                  {c.name}
                </td>
                {c.scores.map((score, j) => (
                  <td key={j} className="text-center px-2 py-2.5">
                    {score ? (
                      <div className={`w-6 h-6 rounded-full ${c.highlight ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mx-auto`}>
                        <Check className={`w-3.5 h-3.5 ${c.highlight ? 'text-primary' : 'text-primary/70'}`} />
                      </div>
                    ) : (
                      <Minus className="w-3.5 h-3.5 text-muted-foreground/25 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom insight */}
      <div className="mt-4 glass-card p-4 border-primary/20 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <p className="text-[12px] text-muted-foreground leading-relaxed text-center">
          Most alternatives either serve a <span className="text-foreground font-medium">single platform</span>, sell software, or cover commerce broadly.
          Flipr.Media is positioned to become the <span className="text-primary font-bold">category-defining media brand</span> for live selling — owning editorial, discovery, data, and advertiser access across the entire ecosystem.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default CompetitiveSlide;
