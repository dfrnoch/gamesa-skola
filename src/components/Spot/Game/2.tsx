import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

export default function Second() {
  return (
    <div className="border-2 mt-10">
      <JigsawPuzzle
        imageSrc='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        rows={3}
        columns={3}
        onSolved={() => alert("Solved!")}
      />
    </div>
  );
}
