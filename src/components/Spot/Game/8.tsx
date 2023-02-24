import Image from "next/image";
import { SetStateAction, useState } from "react";
import { api } from "~/utils/api";

const backgroundImage =
  "https://cdn.discordapp.com/attachments/824638985082634250/1078424824541626408/3bg.jpg";

export default function Eight() {
  const checkAnswer = api.spot.checkAnswer8.useMutation();
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

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-3" />
      <div className="flex justify-center">
        <Image
          src="https://cdn.discordapp.com/attachments/824638985082634250/1078599257717747743/abcd_Title.png"
          alt="logo"
          className="scale-125 mt-5 mb-1"
          width={200}
          height={200}
        />
      </div>

      <div className="flex justify-center mt-3">
        <div className="mt-3 p-1 flex justify-center border-2 border-dashed border-pink-300 rounded-xl">
          <input
            type="text"
            className="bg-pink-200 p-2 rounded-lg w-60 text-black font-semibold text-xl"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center mt-3 bordedr-2 border-pink-300 border-2 border-dashed p-1 rounded-xl">
          <button
            onClick={handleClick}
            className="bg-pink-200 rounded-lg text-black text-2xl text-center font-bold p-2"
          >
            Potvrdit
          </button>
        </div>
      </div>

      {check === true && (
        <div className="flex justify-center">
          <div className="flex justify-center mt-3 bordedr-2 border-pink-200 border-2 border-dashed p-1 rounded-xl">
            <div className="bg-pink-300 rounded-lg text-black text-2xl text-center font-bold px-12 py-1">
              Špatně
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-16">
        <Image
          src="https://cdn.discordapp.com/attachments/824638985082634250/1078600948194217994/abcd_Text.png"
          alt="logo"
          className="scale-125 mt-2 mb-1"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
