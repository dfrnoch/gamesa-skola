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
                ? "border-red-500 "
                : color === "blue"
                ? "border-blue-500"
                : color === "green"
                ? "border-green-300"
                : "border-yellow-300"
            }`}
          >
            <div
              className={`text-center px-5 py-2 rounded-lg ${
                color === "red"
                  ? "bg-red-800"
                  : color === "blue"
                  ? "bg-blue-900"
                  : color === "green"
                  ? "bg-green-600"
                  : "bg-yellow-500"
              }`}
            >
              {letter}
            </div>
          </div>

          <div
            className={`border-2 border-dashed p-1 rounded-xl ${
              color === "red"
                ? "border-red-500"
                : color === "blue"
                ? "border-blue-500"
                : color === "green"
                ? "border-green-300"
                : "border-yellow-300"
            }`}
          >
            <div
              className={`text-center px-5 py-2 rounded-lg ${
                color === "red"
                  ? "bg-red-800"
                  : color === "blue"
                  ? "bg-blue-900"
                  : color === "green"
                  ? "bg-green-600"
                  : "bg-yellow-500"
              }`}
            >
              {question}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
