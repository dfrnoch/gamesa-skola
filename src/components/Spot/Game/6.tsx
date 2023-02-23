import { useState } from "react";
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
      window.location.reload();
    } else {
      setQuestions(questions.filter((q) => q.letter !== letter));
    }
  };

  return (
    <>
      <div className="mt-5 flex justify-center font-bold">
        <div className="border-2 border-dashed border-blue-900 p-1 rounded-xl mx-7">
          <h1 className=" text-4xl text-center bg-blue-500 rounded-xl p-3">Jakou látku obsahuje voda?</h1>
        </div>
      </div>

      <div className="mt-2 text-2xl flex justify-center mx-8">
        <SelectAnswer data={questions} handleSelect={handleSelect} color={"blue"} />
      </div>
      <div className="flex justify-center">
        <img src="" alt="logo" className="pl-4 w-40 h-40 border-gray-200 border-4 mt-5 rounded-xl" />
      </div>
    </>
  );
}
