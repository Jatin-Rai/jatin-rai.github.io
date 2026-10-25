interface BorderBeamProps {
  className?: string;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  rx?: string | number;
}

export function BorderBeam({
  className = "",
  duration = 6,
  borderWidth = 1.5,
  colorFrom = "#8b5cf6",
  colorTo = "#06b6d4",
  rx = 24,
}: BorderBeamProps) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 w-full h-full rounded-[inherit] z-20 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="border-beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorFrom} stopOpacity="1" />
          <stop offset="50%" stopColor={colorTo} stopOpacity="0.8" />
          <stop offset="100%" stopColor={colorFrom} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        rx={rx}
        fill="none"
        stroke="url(#border-beam-gradient)"
        strokeWidth={borderWidth}
        pathLength="100"
        strokeDasharray="20 80"
        className="animate-border-beam"
        style={{ animationDuration: `${duration}s` }}
      />
    </svg>
  );
}
