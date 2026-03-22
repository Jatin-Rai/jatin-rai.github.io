import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<number[]>([]);

  useEffect(() => {
    setMeteors(new Array(number).fill(0));
  }, [number]);

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-[2px] w-[2px] rounded-[9999px] bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.9)] rotate-215 z-10",
            "before:content-[''] before:absolute before:top-1/2 before:-translate-y-[50%] before:w-[120px] before:h-[2px] before:bg-linear-to-r before:from-white/80 before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
