interface Props {
  data: string[];
}
export default function SelectAnswer({ data }: Props) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
