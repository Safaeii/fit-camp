function GymCard1(){
    return(
        <div className=" py-10 px-10 bg-white lg:w-3/12 items-center lg:items-start shadow rounded-3xl flex flex-col gap-2">
<img src="/src/assets/images/Regular1.png" alt="" />
<h3 className=" text-sm font-bold"> Reqular Package Plan</h3>
<p className="text-xs text-[#778899] whitespace-nowrap"> Enjoy all subscribe package benefits</p>
<div className="flex  items-center justify-start mt-4">
    <img src="/src/assets/images/tick-circle.png" alt="" />
    <p className="text-xs text-[#778899] "> Access to All Facilities</p>
</div>
<div className="flex  items-center justify-start ">
    <img src="/src/assets/images/tick-circle.png" alt="" />
    <p className="text-xs text-[#778899]"> Standard Class Enrollment</p>
</div>
<div className="flex  items-center justify-start ">
    <img src="/src/assets/images/tick-circle.png" alt="" />
    <p className="text-xs text-[#778899]"> Personal Training Session</p>
</div>
<div className="flex items-center justify-start mb-4 ">
    <img src="/src/assets/images/tick-circle.png" alt="" />
    <p className="text-xs text-[#778899] whitespace-nowrap">  Exclusive Member Discount</p>
</div>
<div className=" flex  lg:justify-between gap-4 justify-center  w-full">
    <button className="px-8  py-2 text-xs text-white bg-[#606DE5] rounded-full">Subscribe</button>
    <div className=" flex flex-col gap-1">
        <h3 className="text-sm font-bold"> Rp 199.000/</h3>
        <p className=" text-xs text-[#778899] " > 3 Month</p>
    </div>
</div>
        </div>
    )
}
export default GymCard1