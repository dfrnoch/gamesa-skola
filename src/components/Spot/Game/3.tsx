import React, { useState, ChangeEvent } from "react";
import { api } from "~/utils/api";

interface Message {
  first: string;
  second: string;
}

export default function Third(): JSX.Element {
  const checkData = api.spot.checkAnswer4.useMutation();

  const [message, setMessage] = useState<Message>({
    first: "",
    second: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setMessage({
      ...message,
      [name]: value,
    });
  }

  //TODO: tohle budeme validovat na serveru a ne na FE
  async function handleClick() {
    const status = await checkData.mutateAsync(message);

    if (status.correct) {
      window.location.reload();
    } else {
      //TODO: zobrazit chybu
    }
  }

  return (
    <>
      <div className="flex justify-center mt-2">
        <div className="text-center text-3xl mt-3 bg-red-700 py-2 w-80 rounded-xl font-bold my-4 ">
          Doplň slovo
        </div>
      </div>

      <div className="flex justify-center text-black font-semibold">
        <div className="m-3 rounded-xl bg-red-400 w-80">
          <p className="text-2xl text-center pt-4">
            {" "}
            <input
              type="text"
              onChange={handleChange}
              value={message.first}
              name="first"
              className="text-gray-700 rounded mr-4 ml-4 w-32"
            />{" "}
            je rozpustná látka, která je pro lidské tělo nezbytná pro správnou funkci kostí a svalů.
          </p>
          <p className="text-2xl text-center pb-4 px-4 pt-2">
            Existují dvě hlavní formy{" "}
            <input
              type="text"
              onChange={handleChange}
              value={message.second}
              name="second"
              className="text-gray-700 rounded mr-4 ml-4 w-32"
            />{" "}
            ergokalciferol a cholekalciferol.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <button onClick={handleClick} className="w-80 h-12 text-3xl bg-red-700 rounded-xl font-bold">
          Button
        </button>
      </div>

      <div className="flex justify-center">
        <img src="" alt="logo" className="pl-4 w-40 h-40 border-gray-200 border-4 mt-5 rounded-xl" />
      </div>
    </>
  );
}
