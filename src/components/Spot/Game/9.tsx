import { useState } from "react";
import SelectAnswer from "~/components/SelectAnswer";
import { api } from "~/utils/api";

export default function Third() {
  const checkAnswer = api.spot.checkAnswer9.useMutation();

  const [questions, setQuestions] = useState([
    {
      question: "všechny",
      letter: "A",
    },
    {
      question: "3 měsíce",
      letter: "B",
    },
    {
      question: "2 měsíce",
      letter: "C",
    },
    {
      question: "1 měsíc",
      letter: "D",
    },
  ]);

  const handleSelect = async (letter: string) => {
    const status = await checkAnswer.mutateAsync(letter);

    if (status.correct) {
      window.location.reload();
    } else {
      setQuestions(questions.filter((q) => q.letter !== letter));
    }
  };

  const backgroundImage =
    "https://cdn.discordapp.com/attachments/824638985082634250/1078436320948539452/9bg.jpg";

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-5 flex justify-center font-bold text-black">
        <div className="border-2 border-dashed border-yellow-500 p-1 rounded-xl mx-7">
          <div className=" text-4xl text-center bg-yellow-300 rounded-lg p-3">Kolik měsíců má 28 dní?</div>
        </div>
      </div>

      <div className="mt-2 text-2xl flex justify-center mx-8 text-black">
        <SelectAnswer answers={questions} onSelect={handleSelect} color={"yellow"} />
      </div>
      <div className="flex justify-center">
        <img
          src="https://cdn.discordapp.com/attachments/824638985082634250/1078419067729350716/light_bulb.png"
          alt="logo"
          className="w-40 h-46 mt-4"
        />
      </div>
    </div>
  );
}
