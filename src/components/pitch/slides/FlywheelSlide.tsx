import React from "react";
import SlideLayout from "../SlideLayout";
import {
  Newspaper, Eye, Users, Megaphone, DollarSign,
  Wrench, BarChart3, Shield, UserPlus
} from "lucide-react";

const steps = [
  { icon: Newspaper, label: "Industry\nCoverage", color: "from-emerald-400 to-emerald-500" },
  { icon: Eye, label: "Seller\nVisibility", color: "from-teal-400 to-teal-500" },
  { icon: Users, label: "Audience\nGrowth", color: "from-cyan-400 to-cyan-500" },
  { icon: Megaphone, label: "Advertiser\nInterest", color: "from-blue-400 to-blue-500" },
  { icon: DollarSign, label: "Sponsorship\nRevenue", color: "from-violet-400 to-violet-500" },
  { icon: Wrench, label: "Deeper Content\n& Tools", color: "from-purple-400 to-purple-500" },
  { icon: BarChart3, label: "Stronger\nRankings & Data", color: "from-pink-400 to-pink-500" },
  { icon: Shield, label: "More\nAuthority", color: "from-rose-400 to-rose-500" },
  { icon: UserPlus, label: "More Seller &\nPlatform Participation", color: "from-orange-400 to-orange-500" },
];

const FlywheelSlide: React.FC = () => {
  const cx = 960;
  const cy = 520;
  const radius = 340;
  const nodeRadius = 52;

  return (
    <SlideLayout className="bg-[hsl(240,25%,3%)] text-foreground overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(145,80%,40%,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,hsl(260,60%,50%,0.04)_0%,transparent_50%)]" />
        <div className="absolute inset-0 noise-overlay opacity-[0.03]" />
      </div>

      {/* Headline */}
      <div className="absolute top-[60px] left-0 right-0 text-center z-10">
        <p className="text-[13px] font-mono tracking-[0.3em] uppercase text-primary/70 mb-3">
          Compounding Value Engine
        </p>
        <h1 className="text-[52px] font-display leading-[1.1]">
          The Flipr <span className="italic text-primary">Flywheel</span>
        </h1>
        <p className="text-[17px] text-muted-foreground mt-3 max-w-[700px] mx-auto">
          Each revolution compounds audience, revenue, and category authority — creating a defensible loop competitors can't replicate.
        </p>
      </div>

      {/* SVG Flywheel */}
      <div className="absolute inset-0 z-10">
        <svg viewBox="0 0 1920 1080" className="w-full h-full">
          <defs>
            {/* Rotating arrow path */}
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="hsl(145,80%,45%)" opacity="0.6" />
            </marker>
            {/* Glow filter */}
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="20" />
            </filter>
          </defs>

          {/* Outer glow ring */}
          <circle cx={cx} cy={cy} r={radius + 20} fill="none" stroke="hsl(145,80%,45%)" strokeWidth="1" opacity="0.08" filter="url(#softGlow)" />

          {/* Orbit ring */}
          <circle cx={cx} cy={cy} r={radius} fill="none" stroke="hsl(145,80%,45%)" strokeWidth="1.5" opacity="0.15" strokeDasharray="8 6">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${cx} ${cy}`}
              to={`360 ${cx} ${cy}`}
              dur="60s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Inner decorative ring */}
          <circle cx={cx} cy={cy} r={radius - 80} fill="none" stroke="hsl(145,80%,45%)" strokeWidth="0.5" opacity="0.08" />

          {/* Connection arcs between nodes */}
          {steps.map((_, i) => {
            const angle1 = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
            const angle2 = ((i + 1) / steps.length) * 2 * Math.PI - Math.PI / 2;
            const x1 = cx + Math.cos(angle1) * radius;
            const y1 = cy + Math.sin(angle1) * radius;
            const x2 = cx + Math.cos(angle2) * radius;
            const y2 = cy + Math.sin(angle2) * radius;
            const midAngle = (angle1 + angle2) / 2;
            const bulge = 15;
            const cpx = cx + Math.cos(midAngle) * (radius + bulge);
            const cpy = cy + Math.sin(midAngle) * (radius + bulge);

            return (
              <path
                key={`arc-${i}`}
                d={`M ${x1} ${y1} Q ${cpx} ${cpy} ${x2} ${y2}`}
                fill="none"
                stroke="hsl(145,80%,45%)"
                strokeWidth="2"
                opacity="0.25"
                markerEnd="url(#arrowhead)"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.4;0.1"
                  dur={`${3 + i * 0.3}s`}
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </path>
            );
          })}

          {/* Nodes */}
          {steps.map((step, i) => {
            const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            const labelOutside = radius + 75;
            const lx = cx + Math.cos(angle) * labelOutside;
            const ly = cy + Math.sin(angle) * labelOutside;

            return (
              <g key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                {/* Node glow */}
                <circle cx={x} cy={y} r={nodeRadius + 12} fill="hsl(145,80%,45%)" opacity="0.04" filter="url(#softGlow)">
                  <animate attributeName="opacity" values="0.02;0.06;0.02" dur="4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                </circle>

                {/* Node bg */}
                <circle cx={x} cy={y} r={nodeRadius} fill="hsl(240,20%,8%)" stroke="hsl(145,80%,45%)" strokeWidth="1.5" opacity="0.9">
                  <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                </circle>

                {/* Step number */}
                <text x={x} y={y - 8} textAnchor="middle" fill="hsl(145,80%,60%)" fontSize="11" fontFamily="JetBrains Mono, monospace" opacity="0.5">
                  {String(i + 1).padStart(2, "0")}
                </text>

                {/* Icon placeholder - rendered via foreignObject */}
                <foreignObject x={x - 14} y={y - 2} width="28" height="28">
                  <div className="flex items-center justify-center w-full h-full">
                    <step.icon size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                </foreignObject>

                {/* Label outside the ring */}
                <text x={lx} y={ly} textAnchor="middle" fill="hsl(0,0%,80%)" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="500">
                  {step.label.split("\n").map((line, li) => (
                    <tspan key={li} x={lx} dy={li === 0 ? 0 : 16}>{line}</tspan>
                  ))}
                </text>
              </g>
            );
          })}

          {/* Center emblem */}
          <circle cx={cx} cy={cy} r="60" fill="hsl(240,20%,6%)" stroke="hsl(145,80%,45%)" strokeWidth="1" opacity="0.6" />
          <circle cx={cx} cy={cy} r="58" fill="none" stroke="hsl(145,80%,45%)" strokeWidth="0.5" opacity="0.15" />
          <text x={cx} y={cy - 8} textAnchor="middle" fill="hsl(145,80%,60%)" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="2">
            FLIPR
          </text>
          <text x={cx} y={cy + 12} textAnchor="middle" fill="hsl(0,0%,55%)" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="3">
            FLYWHEEL
          </text>
        </svg>
      </div>

      {/* Bottom insight */}
      <div className="absolute bottom-[50px] left-0 right-0 text-center z-10">
        <div className="glass-card-elevated inline-block px-10 py-4 mx-auto">
          <p className="text-[15px] text-muted-foreground max-w-[680px] leading-relaxed">
            Every piece of content, every seller profiled, every ranking published feeds the next loop —
            <span className="text-primary font-medium"> making Flipr.Media harder to displace with each revolution.</span>
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default FlywheelSlide;
