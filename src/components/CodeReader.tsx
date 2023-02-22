import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { api } from "~/utils/api";

export default function CodeReader() {
  const validateSpot = api.spot.validateSpot.useMutation();
  const [checking, setChecking] = useState(false);

  const checkResult = async (result: string) => {
    if (checking) return;

    setChecking(true);
    await validateSpot.mutateAsync(result);
    console.log(validateSpot.data);
    console.log(validateSpot.isSuccess);

    if (validateSpot.data) {
      window.location.replace("/");
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen">
      <div className="">
        <QrReader
          onResult={async (result) => {
            if (result) {
              await checkResult(result.getText());
              setChecking(false);
            }
          }}
          constraints={{
            facingMode: "environment",
          }}
        />
      </div>
    </div>
  );
}
