interface Props {
  data: {
    letter: string;
    question: string;
  }[];
  color: Color;
  handleSelect: (letter: string) => void;
}

enum Color {
  RED,
  BLUE,
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
            className={`text-center px-5 py-2 rounded-xl 
              
              ${color ? Color.RED : " bg-red-800" ? Color.BLUE : " bg-blue-700"}
              
              `}
          >
            {item.letter}
          </div>
          <div className="text-center px-5 py-2 rounded-xl">{item.question}</div>
        </div>
      ))}
    </div>
  );
}
