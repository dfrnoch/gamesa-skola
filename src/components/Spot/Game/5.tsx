import Image from "next/image";
import { SetStateAction, useState } from "react";
import { api } from "~/utils/api";

export default function Fifth() {
  const checkAnswer = api.spot.checkAnswer5.useMutation();
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(false);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setMessage(e.target.value);
  };

  const handleClick = async () => {
    const status = await checkAnswer.mutateAsync(message);

    if (status.correct) {
      window.location.reload();
    } else {
      setCheck(true);
    }
  };

  const backgroundImage =
    "https://cdn.discordapp.com/attachments/824638985082634250/1078473986209497178/5bg.jpg";

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pb-3" />
      <div className="flex justify-center p-1 border-2 border-dashed border-orange-500 rounded-xl mx-10">
        <div className="text-2xl text-black text-center font-bold bg-orange-300 rounded-lg p-2">
          Kde byla tato nákaza poprvé zaznamenaná? (mapa)
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 p-1 flex justify-center border-2 border-dashed border-orange-300 rounded-xl">
          <input
            type="text"
            className="bg-orange-500 p-2 rounded-lg w-60 text-black font-semibold text-xl"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <div className="p-1 border-2 border-orange-300 border-dashed rounded-xl">
          <button onClick={handleClick} className="bg-orange-500 py-1 px-2 rounded-lg text-2xl font-bold">
            Potvrdit
          </button>
        </div>
      </div>
      {check === true && (
        <div className="flex justify-center">
          <div className="flex justify-center mt-3 bordedr-2 border-orange-500 border-2 border-dashed p-1 rounded-xl">
            <div className="bg-orange-300 rounded-lg text-black text-2xl text-center font-bold px-12 py-1">
              Špatně
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <img
          src="https://cdn.discordapp.com/attachments/824638985082634250/1078419067490287616/map.png"
          alt="logo"
          className="mt-10"
        />
      </div>
    </div>
  );
}
