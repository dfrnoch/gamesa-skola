import { useState } from "react";
import { toast } from "react-hot-toast";
import SelectAnswer from "~/components/SelectAnswer";
import { api } from "~/utils/api";

export default function Third() {
  const checkAnswer = api.spot.checkAnswer6.useMutation();

  const [questions, setQuestions] = useState([
    {
      question: "karmínová kyselina",
      letter: "A",
    },
    {
      question: "chlorofyl",
      letter: "B",
    },
    {
      question: "jodid draselný",
      letter: "C",
    },
  ]);

  const handleSelect = async (letter: string) => {
    const status = await checkAnswer.mutateAsync(letter);

    if (status.correct) {
      toast.success("Správně!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Špatně!");
      setQuestions(questions.filter((q) => q.letter !== letter));
    }
  };

  const backgroundImage =
    "https://cdn.discordapp.com/attachments/824638985082634250/1078428333789958184/6bg.jpg";

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center font-bold pt-5">
        <div className="border-2 border-dashed border-blue-900 p-1 rounded-xl mx-7">
          <h1 className=" text-4xl text-center bg-blue-500 rounded-xl p-3">Jakou látku obsahuje voda?</h1>
        </div>
      </div>

      <div className="mt-2 text-2xl flex justify-center mx-8">
        <SelectAnswer answers={questions} onSelect={handleSelect} color={"blue"} />
      </div>
      <div className="flex justify-center">
        <img
          src="https://cdn.discordapp.com/attachments/824638985082634250/1078419068891185282/water.png"
          alt="logo"
          className="w-40 h-40 mt-5"
        />
      </div>
    </div>
  );
}
