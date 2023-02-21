import { QrReader } from "react-qr-reader";

export default function CodeReader() {
  const checkResult = (result: string) => {
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
