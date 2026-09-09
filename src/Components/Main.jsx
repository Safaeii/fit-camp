import Hiro from "./Hiro"
import Home  from"./Home"
import Category from "./Category"
import Detail from "./Detail"
import SubcribePackage from "./SubcribePackage"

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
<div >
    <Detail/>
</div>
<div>
    <SubcribePackage/>
</div>
</div>
)

}
export default Main