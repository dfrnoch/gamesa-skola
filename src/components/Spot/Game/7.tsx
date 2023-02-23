import { useState } from "react";

const initialState = ["R", "Ch", "I", "Ý", "H", "O", "V", "A", "R", "P", "E", "N", "O", "T"];

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
        <div>
          <div className="flex justify-center items-center gap-10 mt-4 font-semibold">
            <div className="border-2 py-1 px-2 border-dashed ">
              <p className="pl-4 h-10 w-44 rounded-lg bg-lime-600 align-middle border-2">
                {selected.join("")}
              </p>
            </div>
            <button onClick={handleBackspace}>Backspace</button>
          </div>
          <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
            {letters.map((letter) => (
              // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={letter}
                className="flex justify-center items-center gap-10 mt-4 font-semibold"
                onClick={() => handleClick(letter)}
              >
                <div className="border-2 border-dashed p-1 rounded-xl border-lime-600">
                  <div className="text-center px-5 py-2 rounded-lg bg-lime-900">{letter}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
