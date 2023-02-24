import { api } from "~/utils/api";

export default function Leaderboard() {
  const gameData = api.game.getLeaderboard.useQuery();

  const playAgain = api.game.playAgain.useMutation();

  const handlePlayAgain = async () => {
    await playAgain.mutateAsync();
    window.location.reload();
  };

  const backgroundImage =
    "https://cdn.discordapp.com/attachments/824638985082634250/1078424824541626408/3bg.jpg";

  return (
    <main
      className="w-screen h-screen bg-black text-white flex justify-start items-center flex-col bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-3" />
      <div className="border-2 border-dashed border-red-800 p-1 rounded-xl mx-7">
        <h1 className=" text-2xl text-center bg-red-500 rounded-lg p-1">Vyhrál jsi</h1>
      </div>

      <div className="border-2 border-dashed border-red-800 p-1 rounded-xl mx-7 mt-3">
        <div className="bg-red-500 rounded-lg p-1">
          <h1 className=" text-2xl text-center ">Žebříček</h1>
          <table className="table-auto mt-5">
            {gameData.data?.map((game) => (
              <tr>
                <td className="border px-4 py-2">{game.user.name}</td>
                <td className="border px-4 py-2">{secToTime(game.gameTime)}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>

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
