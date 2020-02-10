import React from "react";

import PlaySwitch from "./PlaySwitch";

const LoopsContainer = props => {
  const loops = props.loops.map((loop, idx) => {
    return (
      <div className={`loop loop${idx + 1}`} key={idx}>
        <h2>Loop {`${idx + 1}`}</h2>
        <PlaySwitch
          key={idx}
          name="play"
          value={loop.on}
          handleToggleClick={() => props.toggleLoop(`loop${idx + 1}`)}
        />
      </div>
    );
  });

  return <div className="loops">{loops}</div>;
};

export default LoopsContainer;
