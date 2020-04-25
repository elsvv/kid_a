import classnames from "classnames";
import React from "react";

export default ({
  note,
  octave,
  currentNote,
  handleMouseUp,
  handleMouseDown,
  playKey,
}) => {
  const classes = classnames({
    keyButton: true,
    pressed: note === currentNote,
    black: note.length === 2,
    white: note.length === 1,
  });

  return (
    <div
      className={classes}
      id={note}
      onMouseDown={() => handleMouseDown(note, octave)}
      onMouseUp={handleMouseUp}
    >
      {playKey}
    </div>
  );
};
