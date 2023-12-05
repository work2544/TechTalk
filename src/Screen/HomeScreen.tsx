import svg from "../svg/svg";
const HomeScreen = () => {
  
  return (
    <div className="h-screen pt-96 md:pt-20" style={{ backgroundImage: `url(${svg[11]})` }}>
      
      <div className="grid grid-rows-1 justify-items-center bg-Cookie h-3/4 w-9/12 container mx-auto 2xl:w-1/2 2xl:h-3/4 rounded-md" style={{ backgroundImage: `url(${svg[12]})` }}>
        <div className="grid grid-rows-2 space-y-20  place-items-center">
          <div className="self-center 2xl:w-1/2">
            <img src={svg[5]} className="mx-auto  md:w-1/2 md:pt-20 xl:w-full" alt="" />
          </div>

          <div className="2xl:absolute 2xl:pt-44">
            <a
              className="flex space-x-2 justify-center place-content-center"
              href="/Profile"
            >
              <button
                type="button"
                className="w-fit h-fit  inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none 
            focus:ring-0 transition duration-150 ease-in-out 
            "
              >
                <p className="font-Mali text-4xl md:text-4xl lg:text-6xl xl:text-7xl">กดเพื่อเริ่ม</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeScreen;
