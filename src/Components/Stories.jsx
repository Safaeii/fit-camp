import ManagerCard1 from "./ManagerCard1"
import ManagerCard2 from "./ManagerCard2"
import ManagerCard3 from "./ManagerCard3"
function Stories(){
    return(
        <div className="flex flex-col gap-10 py-10 px-10 justify-between items-center  bg-white rounded-3xl mt-10 ">
            <h3 className="text-xl font-bold text-start"> Happy Stories</h3>
            <div className=" flex flex-col md:flex-row  gap-5 justify-between items-center">
<div className=" flex flex-col gap-5">
    <ManagerCard1/>
        <ManagerCard2/>
            <ManagerCard3/>
</div>
<div className=" flex flex-col gap-5">
    <ManagerCard1/>
        <ManagerCard2/>
            <ManagerCard3/>
</div>
            </div>
            <button className="w-25 h-10 bg-black text-white  text-sm rounded-full"> Load More</button>

        </div>
    )
}
export default Stories