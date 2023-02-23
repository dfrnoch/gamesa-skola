export default function Seventh() {
  function handleClick() {}

  return (
    <div className="flex justify-center">
      <div>
        <div className="flex justify-center">
          <button onClick={() => handleClick}>R</button>
          <button onClick={() => handleClick}>Ch</button>
          <button onClick={() => handleClick}>I</button>
          <button onClick={() => handleClick}>Ý</button>
        </div>
        <div className="flex justify-center">
          <button onClick={() => handleClick}>H</button>
          <button onClick={() => handleClick}>O</button>
          <button onClick={() => handleClick}>V</button>
          <button onClick={() => handleClick}>A</button>
        </div>
        <div className="flex justify-center">
          <button onClick={() => handleClick}>R</button>
          <button onClick={() => handleClick}>P</button>
          <button onClick={() => handleClick}>E</button>
          <button onClick={() => handleClick}>N</button>
        </div>
        <div className="flex justify-center">
          <button onClick={() => handleClick}>O</button>
          <button onClick={() => handleClick}>T</button>
        </div>
      </div>
    </div>
  );
}
