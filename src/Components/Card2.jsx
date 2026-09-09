import { useState } from "react"

function CardSenyyan(){

const[current,setCurrent]=useState(0)

const items=[
  {
    img:"/src/assets/images/Sauna.png",
    title:"Sauna",
    text:"Relax Body"
  },
    {
    img:"/src/assets/images/Shower Room.png",
    title:"Sauna",
    text:"Relax Body"
  },
    {
    img:"/src/assets/images/Locker.png",
    title:"Sauna",
    text:"Relax Body"
  },
    {
    img:"/src/assets/images/Cardio.png",
    title:"Sauna",
    text:"Relax Body"
  },
    {
    img:"/src/assets/images/Matras.png",
    title:"Sauna",
    text:"Relax Body"
  },
    {
    img:"/src/assets/images/Machine1.png",
    title:"Sauna",
    text:"Relax Body"
  },
]
  const prev = () => {
    setCurrent(
      (current) => (current - 1 + items.length) % items.length
    );
  };

  const next = () => {
    setCurrent(
      (current) => (current + 1) % items.length
    );
  };

    return(
        <div>

          {/* ===============mobaiil=============== */}
           {/* ==================== GYM INFO ==================== */}
           <div className="w-full bg-white  rounded-3xl py-10 px-10  md:hidden  ">
            <h3 className="text-sm font-bold">
                Fitcamp Senayan City Victory
              </h3>
            <div className=" flex py-2">
               {/* Location */}
              <img
                  src="/src/assets/images/location.png"
                  alt="Location"
                />

                <p className="text-xs text-[#778899]">
                  Senayan, Jakarta Selatan
                </p>
            </div>
 
                   {/* Gym Image */}
<img
              src="/src/assets/images/image.png"
              alt="Fitcamp Senayan City Victory"
              className="rounded-2xl
              w-full"
            />
                  {/* Facilities Header */}
                  <div className=" flex justify-between py-5">
       <p className="text-start text-xs font-bold">
                Facilities
              </p>
 <p className="text-xs text-[#660066]">
                View all
              </p>
                  </div>
    
          <div className="flex justify-between items-center text-cent  py-10">
    {/* prev */}
          <button onClick={prev} className="w-10 h-10 bg-[#9FDDFF] font-bold text-xl rounded-full" >
   ‹
          </button>
          {/* items */}
          <div className="flex flex-col gap-5 text-center">
             {/* Image */}
<img src={items[current].img}
 alt={items[current].img}/>
 {/* Title */}
 <h3>
  {items[current].title}
 </h3>
 <p>
  {items[current].text}
 </p>
           </div>
          {/* next */}
          <button onClick={next} className="w-10 h-10 bg-[#9FDDFF] font-bold text-xl rounded-full">
      ›
          </button>
          </div>
          {/* ==================================================
              OPERATIONAL TIME
          ================================================== */}
          <div className="flex h-full w-full items-center justify-between  flex-col gap-2 mt-1 py-1">

            {/* Operational Time Icon */}
            <div className="  ">
              <img
                src="/src/assets/images/Operational Time.png"
                alt="Operational Time"
                className="size-10"
              />
            </div>

            {/* Operational Time Text */}
        
            <div className="   gap-1 flex  items-center flex-col">
              <h4 className="text-xs font-bold">
                Opening Work
              </h4>

              <p className="text-xs text-[#778899]">
                05:00 AM - 11:00 PM
              </p>
            </div>
          </div>
      </div>
          {/*===============desktop=================  */}
 <div>
        {/* ==================================================
            GYM CARD - FITCAMP SENAYAN
        ================================================== */}
        <div className=" lg:w-full       hidden
          md:flex lg:flex-col md:flex-col rounded-3xl h-4/12 gap-4 bg-white px-5 py-5 shadow">
          
          {/* ==================== GYM INFO ==================== */}
          <div>
            <div className="flex flex-col justify-between mb-4 gap-1">
              <h3 className="text-sm font-bold">
                Fitcamp Senayan City Victory
              </h3>

              {/* Location */}
              <div className="flex  items-center gap-2">
                <img
                  src="/src/assets/images/location.png"
                  alt="Location"
                />

                <p className="text-xs text-[#778899]">
                  Senayan, Jakarta Selatan
                </p>
              </div>
            </div>

            {/* Gym Image */}
            <img
              src="/src/assets/images/image.png"
              alt="Fitcamp Senayan City Victory"
              className="rounded-2xl
              w-full"
            />

            {/* Facilities Header */}
            <div className="flex h-full w-full justify-between mt-4">
              <p className="text-start text-xs font-bold">
                Facilities
              </p>

              <p className="text-xs text-[#660066]">
                View all
              </p>
            </div>
          </div>

          {/* ==================================================
              FACILITIES - ROW 1
          ================================================== */}
          <div className="flex w-full  justify-between  py-4">

            {/* Sauna */}
            <div className="flex  flex-col">
              <img
                src="/src/assets/images/Sauna.png"
                alt="Sauna"
                className="size-12"
              />

              <h4 className="text-xs font-bold">
                Sauna
              </h4>

              <p className="text-xs text-[#778899]">
                Relax Body
              </p>
            </div>

            {/* Shower */}
            <div className="flex  flex-col">
              <img
                src="/src/assets/images/Shower Room.png"
                alt="Shower Room"
                className="size-12"
              />

              <h4 className="text-xs font-bold">
                Shower
              </h4>

              <p className="text-xs text-[#778899]">
                After Gym
              </p>
            </div>

            {/* Locker */}
            <div className="flex  flex-col">
              <img
                src="/src/assets/images/Locker.png"
                alt="Locker"
                className="size-12"
              />

              <h4 className="text-xs font-bold">
                Locker
              </h4>

              <p className="text-xs text-[#778899]">
                Saving Bag
              </p>
            </div>
          </div>

          {/* ==================================================
              FACILITIES - ROW 2
          ================================================== */}
          <div className="flex w-full justify-between gap-2 py-4">

            {/* Cardio */}
            <div className="flex  flex-col">
              <img
                src="/src/assets/images/Cardio.png"
                alt="Cardio"
                className="size-10"
              />

              <h4 className="text-xs font-bold">
                Cardio
              </h4>

              <p className="text-xs text-[#778899]">
                Heart Rate
              </p>
            </div>

            {/* Mattress */}
            <div className="flex  flex-col">
              <img
                src="/src/assets/images/Matras.png"
                alt="Mattress"
                className="size-10"
              />

              <h4 className="text-xs font-bold">
                Mattress
              </h4>

              <p className="text-xs text-[#778899]">
                Equipment
              </p>
            </div>

            {/* Machine */}
            <div className="flex  flex-col">
              <img
                src="/src/assets/images/Machine1.png"
                alt="Machine"
                className="size-10"
              />

              <h4 className="text-xs font-bold">
                Machine
              </h4>

              <p className="text-xs text-[#778899]">
                Saving Bag
              </p>
            </div>
          </div>

          {/* ==================== DIVIDER ==================== */}
          <img
            src="/src/assets/images/Line 1.png"
            alt="Divider"
            className="w-full"
          />

          {/* ==================================================
              OPERATIONAL TIME
          ================================================== */}
          <div className="flex h-full w-full items-center  gap-2 mt-1 py-1">

            {/* Operational Time Icon */}
            <div className=" w-2/12 ">
              <img
                src="/src/assets/images/Operational Time.png"
                alt="Operational Time"
                className="size-10"
              />
            </div>

            {/* Operational Time Text */}
        
            <div className="   gap-1 flex  w-10/12  flex-col">
              <h4 className="text-xs font-bold">
                Opening Work
              </h4>

              <p className="text-xs text-[#778899]">
                05:00 AM - 11:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}
export default CardSenyyan