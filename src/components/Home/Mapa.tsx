import React, { useRef, useEffect, FC } from "react";

interface MapaProps {
  points?: {
    x: number;
    y: number;
    label: string;
  }[];
}

const Mapa: FC<MapaProps> = ({ points }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  // calculate the maximum scroll position based on the size of the map
  const [maxScroll, setMaxScroll] = React.useState(0);
  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      const maxWidth = map.scrollWidth - map.clientWidth;
      setMaxScroll(maxWidth);
    }
  }, [mapRef]);

  // handle swipe events
  let startX: number | undefined;
  let startY: number | undefined;
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    startX = event.touches[0]?.pageX;
    startY = event.touches[0]?.pageY;
  };
  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (startX && startY) {
      const deltaX = startX - event.touches[0]?.pageX!!;
      const deltaY = startY - event.touches[0]?.pageY!!;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (mapRef.current) {
          const map = mapRef.current;
          const scrollLeft = map.scrollLeft + deltaX;
          const clampedScrollLeft = Math.min(Math.max(scrollLeft, 0), maxScroll);
          map.scrollTo(clampedScrollLeft, 0);
          event.preventDefault();
        }
      }
      startX = undefined;
      startY = undefined;
    }
  };
  const handleTouchEnd = () => {
    startX = undefined;
    startY = undefined;
  };

  return (
    <div
      className="h-screen overflow-x-scroll overflow-y-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={mapRef}
    >
      <img
        src="https://media.discordapp.net/attachments/1077141029637066844/1078247421022318622/Kreslici_platno_1.png"
        alt="Map"
        className="block h-full w-auto max-w-none"
      />
      {points?.map((point) => (
        <div
          key={`${point.x},${point.y}`}
          className="absolute bg-red-500 w-4 h-4 rounded-full"
          style={{ top: `${point.y}%`, left: `${point.x}%` }}
        >
          <span className="sr-only">{point.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Mapa;
