import React from "react";
import ReactDOM from "react-dom";

import Synth from "./containers/Synth";

import "reset-css";
import "./styles/index.scss";
import "./styles/Bpm.scss";
import "./styles/Button.scss";
import "./styles/ButtonSet.scss";
import "./styles/Effect.scss";
import "./styles/Keyboard.scss";
import "./styles/Knob.scss";
import "./styles/PlaySwitch.scss";
import "./styles/Slider.scss";
import "./styles/ToggleSwitch.scss";
import "./styles/synth.scss";

ReactDOM.render(<Synth />, document.getElementById("root"));
