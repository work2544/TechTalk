import { useEffect, useState } from "react";
// import ReactPlayer from "react-player";
import "../../video-react.css";
import { Player } from "video-react";
// import JoLPlayer from "jol-player";
type Props = {
  soundPath: string;
  word: string;
};

const VideoPlayer = ({ soundPath, word }: Props) => {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());
  // const [videoSize, setVideoSize] = useState([320, 320]);
  const [videoSize, setVideoSize] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    setWindowSize(getWindowSize());
    if (windowSize.innerWidth >= 1080) {
      // setVideoSize([1080, 1080]);
      setVideoSize("w-3/4");
    }
    // else if (windowSize.innerWidth == 280 && windowSize.innerHeight == 653) {
    //   setVideoSize([1920, 160]);
    // } else if (windowSize.innerWidth <= 414 && windowSize.innerHeight <= 915) {
    //   setVideoSize([1920, 240]);
    // } else if (windowSize.innerWidth <= 820 && windowSize.innerHeight <= 1180) {
    //   setVideoSize([400, 240]);
    // }
    else {
      setVideoSize("w-screen");
    }
  }, [loading]);

  return (
    <div className={`${videoSize} h-full flex justify-center`}>
      {/* <JoLPlayer
        option={{
          videoSrc:soundPath,
          width: videoSize,
          height: videoSize,
        }}
      /> */}
      {/* <ReactPlayer controls url={soundPath} width={videoSize[0]} height={videoSize[1]} ></ReactPlayer> */}
      <Player playsInline src={soundPath} />
    </div>
  );
};

export default VideoPlayer;
