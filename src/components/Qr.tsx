import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function CodeReader() {
  const [data, setData] = useState("");

  return (
    <div className="absolute top-0 left-0 w-screen h-screen">
      <div className="">
        <QrReader
          onResult={(result, error) => {
            if (result) {
              setData(result.getText());
            }

            if (!error) {
              console.info(error);
            }
          }}
          constraints={{
            facingMode: "environment",
          }}
        />
        <p>{data}</p>
      </div>
    </div>
  );
}
