

import { useState } from "react";

function AddressSection() {
  const [current, setCurrent] = useState(0);

  const items = [
    {
      img: "/src/assets/images/Illustration.png",
      title: "Find Nearby Location",
      text: "Find the nearby gym that near your location to transform your healthy journey.",
    },
    {
      img: "/src/assets/images/Maintain.png",
      title: "Become Membership",
      text: "Access to all Fitcamp gym and become part of our exclusive healthy community.",
    },
    {
      img: "/src/assets/images/Membership.png",
      title: "Maintain The Body",
      text: "Ensure long-term wellness with effective healthy body maintenance strategies.",
    },
  ];

  const prev = () => {
    setCurrent(
      (current) => (current - 1 + items.length) % items.length
    );
  };

  const next = () => {
    setCurrent(
      (current) => (current + 1) % items.length
    );
  };

  return (
    <section className="w-full px-6 lg:px-12 xl:px-20">

      {/* ================= MOBILE ================= */}
      <div
        className="
          md:hidden
          w-full
          flex
          items-center
          justify-center
          gap-1
          -mt-20
          relative
          z-20
        "
      >

        {/* Previous */}
        <button
          onClick={prev}
          className="
            w-1/12
            text-white
            text-3xl
            flex
            justify-center
            items-center
          "
        >
          ‹
        </button>

        {/* Current Card */}
        <div
          className="
            w-10/12
            min-h-50
            bg-white
            shadow
            rounded-3xl
            py-5
            px-4
            flex
            flex-col
            items-center
            justify-center
            gap-3
          "
        >

          {/* Image */}
          <div className="w-3/12 flex justify-center">
            <img
              src={items[current].img}
              alt={items[current].title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Title */}
          <div className="w-10/12 text-center">
            <h5 className="text-sm font-bold">
              {items[current].title}
            </h5>
          </div>

          {/* Text */}
          <div className="w-10/12 text-center">
            <p className="text-xs leading-5">
              {items[current].text}
            </p>
          </div>

        </div>

        {/* Next */}
        <button
          onClick={next}
          className="
            w-1/12
            text-white
            text-3xl
            flex
            justify-center
            items-center
          "
        >
          ›
        </button>

      </div>


      {/* ================= DESKTOP ================= */}
      <div
        className="
          hidden
          md:flex
          w-10/12
          lg:w-10/12
          mx-auto
          bg-white
          shadow
          rounded-2xl
          py-6
          px-4
          -mt-20
        "
      >

        {items.map((item, index) => (
          <div
            key={index}
            className="
              w-4/12
              flex
              flex-col
              items-center
              justify-center
              gap-3
              px-4
            "
          >

            {/* Image */}
            <div className="w-3/12">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Title */}
            <h5 className="w-full text-sm font-bold text-center">
              {item.title}
            </h5>

            {/* Description */}
            <p className="w-10/12 text-xs text-center leading-5">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default AddressSection;
