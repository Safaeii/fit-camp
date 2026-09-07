
 import { useState } from "react";


function ProductReviews() {

const [ selectedProfile,setselectedProfile]=useState(0)


const profiles=[
    {
        img:"/src/assets/images/Profile 1.png",
        name:"Billy Saputra",
        jop:" Product Designer",
          review:"I’ve been a member of this gym for six months, and it’s been a game-changer! The trainers are incredibly knowledgeable and supportive.",
    },
  {
        img:"/src/assets/images/Profile 2.png",
        name:"Billy Saputra",
        jop:" ui Designer",
          review:"I’ve been a member of this gym for six months, and it’s been a game-changer! The trainers are incredibly knowledgeable and supportive.",
    },
      {
        img:"/src/assets/images/Group 16.png.",
        name:"Billy Saputra",
        jop:"  Designer",
          review:"I’ve been a member of this gym for six months, and it’s been a game-changer! The trainers are incredibly knowledgeable and supportive.",
    },
 
]


  return (
    <section className="w-10/12 mx-auto mt-20 px-5">
      {/* ==================== Header ==================== */}
      <div className="flex justify-between items-center pt-5">
        {/* Section title */}
        <h3 className="text-xl font-bold leading-7">
          Joined 10.000+ User
          <br />
          with Happy User
        </h3>

        {/* View all reviews button */}
        <button
          type="button"
          className="w-20 h-10 rounded-full bg-black text-sm text-white 
                     transition-colors duration-200 hover:bg-gray-800"
        >
          See All
        </button>
      </div>

      {/* ==================== Review Card ==================== */}
      <div
        className="mt-10 flex flex-col items-center justify-center gap-4 
                   rounded-3xl bg-white py-6 px-5"
      >
        {/* Review text */}
        <p className="w-8/12 text-center text-xs leading-5 text-gray-600">
          {profiles[selectedProfile].review}
        </p>

        {/* Reviewer information */}
        <div className="flex items-center gap-3">
          {/* Reviewer avatar */}
          <img
            src= {profiles[selectedProfile].img} 
            alt={profiles[selectedProfile].name} 
            className="size-10 rounded-full object-cover"
          />

          {/* Reviewer name and job */}
          <h3 className="text-sm font-bold leading-5">
  {profiles[selectedProfile].name} 
            <br />
            <span className="text-xs font-normal text-gray-500">
{profiles[selectedProfile].jop} 
            </span>
          </h3>
        </div>
      </div>

      {/* ==================== Reviewer Avatars ==================== */}
      <div className="mt-5 flex items-center justify-center">
        {/* Profile 1 */}
        <img onClick={()=>setselectedProfile(0) }
          src="/src/assets/images/Profile 1.png"
          alt="User profile"
          className="size-14 rounded-full object-cover"
        />

        {/* Profile 2 */}
        <img
        onClick={()=>setselectedProfile(1) }
          src="/src/assets/images/Profile 2.png"
          alt="User profile"
          className=" size-14 rounded-full object-cover"
        />

        {/* More users */}
        <img
        onClick={()=>setselectedProfile(2) }
          src="/src/assets/images/Group 16.png.png"
          alt="More users"
          className=" mt-2 size-18 object-contain"
        />
      </div>
    </section>
  );
}

export default ProductReviews;


