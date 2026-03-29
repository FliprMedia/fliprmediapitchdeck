import React, { useEffect, useRef, useState } from "react";
import fliprLogo from "@/assets/flipr-logo-light.png";

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
  hideLogo?: boolean;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = "", hideLogo = false }) => {
  return (
    <div className={`relative w-[1920px] h-[1080px] overflow-hidden ${className}`}>
      {children}
      {/* Persistent brand logo — top right header */}
      {!hideLogo && (
        <div className="absolute top-7 right-10 z-50">
          <img src={fliprLogo} alt="Flipr.Media" className="h-[40px] w-auto opacity-80" />
        </div>
      )}
    </div>
  );
};

interface ScaledSlideProps {
  children: React.ReactNode;
  className?: string;
}

export const ScaledSlide: React.FC<ScaledSlideProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const scaleX = parent.clientWidth / 1920;
          const scaleY = parent.clientHeight / 1080;
          setScale(Math.min(scaleX, scaleY));
        }
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 flex items-center justify-center ${className}`}>
      <div
        style={{
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
