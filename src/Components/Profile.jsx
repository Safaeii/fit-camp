
function Profaile (){
    return(
        <div className=" flex flex-col justify-center-safe items-center sm:gap-2 lg:gap-8  sm:mb-25 lg:mb-8 ">

            <div className=" flex justify-between items-center w-52 h-8  px-1 bg-black  rounded-full">
                <div className="flex items-center ml-2 ">
<img src="/src/assets/images/Profile 1.png" alt="profaile1" className="size-6  " />
<img src="/src/assets/images/Profile 2.png" alt="profaile2"  className="size-6  -ml-3" />
<img src="/src/assets/images/Profile 3.png" alt="profaile3" className="size-8  mt-1 -ml-3"  />
                </div>
<p className="text-[8px] text-white "> Over 100k+ Member Joined</p>
            </div>
<div className=" flex flex-col gap-2 items-center ">
<h3 className=" lg:text-6xl sm:text-3xl font-bold text-white"> Priotize Your Health</h3>
<p className=" lg:text-sm sm:text-xs text-white "> Transform your life investing your wellness</p>
</div>

<div className=" flex justify-between items-center px-2 bg-white lg:w-80 lg:h-8 sm:w-50 sm:h-4 rounded-full">
    <label htmlFor="Search"></label>
<input type="text" placeholder="Search gym location, city nearby..." className="border-none text-[10px] w-8/12 rounded-full" /> 
<button className=" bg-black  text-white lg:px-2 sm:px-1 rounded-full lg:text-sm sm:text-xs ">Search</button>
</div>


        </div>
    )
}
export default Profaile
  

