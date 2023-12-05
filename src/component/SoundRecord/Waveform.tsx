import React, { useState } from "react";
import Wavesurfer from "react-wavesurfer.js";
type Props = {
  audioblob: string;
};
const Waveform = ({ audioblob }: Props) => {

  return <Wavesurfer src={audioblob} />;
};
export default Waveform;
