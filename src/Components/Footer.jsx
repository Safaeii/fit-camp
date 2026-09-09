function Footer (){
    return(
        <div className=" flex flex-col w-9/12 mx-auto mt-20 bg-black rounded-4xl text-white px-5 py-10">
{/* ==TopSection== */}
<div className=" flex lg:flex-row  w-full justify-between items-center py-5 px-5  ">
    <div className=" flex  flex-col  gap-5 w-6/12">
    <div className="flex  items-center gap-5">
<img src="/src/assets/images/Logo.png" alt=""  className=" size-16"/>
        <h4 className="text-xl font-bold"> FITCAMP</h4>
    </div>
        <p> Largest gym in indonesian, top-tier
facilities, premium amenities, and
nationwide access to all gy, location</p>
    </div>
    <div className="flex gap-2">
  <div className=" w-6/12 ">
        <ul className=" text-xs flex flex-col gap-4">
            <li className="text-sm font-bold"> More to Know</li>
            <li> Blog</li> 
            <li> Subscription</li>
            <li> Testimonial</li>
            <li> About</li>
        </ul>
    </div>
    <div className=" w-6/12">
        <ul className=" text-xs flex flex-col gap-4">
           <li  className=" text-sm font-bold"> Contact Us</li> 
           <li> 021-0892-2323</li>
           <li> @fitcamp.body.fit</li>
           <li> admin@fitcamp.com</li>
        </ul>
    </div>
</div >
    </div>
  
<img src="/src/assets/images/Line 2.png" alt="" />
<div className=" flex justify-between mt-5">
    <h6 className=" text-xs ">2024 fitcampcorption</h6>
    <ul className="text-xs">
        <a href="#"> Terms of Services</a>
        <a href="#"> Privacy Policy</a>
        <a href="#"> Cookies</a>
        <a href="#"> Legal</a>
    </ul>
</div>

        </div>
    )
}
export default Footer