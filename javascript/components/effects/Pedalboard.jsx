import React from 'react'
import Chorus from './Chorus'
import Distortion from './Distortion'
import JcReverb from './JcReverb'
import FeedbackDelay from './FeedbackDelay'
import Vibrato from './Vibrato'

export default ({ synth, handler, subHandler, toggleEffect }) => {
  return (
    <div className="effectsWrapper row">
      <Chorus
        value={synth.chorus.effect}
        handler={handler}
        subHandler={subHandler}
        on={synth.chorus.on}
        toggleEffect={toggleEffect}
      />
      <Vibrato
        value={synth.vibrato.effect}
        handler={handler}
        subHandler={subHandler}
        on={synth.vibrato.on}
        toggleEffect={toggleEffect}
      />
      <Distortion
        value={synth.distortion.effect}
        handler={handler}
        subHandler={subHandler}
        on={synth.distortion.on}
        toggleEffect={toggleEffect}
      />
      <JcReverb
        value={synth.jcReverb.effect}
        handler={handler}
        subHandler={subHandler}
        on={synth.jcReverb.on}
        toggleEffect={toggleEffect}
      />
      <FeedbackDelay
        value={synth.feedbackDelay.effect}
        handler={handler}
        subHandler={subHandler}
        on={synth.feedbackDelay.on}
        toggleEffect={toggleEffect}
      />
    </div>
  )
}
