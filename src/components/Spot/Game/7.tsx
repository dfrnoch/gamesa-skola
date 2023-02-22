import React from "react";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";

function Seventh() {
  return (
    <div className=" bg-gray-700 w-screen h-screen text-gray-200">
      <DndProvider backend={TouchBackend}>
        <span>♘</span>
      </DndProvider>
      <h1>cau</h1>
    </div>
  );
}

export default Seventh;
