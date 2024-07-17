import React from 'react'

type CanvasActionProps = {
    undoLastPoint: () => void;
    redoLastPoint: () => void;
    canRedo: boolean;
    canUndo:boolean;
};


const CanvasActions = ({undoLastPoint, redoLastPoint, canUndo, canRedo}: CanvasActionProps) => {
  return (
    <div>
        <button onClick={undoLastPoint} disabled={canUndo}>Undo</button>
        <button onClick={redoLastPoint} disabled={canRedo}>Redo</button>
    </div>
  );
};

export default CanvasActions