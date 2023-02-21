import { type NextPage } from "next";
import { useState } from "react";
import StartGame from "~/components/Home/StartGame";
import SpotGame from "~/components/Spot";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [openGame, setOpenGame] = useState(true);

  const getGame = api.game.getGame.useQuery();

  if (getGame.isLoading) {
    return <div>Načítání</div>;
  }

  if (!getGame.data) {
    return <StartGame />;
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center bg-gray-700">
      {openGame && <SpotGame number={getGame.data.currentSpot.number} />}

      <div className="border-[5px] border-warm-gray-50 w-screen h-screen">Prihlasen</div>
    </main>
  );
};

export default Home;
