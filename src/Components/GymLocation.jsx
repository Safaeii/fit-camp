

import { useState } from "react";

function GymLocation() {
  const [current, setCurrent] = useState(0);

  const items = [
    {
      img: "/src/assets/images/Jakarta.png",
      text: "Jakarta",
    },
    {
      img: "/src/assets/images/Bandung.png",
      text: "Bandung",
    },
    {
      img: "/src/assets/images/Surabaya.png",
      text: "Surabaya",
    },
    {
      img: "/src/assets/images/Surabaya.png",
      text: "Madura",
    },
    {
      img: "/src/assets/images/Denpasar.png",
      text: "Bali",
    },
    {
      img: "/src/assets/images/Padang.png",
      text: "Padang",
    },
    {
      img: "/src/assets/images/Yogyakarta.png",
      text: "Semarang",
    },
  ];

  const prev = () => {
    setCurrent((current) => (current - 1 + items.length) % items.length);
  };

  const next = () => {
    setCurrent((current) => (current + 1) % items.length);
  };

  return (
    <section className="w-full px-6 lg:px-12 xl:px-20">
      
      {/* ================= MOBILE ================= */}
      <div className="md:hidden w-full flex items-center justify-center gap-2 -mt-80 relative z-20">

        {/* Previous */}
        <button
          onClick={prev}
          className="w-1/12 text-black text-3xl"
        >
          ‹
        </button>

        {/* Mobile Card */}
        <div className="w-10/12 flex flex-col items-center justify-center gap-4 bg-white shadow rounded-3xl py-5">

          <h3 className="font-bold text-xl">
            Gym Location
          </h3>

          <img
            src={items[current].img}
            alt={items[current].text}
            className="w-2/12 aspect-square object-contain"
          />

          <p className="text-black text-sm font-bold">
            {items[current].text}
          </p>

        </div>

        {/* Next */}
        <button
          onClick={next}
          className="w-1/12 text-black text-3xl"
        >
          ›
        </button>

      </div>


      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex flex-col w-full gap-7 items-center">

        {/* Title */}
        <div className="w-6/12 lg:w-6/12 flex flex-col gap-8 lg:pt-60   items-center ">

          <h3 className="font-bold text-xl">
            Gym Location
          </h3>

          <p className="text-sm text-center">
            Find the nearby gym that near your location
            to transform your healthy journey
          </p>

        </div>


        {/* Locations */}
        <div className="w-full flex flex-wrap items-center justify-center gap-4 lg:pb-20">

          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                justify-between
                gap-3
                bg-white
                shadow
                rounded-full
                px-3
                py-3
                w-2/12
                min-w-[100px]'
              "
            >

              <img
                src={item.img}
                alt={item.text}
                className="w-3/12 aspect-square object-contain"
              />

              <p className="text-xs whitespace-nowrap">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default GymLocation;