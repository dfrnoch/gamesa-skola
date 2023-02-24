import { type NextPage } from "next";
import Mapa from "~/components/Home/Mapa";
import SpotGame from "~/components/Spot";

import dynamic from "next/dynamic";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const getGame = api.game.getGame.useQuery();

  if (getGame.isLoading) {
    return <div>Načítání</div>;
  }

  const StartGame = dynamic(() => import("~/components/Home/StartGame"), { ssr: false });
  if (!getGame.data) {
    return <StartGame />;
  }

  const Leaderboard = dynamic(() => import("~/components/Home/Leaderboard"), { ssr: false });
  if (getGame.data.completed) {
    return <Leaderboard />;
  }

  return (
    <main className="h-screen w-screen flex-col bg-gray-200">
      {!getGame.data.completedSpot && <SpotGame number={1} />}

      <div className="flex flex-col w-screen h-screen justify-between">
        <Mapa points={getGame.data.points} />
      </div>
    </main>
  );
};

export default Home;
