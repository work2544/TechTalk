import { useRef } from "react";
import { useSelector } from "react-redux";
import {
  submit,
  UserProfileSelector,
} from "../../app/slices/UserProfileReducer";
import { useAppDispatch } from "../../app/store";

const Form = () => {
  const dispatch = useAppDispatch();
  const userProfileReducer = useSelector(UserProfileSelector);
  const FirstName = useRef<string>("");
  const LastName = useRef<string>("");
  const Age = useRef<number>(0);
  const onclick = () => {
    dispatch(
      submit({
        firstname: FirstName.current,
        lastname: LastName.current,
        age: Age.current,
      })
    );
  };
  return (
    <div className="flex flex-col space-y-10 xl:w-1/2 xl:h-auto">
      <form
        action={`/Option?FirstName=${userProfileReducer.firstname}&LastName=${userProfileReducer.lastname}&Age=${userProfileReducer.age}`}
        method="post"
      >
        <div className="flex flex-col space-y-5">
          <div className="space-y-1">
            <p className="font-Mali text-3xl xl:text-6xl">ชื่อ</p>
            <input
              className="font-Mali block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              onChange={(e) => (FirstName.current = e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <p className="font-Mali text-3xl xl:text-6xl">นามสกุล</p>
            <input
              className="font-Mali block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              onChange={(e) => (LastName.current = e.target.value)}
              required
            />
          </div>
          <div className="space-y-4">
            <p className="font-Mali text-3xl xl:text-6xl">อายุ</p>
            <input
              className="font-Mali block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
              onChange={(e) => (Age.current = Number(e.target.value))}
              required
            />
          </div>
        </div>
      </form>
      <a
        href={`/Option?FirstName=${userProfileReducer.firstname}&LastName=${userProfileReducer.lastname}&Age=${userProfileReducer.age}`}
      >
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onclick}
        >
          <p className="font-Mali text-3xl xl:text-6xl">ยืนยันข้อมูล</p>
        </button>
      </a>
    </div>
  );
};
export default Form;
