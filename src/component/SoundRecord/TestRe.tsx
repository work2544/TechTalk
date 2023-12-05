import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export interface ITestReProps {
}

export default function TestRe (props: ITestReProps) {
      const {
            transcript,
            listening,
            resetTranscript,
            browserSupportsSpeechRecognition
          } = useSpeechRecognition();
        
          if (!browserSupportsSpeechRecognition) {
            return <span>Browser doesn't support speech recognition.</span>;
          }
        
          return (
            <div className='flex flex-col'>
              <p>Microphone: {listening ? 'on' : 'off'}</p>
              <button onClick={()=>SpeechRecognition.startListening({continuous:true,
      language: "th-TH",})}>Start</button>
              <button onClick={()=>SpeechRecognition.stopListening()}>Stop</button>
              <button onClick={()=>resetTranscript()}>Reset</button>
              <p>{transcript}</p>
            </div>
          );
}
