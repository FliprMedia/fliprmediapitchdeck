import SlideLayout from "../SlideLayout";
import { Check, Minus } from "lucide-react";

const columns = [
  "Live Selling Focus",
  "Cross-Platform",
  "Editorial Credibility",
  "Seller Discovery",
  "Ad Inventory",
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
    <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
    <div className="absolute inset-0 noise-overlay" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[200px]" />

    <div className="relative z-10 flex flex-col h-full px-24 py-14">
      <div className="slide-label mb-3 opacity-0 animate-fade-up">10 — COMPETITIVE LANDSCAPE</div>
      <h2 className="slide-headline mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        Flipr.Media occupies a <span className="font-display italic text-[50px] text-primary">white space.</span>
      </h2>
      <p className="slide-subhead mb-7 max-w-[1000px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        No existing player combines dedicated live selling coverage, cross-platform editorial, seller discovery, and advertiser infrastructure.
      </p>

      {/* Comparison Matrix */}
      <div className="flex-1 glass-card-elevated overflow-hidden opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <table className="w-full h-full">
          <thead>
            <tr className="border-b border-border/40">
              <th className="text-left px-6 py-4 text-[11px] font-mono-brand text-muted-foreground/60 tracking-[0.1em] uppercase w-[280px]">Competitor</th>
              {columns.map(col => (
                <th key={col} className="text-center px-3 py-4 text-[9px] font-mono-brand text-muted-foreground/50 leading-tight tracking-[0.05em] uppercase">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <tr
                key={c.name}
                className={`border-b border-border/15 transition-colors ${
                  c.highlight ? 'bg-primary/[0.06]' : i % 2 === 1 ? 'bg-muted/[0.03]' : ''
                }`}
              >
                <td className={`px-6 py-3 text-[13px] font-semibold ${c.highlight ? 'text-primary' : 'text-foreground/70'}`}>
                  {c.highlight && <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2.5 animate-pulse" />}
                  {c.name}
                </td>
                {c.scores.map((score, j) => (
                  <td key={j} className="text-center px-3 py-3">
                    {score ? (
                      <div className={`w-7 h-7 rounded-lg ${c.highlight ? 'bg-primary/15 border border-primary/25' : 'bg-primary/8 border border-primary/10'} flex items-center justify-center mx-auto`}>
                        <Check className={`w-3.5 h-3.5 ${c.highlight ? 'text-primary' : 'text-primary/60'}`} />
                      </div>
                    ) : (
                      <Minus className="w-3.5 h-3.5 text-muted-foreground/15 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom insight */}
      <div className="mt-4 glass-card p-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <p className="text-[11px] text-muted-foreground leading-relaxed text-center">
          Most alternatives either serve a <span className="text-foreground font-semibold">single platform</span>, sell software, or cover commerce broadly.
          Flipr.Media is positioned to become the <span className="text-primary font-bold">category-defining media brand</span> for live selling — owning editorial, discovery, data, and advertiser access.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default CompetitiveSlide;
