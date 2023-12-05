import { useSelector } from "react-redux";
import { chooseLang, Ontoggle } from "../../app/slices/LangOptionReducer";
import { useAppDispatch } from "../../app/store";


type Prop = {
  language: string;
  value: string;
};
const LanguageButton = ({ language, value }: Prop) => {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      value={value}
      className="w-full  h-fit  inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none 
            focus:ring-0 transition duration-150 ease-in-out 
            "
      onClick={() => {
        dispatch(chooseLang(value));
        dispatch(Ontoggle());
      }}
    >
      <p className="font-Mali text-xl sm:text-2xl lg:text-3xl">{language}</p>
    </button>
  );
};
export default LanguageButton;
