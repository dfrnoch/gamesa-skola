import Image from "next/image";
import React, { useRef, useEffect, FC, useState } from "react";
import CodeReader from "../CodeReader";

interface Point {
  x: number;
  y: number;
  label: string;
  active?: boolean;
}

interface MapaProps {
  points?: Point[];
}

const Mapa: FC<MapaProps> = ({ points }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [openReader, setOpenReader] = useState<boolean>(false);

  useEffect(() => {
    const activePoints = points?.filter((point) => point.active);

    if (activePoints && activePoints.length > 0) {
      const nearestActivePointX = activePoints.reduce((prev, curr) => (prev.x < curr.x ? prev : curr));

      // Scroll to the nearest active point
      if (imageRef.current) {
        imageRef.current.scroll({
          left: nearestActivePointX.x - imageRef.current.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [points]);

  return (
    <>
      {openReader && <CodeReader onClose={() => setOpenReader(false)} />}
      <div className="h-screen overflow-x-scroll overflow-y-hidden relative" ref={imageRef}>
        <Image
          src="https://media.discordapp.net/attachments/1077141029637066844/1078247421022318622/Kreslici_platno_1.png"
          alt="Map"
          className="block h-full w-[2200px] max-w-none"
          width={2200}
          height={1080}
        />
        {points?.map((point) => (
          // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            key={point.label + point.x + point.y}
            onClick={() => point.active && setOpenReader(true)}
            className={`absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 ${
              point.active ? "text-white" : "text-gray-500"
            }`}
            style={{
              top: `${point.y}%`,
              left: `${point.x}px`,
            }}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <div className="text-xs text-center">{point.label}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mapa;
