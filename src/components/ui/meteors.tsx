import { useMemo } from "react";
import { cn } from "../../lib/utils";

export const Meteors = ({ number = 20, className }: { number?: number; className?: string }) => {
  const meteorItems = useMemo(
    () =>
      Array.from({ length: number }, (_, idx) => {
        const pseudoRand1 = ((idx * 9301 + 49297) % 233280) / 233280;
        const pseudoRand2 = ((idx * 49297 + 9301) % 233280) / 233280;
        const pseudoRand3 = ((idx * 31415 + 27182) % 233280) / 233280;
        return {
          id: idx,
          style: {
            top: 0,
            left: Math.floor(pseudoRand1 * 800 - 400) + "px",
            animationDelay: (pseudoRand2 * 0.6 + 0.2).toFixed(2) + "s",
            animationDuration: Math.floor(pseudoRand3 * 8 + 2) + "s",
          },
        };
      }),
    [number],
  );

  return (
    <>
      {meteorItems.map((item) => (
        <span
          key={"meteor" + item.id}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.9)] rotate-215 z-10",
            "before:content-[''] before:absolute before:top-1/2 before:translate-y-[-50%] before:w-30 before:h-0.5 before:bg-linear-to-r before:from-white/80 before:to-transparent",
            className,
          )}
          style={item.style}
        ></span>
      ))}
    </>
  );
};
