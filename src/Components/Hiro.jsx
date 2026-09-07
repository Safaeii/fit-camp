

import Header from "./Header"
import Profaile from "./Profile"
import MainHiro from "./MainHiro"
import AddressSection from "./AddressSectio"

function Hiro() {
    return (
        <div className="relative w-screen h-screen bg-[#9FDDFF]">

            <Header />

            <div className="relative z-20">
                <Profaile />
            </div>

            <div className="relative z-10">
                <MainHiro />
            </div>
<div className=" relative z-20  ">
    <AddressSection/>
</div>
        </div>
    )
}

export default Hiro
