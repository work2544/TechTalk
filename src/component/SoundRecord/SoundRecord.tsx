// ไลบรารี่และส่วนประกอบของเว็บที่จำเป็นต้องใช้
// import { useReactMediaRecorder } from "react-media-recorder";
import svg from "../../svg/svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateSelector } from "../../app/slices/StateReducer";
import "reactjs-popup/dist/index.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import PopupScore from "../Popup/PopupScore";
export interface ISoundRecordProps {
  soundtoCompare: string;
}

//ส่วนสำหรับการบันทึกและให้คะแนนเสียง
export default function SoundRecord({ soundtoCompare }: ISoundRecordProps) {
  //สำหรับจำเลเวล
  const stateReducer = useSelector(StateSelector);
  //เช็คว่าอัดเสียงเสร็จหรือยัง
  const [showresult, setShowResult] = useState(false);
  //เก็บค่าคะแนน
  const [score, setScore] = useState<number>(0);
  // label สำหรับคำตอบ
  const string2 = soundtoCompare;
  //ตัวแปรสำหรับส่งค่าให้ microsoft api
  // const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true, askPermissionOnMount: true });

  useEffect(() => {
    setShowResult(false);
  }, [stateReducer.state]);
  const {
    transcript,
    listening,
    resetTranscript,
    // browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  //ฟังชั่นการทำงานของปุ่มอัดเสียง
  const OnStart = () => {
    setShowResult(false);
    // startRecording();
    SpeechRecognition.startListening({
      continuous: true,
      language: "th-TH",
    });
  };
  const OnStop = () => {
    setShowResult(true);
    // stopRecording();
    SpeechRecognition.stopListening();
    getScore();
  };
  //คำนวณคะแนน
  const getScore = () => {
    let maxLen = Math.max(transcript.length, string2.length);
    let minLen = Math.min(transcript.length, string2.length);
    let count = 0;
    for (let i = 0; i < minLen; i++) {
      if (transcript[i] === string2[i]) {
        count++;
      }
    }
    let score = (count / maxLen) * 100;
    if (score < 20) score = score * 2;
    setScore(Math.round(score));
    resetTranscript();
  };
  //หน้าเว็บสำหรับแสดงผล วิดิโอ อัดเสียง คะแนน
  return (
   
    <div className="flex flex-col justify-center items-center space-y-10 ">
     
      {/* <p>{transcript}</p>
      <p>{String(listening)}</p> */}
      {listening ? (
        <button onClick={() => OnStop()}>
          <div className="flex flex-col justify-center items-center space-y-5">
            <p className="font-Mali text-xl xl:text-6xl pt-10">
              กดเพื่อหยุดการบันทึก
            </p>
            <img className="w-40" src={svg[1]}></img>
          </div>
        </button>
      ) : (
        <button onClick={() => OnStart()}>
          <div className="flex flex-col justify-center items-center space-y-5 xl:space-y-10">
            <p className="font-Mali text-xl xl:text-6xl pt-10">
              กดเพื่อบันทึกเสียงของคุณ
            </p>
            <img className="w-40" src={svg[0]}></img>
          </div>
        </button>
      )}

      {showresult ? (
        <div className="flex flex-col justify-center items-center space-y-5">
          {/* <p className="font-Mali text-xl">ฟังเสียงของคุณ</p> */}
          {/* <audio src={mediaBlobUrl} controls /> */}
          <PopupScore score={score}></PopupScore>
        </div>
      ) : (
        <></>
      )}
    </div>
    
  );
}
