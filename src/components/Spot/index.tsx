import dynamic from "next/dynamic";

interface LayoutProps {
  number: number;
}

const gameComponents = [
  dynamic(() => import("./Game/1")),
  dynamic(() => import("./Game/2")),
  dynamic(() => import("./Game/3")),
  dynamic(() => import("./Game/4")),
  dynamic(() => import("./Game/5")),
  dynamic(() => import("./Game/6")),
  dynamic(() => import("./Game/7")),
  dynamic(() => import("./Game/8")),
  dynamic(() => import("./Game/9")),
];

export default function Layout({ number }: LayoutProps) {
  const GameComponent = gameComponents[number - 1];

  return (
    //tady bude jeste nejaky close button
    <div className="z-10 absolute w-screen h-screen bg-black text-gray-200">
      {GameComponent && <GameComponent />}
    </div>
  );
}
