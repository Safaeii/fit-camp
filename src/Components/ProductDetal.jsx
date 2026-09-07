function ProductDetails(){
    return (
        <div className="w-10/12 mx-auto mt-20 px-5 flex-col  ">
<h3 className=" text-xl  text-center font-bold"> Unlock All the Membership  Benefits</h3>
<br />
<p className="text-center opacity-70"> Experience full access to premium, features, services, and facilities</p>
{/* ========top===== */}
<div className=" 
flex flex-col lg:flex-row
   gap-5 mt-10 ">
    {/* ===1=== */}
    <div   className=" w-full flex flex-col  justify-between items-center gap-5 shadow  rounded-3xl py-4 px-4 " >
        <img src="/src/assets/images/Flexible Time.png" alt=""  className=" size-16"/>
        <h4 className=" text-sm font-bold"> Flexible Time</h4>
        <p  className=" text-xs opacity-70  text-center"  > Your schedulee, your workout.
flexibility that fist your life,
no time limits</p>
    </div>
    {/* =====2==== */}
  <div  className=" w-full flex flex-col  justify-between items-center gap-5 shadow  rounded-3xl py-4 px-4 " >
        <img src="/src/assets/images/Work From Anywhere.png" alt=""  className=" size-16"/>
        <h4 className=" text-sm font-bold" >Workout From Anywhere</h4>
        <p  className=" text-xs opacity-70 text-center"  > 
Stay fit where you are.
All location, one membership,
workout is just a click away</p>
    </div>
    {/* =====3===== */}
      <div  className=" w-full flex flex-col  justify-between items-center gap-5 shadow  rounded-3xl py-4 px-4 " >
        <img src="/src/assets/images/Flexible Time.png" alt="" className=" size-16" />
        <h4 className=" text-sm font-bold" > Expert Mentor</h4>
<p   className=" text-xs opacity-70 text-center" > Unlock your potensial with
professional coaching, wihout
any additioanl charge</p>
    </div>
 
</div>
   {/* =============bou========= */}
<div className="flex flex-col lg:flex-row
gap-5 mt-10 ">
    {/* ===1=== */}
    <div   className=" w-full flex flex-col  justify-between items-center gap-5 shadow  rounded-3xl py-4 px-4 " >
        <img src="/src/assets/images/Schedule.png" alt=""  className=" size-16"/>
        <h4 className=" text-sm font-bold"> FWell Planned Schedule</h4>
        <p  className=" text-xs opacity-70  text-center"  > Your schedulee, your workout.
flexibility that fist your life,
no time limits</p>
    </div>
    {/* =====2==== */}
  <div  className=" w-full flex flex-col  justify-between items-center gap-5 shadow  rounded-3xl py-4 px-4 " >
        <img src="/src/assets/images/Event.png" alt=""  className=" size-16"/>
        <h4 className=" text-sm font-bold" > Fitness Event</h4>
        <p  className=" text-xs opacity-70 text-center"  > 
Stay fit where you are.
All location, one membership,
workout is just a click away</p>
    </div>
    {/* =====3===== */}
      <div  className=" w-full flex flex-col  justify-between items-center gap-5 shadow  rounded-3xl py-4 px-4 " >
        <img src="/src/assets/images/Enjoy.png" alt="" className=" size-16" />
        <h4 className=" text-sm font-bold" > Enjoy All Facillties</h4>
<p   className=" text-xs opacity-70 text-center" > Unlock your potensial with
professional coaching, wihout
any additioanl charge</p>
    </div>
 
</div>


        </div>
    )
}
export default ProductDetails