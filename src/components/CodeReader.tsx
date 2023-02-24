import { QrScanner } from "@yudiel/react-qr-scanner";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";

interface Props {
  onClose: () => void;
}

export default function CodeReader({ onClose }: Props) {
  const validateSpot = api.spot.validateSpot.useMutation();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains("backdrop-blur")) {
        onClose();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  return (
    <div className="top-0 left-0 bottom-0 right-0 m-auto absolute backdrop-blur pt-20 z-50">
      <div className="text-center text-2xl font-bold mb-5 p-3 bg-white rounded">Naskenujte QR kód</div>
      <QrScanner
        onResult={async (result) => {
          try {
            const data = await validateSpot.mutateAsync(result.getText());

            if (data.number) {
              window.location.reload();
            } else {
              toast.error("Špatný kód");
            }
          } catch (error) {
            toast.error("Špatný kód");
            console.log("joe");
          }
          if (validateSpot.isError) {
            toast.error("Špatný kód");

            console.log("joe");
          }
        }}
        onError={(error) => {
          console.log(error);

          toast.error("Špatný kód");
          console.log("joe");
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
