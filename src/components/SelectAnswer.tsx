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
          className="cursor-pointer flex justify-start items-center gap-20 "
          onClick={() => {
            handleSelect(item.letter);
          }}
        >
          <div>{item.letter}</div>
          <div className="border-[2px]">{item.question}</div>
        </div>
      ))}
    </div>
  );
}
