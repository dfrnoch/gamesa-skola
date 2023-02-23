import { useState } from "react";

const initialState = ["a", "b", "c", "d", "e", "f", "g"];

export default function Seventh() {
  const [letters, setLetters] = useState(initialState);
  const [selected, setSelected] = useState<string[]>([]);

  function handleClick(letter: string) {
    setSelected([...selected, letter]);
    setLetters(letters.filter((l) => l !== letter));
  }

  function handleBackspace() {
    if (selected.length === 0) return;

    const lastLetter = selected[selected.length - 1];
    setSelected(selected.filter((l) => l !== lastLetter));
    if (typeof lastLetter === "string") {
      setLetters([...letters, lastLetter]);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
          {letters.map((letter) => (
            // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              key={letter}
              className="flex justify-center items-center gap-10 mt-4 font-semibold"
              onClick={() => handleClick(letter)}
            >
              <div className="border-2 border-dashed p-1 rounded-xl border-red-800">
                <div className="text-center px-5 py-2 rounded-lg bg-red-800">{letter}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-10 mt-4 font-semibold">
          <div className="border-2 border-dashed p-">
            <div className="text-center px-5 py-2 rounded-lg bg-red-800">{selected.join("")}</div>
          </div>
          <button onClick={handleBackspace}>Backspace</button>
        </div>
      </div>
    </>
  );
}
