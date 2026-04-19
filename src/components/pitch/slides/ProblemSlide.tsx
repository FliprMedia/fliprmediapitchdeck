import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";

const painCards = [
  {
    number: "0",
    headline: "No trade publication",
    body: "Live selling has no Variety, no Billboard, no Ad Age. The category has grown into a real industry with no central voice.",
  },
  {
    number: "12+",
    headline: "Platforms, no scorecard",
    body: "Over a dozen live selling platforms compete for sellers and shoppers. There is no trusted source comparing them or covering the space.",
  },
  {
    number: "7M+",
    headline: "Sellers with no media layer",
    body: "Millions of active live sellers in the US. None of them have an industry publication built for their world.",
  },
  {
    number: "—",
    headline: "No central ad destination",
    body: "Brands and platforms want to reach this audience, but there is no dedicated trade-media brand where ad spend can consistently land.",
  },
];

const ProblemSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="strong" glowPosition="top-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-16">
      <div className="mb-8">
        <div className="slide-label mb-4 opacity-0 animate-fade-up">03 — THE PROBLEM</div>
        <h2 className="slide-headline mb-5 opacity-0 animate-fade-up max-w-[1300px]" style={{ animationDelay: '0.1s' }}>
          A real industry —{" "}
          <span className="font-display italic text-[58px] text-primary">with no media layer.</span>
        </h2>
        <p className="text-[20px] text-foreground/85 leading-[1.55] max-w-[1400px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Live selling is growing fast and reshaping how people shop, but the industry has no trade publication, no central news source, and no media layer connecting sellers, platforms, advertisers, and investors.
        </p>
      </div>

      {/* 2x2 grid of pain cards */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 min-h-0">
        {painCards.map((card, i) => (
          <div
            key={i}
            className="glass-card p-10 flex flex-col justify-center opacity-0 animate-fade-up relative overflow-hidden"
            style={{ animationDelay: `${0.2 + i * 0.08}s` }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
            <div className="flex items-start gap-8">
              <div className="font-display text-[88px] leading-none text-primary shrink-0 min-w-[160px]">
                {card.number}
              </div>
              <div className="flex-1">
                <h3 className="text-[28px] font-bold text-foreground mb-3 leading-tight">{card.headline}</h3>
                <p className="text-[18px] text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing line */}
      <div className="mt-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        <p className="text-[24px] font-bold text-primary text-center leading-snug">
          Every major industry has a trade publication. Live selling does not — yet. That is what Flipr Media is building.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default ProblemSlide;
