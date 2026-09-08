import Header from "./Header"



function Detail(){
    return(

        <div className="w-screen  h-full bg-[#E1F5FE] mt-30 px-10 ">
<Header/> 

<div className=" flex ">
    {/* ====left===== */}
<div >
    <div className="flex flex-col w-7/12 gap-5">
        <img src="/src/assets/images/Gym 2 (1).png" alt="" />
        <div className=" flex  justify-between  items-center">
            <img src="/src/assets/images/Gym 2 (1).png" alt=""    className="w-2/12 h-6/12  rounded-2xl"  />
                <img src="/src/assets/images/image.png" alt=""    className="w-2/12 h-6/12  rounded-2xl"  />
                    <img src="/src/assets/images/image2.png" alt=""    className="w-2/12 h-6/12  rounded-2xl"  />
                        <img src="/src/assets/images/image3.png" alt=""    className="w-2/12 h-6/12  rounded-2xl"  />
        </div>
    </div>
</div>
{/* =====right===== */}
  <div className="w-4/12" >
            <img src="/src/assets/images/Regular.png" alt=""  className=""/>
        </div>


</div>



        </div>
    )
}
export default Detail