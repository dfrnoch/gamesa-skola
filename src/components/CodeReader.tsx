import { QrReader } from "react-qr-reader";
import { api } from "~/utils/api";

export default function CodeReader() {
  const validateSpot = api.spot.validateSpot.useMutation();

  const checkResult = async (result: string) => {
    await validateSpot.mutateAsync(result);

    if (validateSpot.isSuccess) {
      console.log("success");
      //todo: invalidate getGame trpc query
    } else {
      console.log("error");
    }

    console.log(result);
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen">
      <div className="">
        <QrReader
          onResult={(result, error) => {
            if (result) {
              checkResult(result.getText());
            }
            if (!error) {
              console.info(error);
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
