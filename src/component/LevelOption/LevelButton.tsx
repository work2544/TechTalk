import { useSelector } from "react-redux";
import { LangOptionSelector,Ontoggle } from "../../app/slices/LangOptionReducer";
import { useAppDispatch } from "../../app/store";

type Props = {
      language:string;
  level: number;
};

const LevelButton = ({ language,level }: Props) => {
  const languageReducer = useSelector(LangOptionSelector);
  const dispatch = useAppDispatch()
  return (
    <a href={`/Speech?language=${language}&level=${level}`}>
      <button
        type="button"
        value={level}
        className="w-full h-20  inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none 
                  focus:ring-0 transition duration-150 ease-in-out 
                  "
        onClick={() => {dispatch(Ontoggle())}}
      >
        
        <p className="font-Mali  text-xl sm:text-2xl lg:text-3xl">ระดับที่ &nbsp; <span>{level}</span></p>
        
      </button>
    </a>
  );
};
export default LevelButton;
