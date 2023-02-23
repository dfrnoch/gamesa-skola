import { type NextPage } from "next";
import { useState } from "react";
import CodeReader from "~/components/CodeReader";
import Mapa from "~/components/Home/Mapa";
import StartGame from "~/components/Home/StartGame";
import SpotGame from "~/components/Spot";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const getGame = api.game.getGame.useQuery();

  if (getGame.isLoading) {
    return <div>Načítání</div>;
  }

  if (!getGame.data) {
    return <StartGame />;
  }

  return (
    <main className="h-screen w-screen flex-col bg-gray-200">
      {!getGame.data.completedSpot && <SpotGame number={3} />}

      <div className="flex flex-col w-screen h-screen justify-between">
        <Mapa points={getGame.data.points} />
      </div>
    </main>
  );
};

export default Home;
