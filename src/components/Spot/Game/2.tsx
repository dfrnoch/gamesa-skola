import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { api } from "~/utils/api";

export default function Second() {
  const checkData = api.spot.checkAnswer2.useMutation();

  const checkAnswer = async () => {
    const data = await checkData.mutateAsync();
    if (data) {
      window.location.reload();
    }
  };

  return (
    <div className="border-2 mt-10">
      <JigsawPuzzle
        imageSrc='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        rows={3}
        columns={3}
        onSolved={checkAnswer}
      />
    </div>
  );
}
