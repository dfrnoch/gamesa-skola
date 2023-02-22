import React, { useState, ChangeEvent } from "react";
import { api } from "~/utils/api";

interface Message {
  first: string;
  second: string;
}

function Fourth(): JSX.Element {
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
    await checkData.mutateAsync(message);
  }

  return (
    <div className=" bg-gray-700 w-screen h-screen text-gray-200">
      <div className="flex justify-center">
        <img src="" alt="logo" className="pl-4 w-40 h-40 border-gray-200 border-4" />
      </div>

      <div className="mt-10">
        <p className="text-3xl text-center p-4">
          Tady bude{" "}
          <input
            type="text"
            onChange={handleChange}
            value={message.first}
            name="first"
            className="text-gray-700 rounded mr-4 ml-4"
          />{" "}
          tady pokračuje.
        </p>
        <p className="text-3xl text-center p-4">
          Text{" "}
          <input
            type="text"
            onChange={handleChange}
            value={message.second}
            name="second"
            className="text-gray-700 rounded mr-4 ml-4"
          />{" "}
          je zde.
        </p>
      </div>
      <div className="flex justify-center pt-16">
        <button onClick={handleClick} className="w-32 h-12 text-lg bg-gray-200 text-gray-700 rounded">
          Button
        </button>
      </div>
    </div>
  );
}

export default Fourth;
