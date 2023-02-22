import { type NextPage } from "next";
import { useState } from "react";
import CodeReader from "~/components/CodeReader";
import Mapa from "~/components/Home/Mapa";
import StartGame from "~/components/Home/StartGame";
import SpotGame from "~/components/Spot";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [openQr, setOpenQr] = useState(false);

  const getGame = api.game.getGame.useQuery();

  if (getGame.isLoading) {
    return <div>Načítání</div>;
  }

  if (!getGame.data) {
    return <StartGame />;
  }

  return (
    <main className="h-screen w-screen flex-col bg-gray-200">
      {!getGame.data.completedSpot && <SpotGame number={getGame.data.currentSpot.number} />}
      {openQr && <CodeReader />}

      <div className="flex flex-col w-screen h-screen">
        <Mapa />
        <button onClick={() => setOpenQr(!openQr)} className="bg-red-300 w-full p-6">
          Otevřít QR
        </button>
      </div>
    </main>
  );
};

export default Home;
