import { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { api } from "~/utils/api";

export default function CodeReader() {
  const validateSpot = api.spot.validateSpot.useMutation();

  return (
    <div className="top-0 left-0 bottom-0 right-0 m-auto absolute backdrop-blur pt-20">
      <div className="text-center text-2xl font-bold mb-5">Naskenujte QR kód</div>
      <QrScanner
        onResult={async (result) => {
          const data = await validateSpot.mutateAsync(result.getText());

          if (data) {
            window.location.reload();
          } else {
            console.log(validateSpot.error);
          }
        }}
        onError={(error) => {
          console.log(error);
        }}
        constraints={{
          facingMode: "environment",
          aspectRatio: { min: 1, max: 1 },
        }}
        scanDelay={1000}
      />
    </div>
  );
}
