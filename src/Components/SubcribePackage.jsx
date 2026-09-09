import Header from "./Header"
import GymCard1 from "./GymCard1"
import GymCard2 from "./GymCard2"
import GymCard3 from "./GymCard3"
function SubcribePackage(){
    return(
        <div className=" py-20">
<Header/>
{/* ==========1========= */}
<div className=" flex flex-col justify-center items-center py-10 ">
    <h3>  Subscribe Package</h3>
    <p> Find the perfect plan, explore our subscription packages. Discover the bes package for you</p>
<div className="flex lg:flex-row flex-col  lg:justify-center-safe gap-7">
<GymCard1/>
<GymCard2/>
<GymCard3/>
</div>
</div>

        </div>
    )
}
export default SubcribePackage