import "./App.css";
import HomeScreen from "./Screen/HomeScreen";
import SpeechScreen from "./Screen/SpeechScreen";
import { Route, Routes } from "react-router-dom";
import OptionScreen from "./Screen/OptionScreen";
import ProfileScreen from "./Screen/ProfileScreen";
import TestRe from "./component/SoundRecord/TestRe";

function App() {
  return (
    <div className=" bg-background ">
    <Routes>
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/Profile" element={<ProfileScreen />}></Route>
      <Route path="/Option" element={<OptionScreen />}></Route>
     <Route path="/TestRe" element={<TestRe></TestRe>}></Route>
      <Route path="/Speech" element={<SpeechScreen />}></Route>
    </Routes>
    </div>
  );
}

export default App;
