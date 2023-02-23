interface Props {
  data: {
    letter: string;
    question: string;
  }[];
  color: "red" | "blue" | "green" | "yellow";
  handleSelect: (letter: string) => void;
}

export default function SelectAnswer({ data, handleSelect, color }: Props) {
  return (
    <div>
      {data.map((item) => (
        // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          key={item.letter}
          className="cursor-pointer flex justify-start items-center gap-10 mt-4 font-semibold"
          onClick={() => {
            handleSelect(item.letter);
          }}
        >
          <div
            className={`border-2 border-dashed p-1 rounded-xl
              ${color === "red" && "border-red-800"}
              ${color === "blue" && "border-blue-900"}
              ${color === "green" && "border-green-500"}
              ${color === "yellow" && "border-yellow-500"}
          `}
          >
            <div
              className={`text-center px-5 py-2 rounded-lg
              
              ${color === "red" && "bg-red-800"}
              ${color === "blue" && "bg-blue-900"}
              ${color === "green" && "bg-green-500"}
              ${color === "yellow" && "bg-yellow-500"}
            `}
            >
              {item.letter}
            </div>
          </div>

          <div
            className={`border-2 border-dashed p-1 rounded-xl
              ${color === "red" && "border-red-800"}
              ${color === "blue" && "border-blue-900"}
              ${color === "green" && "border-green-500"}
              ${color === "yellow" && "border-yellow-500"}
          `}
          >
            <div
              className={`text-center px-5 py-2 rounded-lg
              
              ${color === "red" && "bg-red-800"}
              ${color === "blue" && "bg-blue-900"}
              ${color === "green" && "bg-green-500"}
              ${color === "yellow" && "bg-yellow-500"}
            `}
            >
              {item.question}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
