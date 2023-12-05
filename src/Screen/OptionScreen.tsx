import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { LangOptionSelector } from "../app/slices/LangOptionReducer";
import LanguageOption from "../component/languageOption/LanguageOption";
import LevelOption from "../component/LevelOption/LevelOption";

const OptionScreen = () => {
  const languageReducer = useSelector(LangOptionSelector);
  const search = useLocation().search;
  const FirstName = new URLSearchParams(search).get("FirstName");
  const LastName = new URLSearchParams(search).get("LastName");
  const Age = new URLSearchParams(search).get("Age");
  return (
    <div className="grid grid-cols-1">
      <div className="justify-self-end  ">
        <div className="flex flex-row space-x-3.5 px-20 pt-10">
          <p className="font-Mali text-xl ">{FirstName}</p>
          <p className="font-Mali text-xl">{LastName}</p>
          <p className="font-Mali text-xl">อายุ {Age} ปี</p>
        </div>
      </div>
      <div className="-pt-20">
      {!languageReducer.next ? (
        <div className="flex items-center justify-center min-h-screen w-screen ">
          <div className="w-6/12">
            <LanguageOption></LanguageOption>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen w-screen -mt-10">
          <div className="w-6/12">
            <LevelOption language={languageReducer.language}></LevelOption>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
export default OptionScreen;
