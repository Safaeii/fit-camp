function Card4(){
    return (
        <div>


 <div>
        {/* ==================================================
            GYM CARD - FITCAMP SENAYAN
        ================================================== */}
        <div className=" lg:w-full rounded-3xl  h-4/12 gap-4 bg-white px-5 py-5 shadow">
          
          {/* ==================== GYM INFO ==================== */}
          <div>
            <div className="flex flex-col justify-between gap-2">
              <h3 className="text-sm font-bold">
                Fitcamp Senayan City Victory
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2">
                <img
                  src="/src/assets/images/location.png"
                  alt="Location"
                />

                <p className="text-xs opacity-70">
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
            <div className="flex h-full w-full justify-between">
              <p className="text-start text-xs font-bold">
                Facilities
              </p>

              <p className="text-xs opacity-70">
                View all
              </p>
            </div>
          </div>

          {/* ==================================================
              FACILITIES - ROW 1
          ================================================== */}
          <div className="flex w-full justify-between gap-2 py-4">

            {/* Sauna */}
            <div className="flex w-4/12 flex-col">
              <img
                src="/src/assets/images/Sauna.png"
                alt="Sauna"
                className="size-10"
              />

              <h4 className="text-xs font-bold">
                Sauna
              </h4>

              <p className="text-xs opacity-70">
                Relax Body
              </p>
            </div>

            {/* Shower */}
            <div className="flex w-4/12 flex-col">
              <img
                src="/src/assets/images/Shower Room.png"
                alt="Shower Room"
                className="size-10"
              />

              <h4 className="text-xs font-bold">
                Shower
              </h4>

              <p className="text-xs opacity-70">
                After Gym
              </p>
            </div>

            {/* Locker */}
            <div className="flex w-4/12 flex-col">
              <img
                src="/src/assets/images/Locker.png"
                alt="Locker"
                className="size-10"
              />

              <h4 className="text-xs font-bold">
                Locker
              </h4>

              <p className="text-xs opacity-70">
                Saving Bag
              </p>
            </div>
          </div>

          {/* ==================================================
              FACILITIES - ROW 2
          ================================================== */}
          <div className="flex w-full justify-between gap-2 py-4">

            {/* Cardio */}
            <div className="flex w-4/12 flex-col">
              <img
                src="/src/assets/images/Cardio.png"
                alt="Cardio"
                className="size-10"
              />

              <h4 className="text-xs font-bold">
                Cardio
              </h4>

              <p className="text-xs opacity-70">
                Heart Rate
              </p>
            </div>

            {/* Mattress */}
            <div className="flex w-4/12 flex-col">
              <img
                src="/src/assets/images/Matras.png"
                alt="Mattress"
                className="size-10"
              />

              <h4 className="text-xs font-bold">
                Mattress
              </h4>

              <p className="text-xs opacity-70">
                Equipment
              </p>
            </div>

            {/* Machine */}
            <div className="flex w-4/12 flex-col">
              <img
                src="/src/assets/images/Machine1.png"
                alt="Machine"
                className="size-10"
              />

              <h4 className="text-xs font-bold">
                Machine
              </h4>

              <p className="text-xs opacity-70">
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
          <div className="flex h-full w-full items-center gap-2 py-4">

            {/* Operational Time Icon */}
            <div className=" w-full">
              <img
                src="/src/assets/images/Operational Time.png"
                alt="Operational Time"
                className="size-10"
              />
            </div>

            {/* Operational Time Text */}
            <div className="ml-13 flex flex-col">
              <h4 className="text-xs font-bold">
                Opening Work
              </h4>

              <p className="text-xs opacity-70">
                05:00 AM - 11:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>


        </div>
    )
}
export default Card4