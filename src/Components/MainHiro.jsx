
function MainHiro() {
    return (
        <div className="">

            {/* 1 */}
            <div className="relative z-20">

                <img
                    src="/src/assets/images/Center Wall.png"
                    alt=""
                    className="-mt-58 h-100 w-screen hidden lg:block"
                />

                <img
                    src="/src/assets/images/Side Wall.png"
                    alt=""
                    className="-mt-108 h-116 w-screen hidden lg:block"
                />

                <img
                    src="/src/assets/images/Hanging Lamp.png"
                    alt=""
                    className="-mt-124 hidden lg:block"
                />

                <img
                    src="/src/assets/images/Boxing Sack.png"
                    alt=""
                    className="lg:ml-15 lg:mt-5 lg:w-25 hidden lg:block"
                />

                <img
                    src="/src/assets/images/Machine.png"
                    alt=""
                    className="lg:ml-220 lg:-mt-82 lg:h-95 lg:w-35 hidden lg:block"
                />

                <img
                    src="/src/assets/images/Person.png"
                    alt=""
                    className="lg:-mt-50 lg:ml-100 lg:w-50 hidden lg:block"
                />
            </div>

            {/* 2 */}
            <div className="relative z-10">
                <img
                    src="/src/assets/images/Floor.png"
                    alt=""
                    className="lg:-mt-25 lg:w-screen hidden lg:block"
                />
            </div>

        </div>
    );
}

export default MainHiro;