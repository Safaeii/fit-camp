import Hiro from "./Hiro"
import Home  from"./Home"
import Category from "./Category"
import Detail from "./Detail"


function Main(){
return(
<div >
    {/* =======Hiro====== */}
<Hiro/>
<div >
    {/* =========Home======= */}
<Home/>
</div>
{/* =======Category===== */}
<div>
<Category/>
</div>
{/* =======Detail===== */}
<div className="bg-[#9FDDFF]">
    <Detail/>
</div>
</div>
)

}
export default Main