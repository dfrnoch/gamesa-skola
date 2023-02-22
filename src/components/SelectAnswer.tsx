interface Props {
  data: {
    letter: string;
    question: string;
  }[];
  handleSelect: (letter: string) => void;
}
export default function SelectAnswer({ data, handleSelect }: Props) {
  return (
    <div>
      {data.map((item) => (
        // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          key={item.letter}
          className="cursor-pointer flex justify-start items-center gap-10 mt-8"
          onClick={() => {
            handleSelect(item.letter);
          }}
        >
          <div className="border-2 text-center px-5 py-2 rounded-xl bg-green-600">{item.letter}</div>
          <div className="border-2 text-center px-5 py-2 rounded-xl bg-green-600">{item.question}</div>
        </div>
      ))}
    </div>
  );
}
