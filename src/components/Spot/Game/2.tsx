import React, { useState, ChangeEvent } from "react";
import SelectAnswer from "~/components/SelectAnswer";

export default function Third() {
  const [questions, setQuestions] = useState([
    {
      question: "Co je hlavní součást antivirotik",
      letter: "A",
    },
    {
      question: "Co ssffadcadcwad",
      letter: "B",
    },
  ]);
  const [answer, setAnswer] = useState("");

  const handleSelect = (letter: string) => {
    setAnswer(letter);
  };

  return (
    <div className=" bg-gray-700 w-screen h-screen text-gray-200">
      <div className="py-10">
        <h1 className=" text-4xl text-center">Co je hlavní součást antivirotik</h1>
      </div>
      <div className="px-20 mt-16 text-3xl">
        <SelectAnswer data={questions} handleSelect={handleSelect} />
      </div>
      odpoved: {answer}
    </div>
  );
}
