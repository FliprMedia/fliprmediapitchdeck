import React, { useState, useEffect, useCallback } from "react";
import { ScaledSlide } from "./SlideLayout";
import CoverSlide from "./slides/CoverSlide";
import ProblemSlide from "./slides/ProblemSlide";
import WhyNowSlide from "./slides/WhyNowSlide";
import MarketSlide from "./slides/MarketSlide";
import ProductSlide from "./slides/ProductSlide";
import FirstOfKindSlide from "./slides/FirstOfKindSlide";
import AudienceSlide from "./slides/AudienceSlide";
import BusinessModelSlide from "./slides/BusinessModelSlide";
import GoToMarketSlide from "./slides/GoToMarketSlide";
import CompetitiveSlide from "./slides/CompetitiveSlide";
import RoadmapSlide from "./slides/RoadmapSlide";
import TractionSlide from "./slides/TractionSlide";
import CategoryLeaderSlide from "./slides/CategoryLeaderSlide";
import UseOfFundsSlide from "./slides/UseOfFundsSlide";
import RevenueSlide from "./slides/RevenueSlide";
import TeamSlide from "./slides/TeamSlide";
import TheAskSlide from "./slides/TheAskSlide";
import ClosingSlide from "./slides/ClosingSlide";

const slides = [
  CoverSlide, ProblemSlide, WhyNowSlide, MarketSlide, ProductSlide,
  FirstOfKindSlide, AudienceSlide, BusinessModelSlide, GoToMarketSlide,
  CompetitiveSlide, RoadmapSlide, TractionSlide, CategoryLeaderSlide,
  UseOfFundsSlide, RevenueSlide, TeamSlide, TheAskSlide, ClosingSlide,
];

const slideLabels = [
  "Cover", "Problem", "Why Now", "Market", "Product", "First-of-Kind",
  "Audience", "Business Model", "Go-To-Market", "Competitive", "Roadmap",
  "Traction", "Category Leader", "Use of Funds", "Revenue", "Team", "The Ask", "Closing",
];

const PitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning]);

  const next = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "f" || e.key === "F") toggleFullscreen();
      else if (e.key === "Escape" && isFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    };

    const handleFsChange = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, [next, prev, toggleFullscreen, isFullscreen]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-background overflow-hidden select-none">
      {/* Slide Canvas */}
      <div className="absolute inset-0" onClick={(e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (x > rect.width / 2) next(); else prev();
      }}>
        <ScaledSlide key={currentSlide}>
          <div className={`transition-opacity duration-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <CurrentSlideComponent />
          </div>
        </ScaledSlide>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
        <div className="glass-card px-4 py-2 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); goToSlide(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              title={slideLabels[i]}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-4 right-6 z-50 glass-card px-3 py-1.5 text-xs text-muted-foreground font-mono">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Fullscreen Toggle */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
        className="absolute top-4 right-6 z-50 glass-card px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        {isFullscreen ? "ESC" : "F"}
      </button>
    </div>
  );
};

export default PitchDeck;
