import svg from "../../svg/svg";
import LevelButton from "./LevelButton";

type Props = {
  language: string;
};
const languageType = {
  th: "ภาษาไทย",
  e3: "ภาษาอีสาน",
  notrh: "ภาษาเหนือ",
  south: "ภาษาใต้",
};
const LevelOption = ({ language }: Props) => {
  let langText: string = "";
  switch (language) {
    case "th":
      langText = "ภาษาไทย";
      break;
    case "e3":
      langText = "ภาษาอีสาน";
      break;
    case "north":
      langText = "ภาษาเหนือ";
      break;
    default:
      langText = "ภาษาใต้";
      break;
  }
  return (
    <div className="flex flex-col justify-center space-y-4w">
      <div className="place-self-center w-3/6">
        <img src={svg[15]}></img>
      </div>
      <div className="self-center">
        {
          <h1 className="text-2xl font-Mali underline underline-offset-auto">
            {langText}
          </h1>
        }
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        <LevelButton language={language} level={1} />
        <LevelButton language={language} level={2} />
        <LevelButton language={language} level={3} />
      </div>
    </div>
  );
};
export default LevelOption;
