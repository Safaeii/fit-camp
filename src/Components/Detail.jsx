
import Header from "./Header"
import FitCardLoction from "./FitCardLoction"
import Footer from "./Footer"
import Stories from "./Stories"

function Detail() {
    return (
        <div className="w-full flex flex-col items-center bg-[#E1F5FE] mt-30 px-4 lg:px-10">

            {/* ================= HEADER ================= */}
            <div className="w-screen h-50 flex flex-col items-center bg-[#9FDDFF] px-4 lg:px-10">
                <Header />
            </div>


            {/* ================= MAIN CONTENT ================= */}
            <div className="w-full -mt-30 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">


                {/* ================= LEFT ================= */}
                <div className="w-full lg:w-7/12">

                    {/* ================= IMAGES ================= */}
                    <div className="rounded-3xl">
                        <div className="flex flex-col w-full gap-5">

                            {/* Main Image */}
                            <img
                                src="/src/assets/images/Gym 2 (1).png"
                                alt="Gym"
                                className="w-full rounded-3xl"
                            />

                            {/* Thumbnail Images */}
                            <div className="flex justify-between gap-2 items-center">

                                <img
                                    src="/src/assets/images/Gym 2 (1).png"
                                    alt="Gym"
                                    className="w-1/4 rounded-2xl"
                                />

                                <img
                                    src="/src/assets/images/image.png"
                                    alt="Gym"
                                    className="w-1/4 rounded-2xl"
                                />

                                <img
                                    src="/src/assets/images/image2.png"
                                    alt="Gym"
                                    className="w-1/4 rounded-2xl"
                                />

                                <img
                                    src="/src/assets/images/image3.png"
                                    alt="Gym"
                                    className="w-1/4 rounded-2xl"
                                />

                            </div>

                        </div>
                    </div>


{/* ================ FitCardLoction================*/}
<FitCardLoction/>
{/* ==========================Stories================= */}
<Stories/>

                </div>

                {/* ================= RIGHT ================= */}
                <div className="w-full lg:w-4/12 flex flex-col gap-10">


                    {/* ================= MEMBER BENEFITS ================= */}
                    <div className="shadow flex flex-col gap-4 px-5 py-5 items-center rounded-3xl bg-white">

                        <h3 className="text-sm font-bold">
                            Access All Member Benefits
                        </h3>


                        <img
                            src="/src/assets/images/Regular.png"
                            alt="Membership"
                            className="w-10/12"
                        />


                        {/* Benefit 1 */}
                        <div className="flex w-10/12 justify-start gap-4 items-center">

                            <img
                                src="/src/assets/images/tick-circle.png"
                                alt=""
                            />

                            <p className="text-xs">
                                All Class Enrollment
                            </p>

                        </div>


                        {/* Benefit 2 */}
                        <div className="flex w-10/12 justify-start gap-4 items-center">

                            <img
                                src="/src/assets/images/tick-circle.png"
                                alt=""
                            />

                            <p className="text-xs">
                                Workshop & Discount
                            </p>

                        </div>


                        {/* Benefit 3 */}
                        <div className="flex w-10/12 justify-start gap-4 items-center">

                            <img
                                src="/src/assets/images/tick-circle.png"
                                alt=""
                            />

                            <p className="text-xs">
                                Personal Training Session
                            </p>

                        </div>


                        {/* Benefit 4 */}
                        <div className="flex w-10/12 justify-start gap-4 items-center">

                            <img
                                src="/src/assets/images/tick-circle.png"
                                alt=""
                            />

                            <p className="text-xs">
                                Personal Training Session
                            </p>

                        </div>


                        {/* Button */}
                        <button className="w-9/12 h-10 bg-[#606DE5] text-white rounded-3xl">
                            Become Member
                        </button>

                    </div>



                    {/* ================= CONTACT PERSON ================= */}
                    <div className="flex flex-col gap-5 shadow rounded-3xl px-5 py-5 bg-white">

                        <h3 className="text-xs font-bold">
                            Contact Person
                        </h3>


                        <img
                            src="/src/assets/images/Line 3.png"
                            alt=""
                        />


                        <div className="flex justify-start items-center gap-3">

                            <img
                                src="/src/assets/images/Group 17.png"
                                alt="Lilli"
                                className="size-14"
                            />

                            <div>

                                <h3 className="text-xs font-bold">
                                    Lilli Marliin
                                </h3>

                                <p className="text-xs">
                                    021-0200-9911
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <Footer/>

        </div>
    )
}

export default Detail


// 