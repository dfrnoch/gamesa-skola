import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QR() {
  const [data, setData] = useState("Nic");

  return (
    <>
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
    </>
  );
}
