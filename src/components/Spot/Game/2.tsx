import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { api } from "~/utils/api";
import Video from "src/components/Video";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Second() {
  const checkData = api.spot.checkAnswer2.useMutation();
  const [playVideo, setPlayVideo] = useState(false);

  const checkAnswer = async () => {
    const data = await checkData.mutateAsync();
    if (data) {
      toast.success("Správně");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Špatná odpověď");
    }
  };

  function handleVideo() {
    setPlayVideo(true);
  }

  const backgroundImage =
    "https://cdn.discordapp.com/attachments/824638985082634250/1078435354627014807/7bg.jpg";

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-5" />
      {playVideo === true && (
        <div>
          <Video
            url="https://cdn.discordapp.com/attachments/1077141029637066844/1078229834515353660/animace.mp4"
            posterUrl="https://cdn.discordapp.com/attachments/824638985082634250/1078585497988907049/image.png"
          />

          <div className="flex justify-center">
            <div className="flex justify-center mt-3 bordedr-2 border-lime-800 border-2 border-dashed p-1 rounded-xl">
              <div className="bg-lime-300 rounded-lg text-black text-2xl text-center font-bold p-2">
                <button onClick={checkAnswer}>Pokračovat</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {playVideo === false && (
        <div>
          <div className="fles justify-center p-1 rounded-xl border-2 border-lime-800 border-dashed mx-5">
            <div className="text-center text-2xl font-bold bg-lime-300 text-black p-2 rounded-lg">
              Poskládej puzzle.
            </div>
          </div>
          <div className="border-2 border-dashed border-lime-300 mt-10 bg-black">
            <JigsawPuzzle
              imageSrc='https://cdn.discordapp.com/attachments/824638985082634250/1078585497988907049/image.png'
              rows={3}
              columns={3}
              onSolved={handleVideo}
            />
          </div>
        </div>
      )}
    </div>
  );
}
