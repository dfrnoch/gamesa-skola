import { api } from "~/utils/api";

export default function First() {
  const query = api.spot.checkAnswer1.useMutation();

  const handleClick = async () => {
    const data = await query.mutateAsync();
    window.location.reload();
  };

  return (
    <div>
      <div className="mt-5 flex flex-col justify-center items-center font-bold">
        <div className="border-2 border-dashed border-red-800 p-1 rounded-xl mx-7">
          <h1 className=" text-4xl text-center bg-red-500 rounded-xl p-3">Jak hrát?</h1>
        </div>
        <p className="text-2xl">dadawwad</p>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-5"
          onClick={handleClick}
        >
          Rozumím
        </button>
      </div>
    </div>
  );
}
