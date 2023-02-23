import { useState } from "react";
import { api } from "~/utils/api";

const initialState = ["R", "CH", "I", "Ý", "H", "O", "V", "A", "R", "P", "E", "N", "O", "T", "Mezera"];

export default function Seventh() {
  const checkAnswer = api.spot.checkAnswer7.useMutation();

  const [letters, setLetters] = useState(initialState);
  const [selected, setSelected] = useState<string[]>([]);

  async function handleSubmition() {
    const status = await checkAnswer.mutateAsync(selected.join(""));

    if (status.correct) {
      window.location.reload();
    } else {
      handleReset();
    }
  }

  function handleClick(index: number) {
    const letter = letters[index];
    setLetters(letters.filter((_, i) => i !== index));
    if (letter) {
      if (letter === "Mezera") {
        setSelected([...selected, " "]);
      } else {
        setSelected([...selected, letter]);
      }
    }
  }

  function handleReset() {
    setLetters(initialState);
    setSelected([]);
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="border-2 rounded-xl border-lime-800 p-1 border-dashed mt-5 ">
        <div className="pl-4 h-10 w-72 rounded-lg bg-lime-300 align-text-bottom font-bold text-black text-2xl">
          {selected.join("")}
        </div>
      </div>
      <div className="mt-3 mb-5 border-2 p-1 border-lime-600 border-dashed rounded-xl">
        <button
          onClick={handleReset}
          className="text-2xl font-bold rounded-lg bg-lime-300 text-black px-2 py-1"
        >
          Reset
        </button>
      </div>
      <div className=" mb-5 border-2 p-1 border-lime-600 border-dashed rounded-xl">
        <button
          onClick={handleSubmition}
          className="text-2xl font-bold rounded-lg bg-lime-300 text-black px-2 py-1"
        >
          Potvrdit
        </button>
      </div>

      <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
        {letters.map((letter, index) => (
          // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            className="border-2 p-1 rounded-xl border-dashed cursor-pointer mx-1 border-lime-300"
            onClick={() => handleClick(index)}
            key={index + letter}
          >
            <div className="flex flex-row flex-wrap gap-5 items-center justify-center font-semibold">
              <div className="text-center px-5 py-2 rounded-lg bg-lime-800">{letter}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
