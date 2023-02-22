interface Props {
  data: string[];
}
export default function SelectAnswer({ data }: Props) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={item} className=" flex justify-between">
          <div>a</div>
          <div className="border-[2px]">{item}</div>
        </div>
      ))}
    </div>
  );
}
