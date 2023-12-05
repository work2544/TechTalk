import { useSelector } from "react-redux";
import { StateSelector } from "../app/slices/StateReducer";
import { useLocation } from "react-router-dom";
import SoundRecord from "../component/SoundRecord/SoundRecord";
import VideoPlayer from "../component/SoundRecord/VideoPlayer";
import soundData from "../component/soundData";
import NextButton from "../component/NextButton/NextButton";
const SpeechScreen = () => {
  const search = useLocation().search;
  const stateReducer = useSelector(StateSelector);
  let currentLevel: string;
  let currentLanguage: string;

  switch (new URLSearchParams(search).get("level")) {
    case "1":
      currentLevel = "1";
      break;
    case "2":
      currentLevel = "2";
      break;
    case "3":
      currentLevel = "3";
      break;
    default:
      currentLevel = "1";
      break;
  }
  switch (new URLSearchParams(search).get("language")) {
    case "th":
      currentLanguage = "th";
      break;
    case "e3":
      currentLanguage = "e3";
      break;
    case "north":
      currentLanguage = "north";
      break;
    default:
      currentLanguage = "south";
      break;
  }
  // console.log(soundData[currentLanguage][currentLevel][stateReducer.state]);
  const maxState: number = soundData[currentLanguage][currentLevel].length;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <VideoPlayer
        soundPath={
          soundData[currentLanguage][currentLevel][stateReducer.state].path
        }
        word={soundData[currentLanguage][currentLevel][stateReducer.state].word}
      ></VideoPlayer>
      <SoundRecord
        soundtoCompare={
          soundData[currentLanguage][currentLevel][stateReducer.state].word
        }
      ></SoundRecord>
      <NextButton maxState={maxState}></NextButton>
    </div>
  );
};
export default SpeechScreen;
