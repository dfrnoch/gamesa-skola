import React, { useState } from "react";

export default function Fourth() {
  const [message, setMessage] = useState({
    first: "",
    second: "",
  });
  const [update, setUpdate] = useState("");

  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  function handleChange(event: { target: { value: any; name: any } }) {
    const value = event.target.value;

    setMessage({
      ...message,
      [event.target.name]: value,
    });
  }

  const handleClick = () => {
    if (message.first === "ahoj" && message.second === "baf") {
      setUpdate("ano");
    } else {
      setUpdate("ne");
    }
  };

  return (
    <>
      <main className="w-screen h-screen  bg-gray-700 text-slate-200">
        <div className="flex justify-center">
          <img src="" alt="logo" className="pl-[1rem] w-[10rem] h-[10rem] border-light-200 border-[5px]" />
        </div>

        <div className="mt-[5rem]">
          <p className="text-[25px] text-center p-[1rem]">
            Tady bude
            <input
              type={"text"}
              onChange={handleChange}
              value={message.first}
              name="first"
              className="text-gray-700 rounded mr-[1rem] ml-[1rem]"
            />{" "}
            tady pokračuje.
          </p>
          <p className="text-[25px] text-center p-[1rem]">
            Text
            <input
              type={"text"}
              onChange={handleChange}
              value={message.second}
              name="second"
              className="text-gray-700 rounded mr-[1rem] ml-[1rem]"
            />
            je zde.
          </p>
        </div>
        <div className="flex justify-center pt-[4rem]">
          <button
            onClick={handleClick}
            className="w-[8rem] h-[3rem] text-[1.5rem] bg-gray-200 text-gray-700 rounded"
          >
            Button
          </button>
          <h2>sfa: {update}</h2>
        </div>
      </main>
    </>
  );
}
