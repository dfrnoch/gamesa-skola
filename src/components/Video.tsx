import React, { useRef, useState } from "react";

interface VideoProps {
  url: string;
  posterUrl: string;
}

const Video: React.FC<VideoProps> = ({ url, posterUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  const handlePlay = () => {
    setPlaying(true);
    if (!loaded) {
      videoRef.current?.load();
      setLoaded(true);
    }
    videoRef.current?.play();
  };

  const handleEnded = () => {
    setPlaying(false);
  };

  return (
    <div className="relative">
      <video ref={videoRef} className="w-full h-full object-cover" poster={posterUrl} onEnded={handleEnded}>
        <source src={url} />
      </video>
      {!playing && (
        // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
          onClick={handlePlay}
        >
          <svg
            className="w-12 h-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Video;
