import React from "react";
import fliprLogoDark from "@/assets/flipr-logo-dark.png";

interface SlideBackgroundProps {
  /** Controls watermark + glow intensity. "full" for cover/closing, "strong" for section openers, "subtle" for content-heavy slides */
  intensity?: "full" | "strong" | "subtle";
  /** Override glow accent position */
  glowPosition?: "center" | "top-right" | "top-left" | "bottom-right" | "bottom-left";
  children?: React.ReactNode;
}

const SlideBackground: React.FC<SlideBackgroundProps> = ({
  intensity = "subtle",
  glowPosition = "center",
  children,
}) => {
  const watermarkOpacity =
    intensity === "full" ? "opacity-[0.10]" :
    intensity === "strong" ? "opacity-[0.06]" :
    "opacity-[0.035]";

  const watermarkSize =
    intensity === "full" ? "h-[850px]" :
    intensity === "strong" ? "h-[650px]" :
    "h-[500px]";

  const primaryGlowOpacity =
    intensity === "full" ? "bg-primary/[0.08]" :
    intensity === "strong" ? "bg-primary/[0.05]" :
    "bg-primary/[0.03]";

  const accentGlowOpacity =
    intensity === "full" ? "bg-accent/[0.04]" :
    intensity === "strong" ? "bg-accent/[0.03]" :
    "bg-accent/[0.02]";

  const glowPositions: Record<string, string> = {
    "center": "top-[15%] left-1/2 -translate-x-1/2",
    "top-right": "top-[-100px] right-[-50px]",
    "top-left": "top-[-100px] left-[-50px]",
    "bottom-right": "bottom-[-100px] right-[-50px]",
    "bottom-left": "bottom-[-150px] left-[-50px]",
  };

  const accentPositions: Record<string, string> = {
    "center": "bottom-[-200px] left-[-100px]",
    "top-right": "bottom-[-100px] left-[200px]",
    "top-left": "bottom-[-100px] right-[100px]",
    "bottom-right": "top-[-100px] left-[200px]",
    "bottom-left": "top-[-100px] right-[100px]",
  };

  return (
    <>
      {/* Base dark bg */}
      <div className="absolute inset-0 bg-[hsl(240,25%,3%)]" />
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Primary glow */}
      <div className={`absolute ${glowPositions[glowPosition]} w-[900px] h-[600px] rounded-full ${primaryGlowOpacity} blur-[300px]`} />
      
      {/* Accent glow */}
      <div className={`absolute ${accentPositions[glowPosition]} w-[500px] h-[500px] rounded-full ${accentGlowOpacity} blur-[200px]`} />

      {/* Accent line */}
      {intensity !== "subtle" && (
        <div className="absolute top-0 left-[160px] w-px h-[400px] bg-gradient-to-b from-primary/10 via-primary/3 to-transparent" />
      )}

      {/* Ghosted watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <img src={fliprLogoDark} alt="" className={`${watermarkSize} w-auto ${watermarkOpacity}`} />
      </div>

      {children}
    </>
  );
};

export default SlideBackground;
