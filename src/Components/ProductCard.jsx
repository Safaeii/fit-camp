
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
function ProductCard() {
  return (
    <div>
      {/* ==================================================
          HEADER / TOP SECTION
      ================================================== */}
      <div className="flex flex-col w-full px-6 lg:px-25 xl:px-20  ">
        <div className=" justify-between hidden md:flex sm:flex">
          <div>
<h2 className="text-xl font-bold">Latest Added</h2>
        <p className=" text-xs text-[#778899]">
          New gyms from around the city with variety facilities available
        </p>
          </div>
        <button className=" text-sm text-white rounded-full w-20 h-10 bg-black   hidden md:blok sm:block"> See All</button>
        </div>
        
      </div>
       {/* ==================================================
          CARDS SECTION
      ================================================== */}
<div className=" flex flex-col gap-5 mt-10 ">
      {/* ===top=== */}
      <div className=" flex 
      flex-col
      sm:flex-row
      w-screen
    h-10/12
    gap-7
  max-w-7xl
  mx-auto
  px-4
  sm:px-6
      ">
  <Card1/>
     <Card2/>
     <Card3/>
      </div>
      {/* ==boton== */}
      <div className=" flex
            w-screen
             flex-col
      sm:flex-row
    h-10/12
    gap-7
      max-w-7xl
  mx-auto
  px-4
  sm:px-6">
<Card4/>
<Card5/>
<Card6/>
      </div>
</div>
    </div>
  );
}

export default ProductCard;