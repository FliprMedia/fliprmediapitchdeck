import SlideLayout from "../SlideLayout";
import SlideBackground from "../SlideBackground";

const painCards = [
  {
    number: "7M+",
    headline: "Sellers with no voice",
    body: "Over 7 million active live sellers in the US alone — and not a single publication covering their industry.",
  },
  {
    number: "$0",
    headline: "Ad spend with nowhere to go",
    body: "Brands want to reach live sellers but there is no media property that reaches this audience at scale. The money has nowhere to go.",
  },
  {
    number: "12+",
    headline: "Platforms, no scorecard",
    body: "There are over 12 active live selling platforms in the US. Sellers have no trusted source to compare them or know which is right for their business.",
  },
  {
    number: "0",
    headline: "Trade publications for this industry",
    body: "Every major industry has a trade publication. Live selling does not have one. That is the entire opportunity.",
  },
];

const ProblemSlide = () => (
  <SlideLayout>
    <SlideBackground intensity="strong" glowPosition="top-right" />

    <div className="relative z-10 flex flex-col h-full px-24 py-16">
      <div className="mb-8">
        <div className="slide-label mb-4 opacity-0 animate-fade-up">02 — THE PROBLEM</div>
        <h2 className="slide-headline mb-5 opacity-0 animate-fade-up max-w-[1300px]" style={{ animationDelay: '0.1s' }}>
          Millions of sellers.{" "}
          <span className="font-display italic text-[58px] text-primary">Zero trade press.</span>
        </h2>
        <p className="text-[20px] text-foreground/85 leading-[1.55] max-w-[1400px] opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Imagine the film industry with no Variety. The music industry with no Billboard. Advertising with no Ad Age. That is exactly the situation in live selling today. It is a multi-hundred-billion dollar global industry and there is not a single dedicated trade publication covering it.
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
