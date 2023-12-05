import { useSelector } from "react-redux";
import { max } from "wavesurfer.js/src/util";
import { StateSelector, nextState } from "../../app/slices/StateReducer";
import { useAppDispatch } from "../../app/store";
type Props={
      maxState: number
}
const NextButton = ({maxState}:Props) => {
  const stateReducer = useSelector(StateSelector);
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-2 w-screen p-5">
      <a href="/Option">
        <button
          type="button"
          className="w-3/5 h-full lg:w-1/5 xl:w-3/5 place-self-start inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          <p className="text-xl xl:text-5xl font-Mali text-center">ย้อนกลับ</p>
        </button>
      </a>
      {stateReducer.state < maxState-1 ? (
        <button
          type="button"
          className="w-3/5 lg:w-1/5 xl:w-3/5 place-self-end inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={() => {
            dispatch(nextState());
          }}
        >
          <p className="text-xl xl:text-5xl font-Mali text-center">ข้อต่อไป</p>
        </button>
      ) : (
        <a href="/Option" className="place-self-end">
          <button
            type="button"
            className="w-11/12  inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <p className="text-xl xl:text-5xl font-Mali text-center">จบแบบทดสอบ</p>
          </button>
        </a>
      )}
    </div>
  );
};
export default NextButton;
