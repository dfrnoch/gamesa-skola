interface Answer {
  letter: string;
  question: string;
}

interface Props {
  answers: Answer[];
  color: "red" | "blue" | "green" | "yellow";
  onSelect: (letter: string) => void;
}

export default function SelectAnswer({ answers, onSelect, color }: Props) {
  return (
    <div>
      {answers.map(({ letter, question }) => (
        // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          key={letter}
          className="cursor-pointer flex justify-start items-center gap-10 mt-4 font-semibold"
          onClick={() => onSelect(letter)}
        >
          <div
            className={`border-2 border-dashed p-1 rounded-xl ${
              color === "red"
                ? "border-red-800 bg-red-800"
                : color === "blue"
                ? "border-blue-900 bg-blue-900"
                : color === "green"
                ? "border-green-500 bg-green-500"
                : "border-yellow-500 bg-yellow-500"
            }`}
          >
            <div className="text-center px-5 py-2 rounded-lg">{letter}</div>
          </div>

          <div
            className={`border-2 border-dashed p-1 rounded-xl ${
              color === "red"
                ? "border-red-800 bg-red-800"
                : color === "blue"
                ? "border-blue-900 bg-blue-900"
                : color === "green"
                ? "border-green-500 bg-green-500"
                : "border-yellow-500 bg-yellow-500"
            }`}
          >
            <div className="text-center px-5 py-2 rounded-lg">{question}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
