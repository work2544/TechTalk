
import svg from "../../svg/svg";
import LanguageButton from "./LanguageButton";

const LanguageOption = () => {
 
  return  (
    <div className="grid grid-cols-1 gap-y-5">
      <div className="place-self-center -mt-10 w-4/6">
      <img src={svg[14] }></img>
      </div>
      <LanguageButton language="ภาษาไทย(ภาคกลาง)" value="th"></LanguageButton>
      <LanguageButton language="ภาษาเหนือ" value="north"></LanguageButton>
      <LanguageButton language="ภาษาอีสาน" value="e3"></LanguageButton>
      <LanguageButton language="ภาษาใต้" value="south"></LanguageButton>
    </div>
  ) 
};
export default LanguageOption;

