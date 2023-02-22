import React, { useState, ChangeEvent } from "react";
import SelectAnswer from "~/components/SelectAnswer";

export default function Third() {
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
  const [answer, setAnswer] = useState("");

  const handleSelect = (letter: string) => {
    setAnswer(letter);
  };

  return (
    <div className=" bg-black w-screen h-screen text-gray-200">
      <div className="py-10">
        <h1 className=" text-4xl text-center">Co je hlavní součást antivirotik</h1>
      </div>
      <div className="px-10 mt-16 text-2xl flex justify-center">
        <SelectAnswer data={questions} handleSelect={handleSelect} />
      </div>
    </div>
  );
}
