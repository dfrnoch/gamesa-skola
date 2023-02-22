import { useState, useEffect } from "react";
import SelectAnswer from "~/components/SelectAnswer";
import { api } from "~/utils/api";

export default function Third() {
  const checkAnswer = api.spot.checkAnswer2.useMutation();

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

    if (status) {
      window.location.reload();
    } else {
      setQuestions(questions.filter((q) => q.letter !== letter));
    }
  };

  return (
    <>
      <div className="py-10">
        <h1 className=" text-4xl text-center">Co je hlavní součást antivirotik</h1>
      </div>
      <div className="px-10 mt-16 text-2xl flex justify-center">
        <SelectAnswer data={questions} handleSelect={handleSelect} />
      </div>
    </>
  );
}
