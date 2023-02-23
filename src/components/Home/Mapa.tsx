import React, { useRef, useEffect, FC } from "react";

interface Point {
  x: number;
  y: number;
  label: string;
}

const Mapa: FC = () => {
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

  // custom points
  const points: Point[] = [
    { x: 100, y: 200, label: "Point A" },
    { x: 300, y: 400, label: "Point B" },
    { x: 700, y: 200, label: "Point C" },
  ];

  return (
    <div
      className="h-screen relative overflow-x-scroll overflow-y-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={mapRef}
    >
      <img
        src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
        alt="Map"
        className="block h-full w-auto max-w-none"
      />
      {points.map((point) => (
        <div
          key={`${point.x}-${point.y}`}
          className="absolute bg-red-500 text-white px-2 py-1 rounded-lg"
          style={{ left: point.x, top: point.y }}
        >
          {point.label}
        </div>
      ))}
    </div>
  );
};

export default Mapa;
