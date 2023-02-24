import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import SelectAnswer from "~/components/SelectAnswer";
import { api } from "~/utils/api";

export default function Third() {
  const checkAnswer = api.spot.checkAnswer3.useMutation();

  const [questions, setQuestions] = useState([
    {
      question: "monohydráty",
      letter: "A",
    },
    {
      question: "serotonin",
      letter: "B",
    },
    {
      question: "ritonavir",
      letter: "C",
    },
    {
      question: "paracetamol",
      letter: "D",
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
      setQuestions(questions.filter((q) => q.letter !== letter));
      toast.error("Špatně!");
    }
  };

  const backgroundImage =
    "https://cdn.discordapp.com/attachments/824638985082634250/1078424824541626408/3bg.jpg";

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-3" />
      <div className="flex justify-center font-bold">
        <div className="border-2 border-dashed border-red-800 p-1 rounded-xl mx-7">
          <h1 className=" text-4xl text-center bg-red-500 rounded-lg p-3">
            Co je hlavní součást antivirotik?
          </h1>
        </div>
      </div>

      <div className="mt-2 text-2xl flex justify-center">
        <SelectAnswer answers={questions} onSelect={handleSelect} color={"red"} />
      </div>
      <div className="flex justify-center">
        <Image
          src="https://cdn.discordapp.com/attachments/824638985082634250/1078419123316477994/icon3.png"
          alt="logo"
          className="w-40 h-40 mt-2 mb-1"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
