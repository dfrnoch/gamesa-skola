import { api } from "~/utils/api";

export default function Leaderboard() {
  const gameData = api.game.getLeaderboard.useQuery();

  return (
    <main className="w-screen h-screen bg-white text-black ">
      <h1 className="text-4xl">Zebricek</h1>
      <div className="flex flex-col gap-3">
        {gameData.data?.map((item) => (
          <div className="flex flex-row gap-3">
            <div className="flex flex-col">
              <div className="text-2xl">name</div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl">timos</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-5">
          Hrát znova
        </button>
      </div>
    </main>
  );
}
