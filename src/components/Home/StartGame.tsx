import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Video from "../Video";

const StartGame: React.FC = () => {
  const { data: sessionData } = useSession();
  const startGame = api.game.startGame.useMutation();

  const start = async () => {
    await startGame.mutateAsync();

    window.location.reload();
  };

  const backgroundImage =
    "https://cdn.discordapp.com/attachments/824638985082634250/1078424824541626408/3bg.jpg";

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-3" />
      <div className="flex flex-col justify-center items-center font-bold ">
        <Video
          url="https://cdn.discordapp.com/attachments/824638985082634250/1078425387631116408/Expozice_video-2.mp4"
          posterUrl="https://media.discordapp.net/attachments/1033457027822923927/1078431275536371763/Screenshot_2023-02-23_at_22.40.13.jpg?width=1100&height=614"
        />
        <div className="border-2 border-dashed border-red-800 p-1 rounded-xl mx-7">
          <h1 className=" text-2xl text-center bg-red-500 rounded-lg p-3">
            Jsi nakažen zombie nákazou. Musíš posbírat všechny ingredience a vyrobit si lék než bude pozdě
            (máš x času na dokončení hry).
          </h1>
        </div>
        <div className="mt-3 flex justify-center font-bold text-2xl border-2 border-dashed border-red-500 rounded-xl p-1 mx-7">
          <div className="text-center  bg-red-800 rounded-lg">
            Vědci chtěli, aby se lék nedostal do špatných rukou a proto tě na tvé cestě čekají i různé
            hádanky.
          </div>
        </div>
        <div className="mt-3 flex justify-center font-bold text-2xl border-2 border-dashed border-red-800 rounded-xl p-1 mx-7">
          <div className="text-center  bg-red-500 rounded-lg p-2">Mnoho štěstí na tvé cestě.</div>
        </div>
        <button
          className="mt-3 rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {!sessionData ? "Přihlásit se" : "Odhlásit se"}
        </button>
      </div>
      <div className="flex justify-center mt-3">
        <div className="border-2 border-red-800 rounded-xl p-1 border-dashed">
          {sessionData && (
            <button
              className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={start}
            >
              Začít hru
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartGame;
