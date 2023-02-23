import { useState } from "react";

const initialState = ["R", "CH", "I", "Ý", "H", "O", "V", "A", "R", "P", "E", "N", "O", "T"];

export default function Seventh() {
  const [letters, setLetters] = useState(initialState);
  const [selected, setSelected] = useState<string[]>([]);

  function handleClick(index: number) {
    const letter = letters[index];
    setLetters(letters.filter((_, i) => i !== index));
    if (letter) {
      setSelected([...selected, letter]);
    }
  }

  function handleReset() {
    setLetters(initialState);
    setSelected([]);
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <button onClick={handleReset}>Reset</button>
      <p className="pl-4 h-10 w-44 rounded-lg bg-lime-600 align-middle border-2">{selected.join("")}</p>
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
        {letters.map((letter, index) => (
          // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            className="border-2 py-1 px-2 border-dashed cursor-pointer"
            onClick={() => handleClick(index)}
            key={index + letter}
          >
            <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
              <div className="text-center px-5 py-2 rounded-lg bg-red-800">{letter}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
