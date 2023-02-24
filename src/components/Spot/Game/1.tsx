import { api } from "~/utils/api";

export default function First() {
  const query = api.spot.checkAnswer1.useMutation();

  const handleClick = async () => {
    const data = await query.mutateAsync();
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
      </div>
      <div className="flex justify-center mt-3">
        <div className="border-2 border-red-800 rounded-xl p-1 border-dashed">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleClick}
          >
            Rozumím
          </button>
        </div>
      </div>
    </div>
  );
}
