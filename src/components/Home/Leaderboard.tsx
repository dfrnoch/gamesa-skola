import { api } from "~/utils/api";

export default function Leaderboard() {
  const gameData = api.game.getLeaderboard.useQuery();

  const playAgain = api.game.playAgain.useMutation();

  const handlePlayAgain = async () => {
    await playAgain.mutateAsync();
    window.location.reload();
  };

  return (
    <main className="w-screen h-screen bg-black text-white flex justify-start items-center flex-col ">
      <h1 className="text-4xl mt-3">Zebricek</h1>
      <table className="table-auto mt-5">
        {gameData.data?.map((game) => (
          <tr>
            <td className="border px-4 py-2">{game.user.name}</td>
            <td className="border px-4 py-2">{secToTime(game.gameTime)}</td>
          </tr>
        ))}
      </table>
      <div className="flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-5"
          onClick={handlePlayAgain}
        >
          Hrát znova
        </button>
      </div>
    </main>
  );
}

const secToTime = (sec: number | null) => {
  if (sec === null) return "00:00:00";
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - hours * 3600) / 60);
  const seconds = sec - hours * 3600 - minutes * 60;

  return `${hours}:${minutes}:${seconds}`;
};
