

import GymLocation from "./GymLocation";
import ProductCard from "./ProductCard";
import ProductReviews from "./ProductReviews"
import ProductDetails from "./ProductDetal"
import Footer from "./Footer";
function Section() {
  return (
    <section
      className="
        w-full
        bg-[#E1F5FE]
        pb-20
        sm:pb-24
        lg:pb-30
        pt-10
        sm:pt-16
        lg:pt-10
      "
    >

      {/* ================= GYM LOCATION ================= */}
      <div className="w-full">
        <GymLocation />
      </div>

      {/* ================= PRODUCT CARD ================= */}
      <div className="w-full mt-5 sm:mt-6 lg:mt-5 bg-[#E1F5FE] flex ">
        <ProductCard />
      </div>
          {/* ================= PRODUCT REVIEWS ================= */}
          <div className=" bg-[#E1F5FE] ">
            <ProductReviews/>
          </div>
             {/* ================= ProductDetails================= */}
<ProductDetails/>
    {/* ================= footer================= */}
<div className="bg-[#E1F5FE]">
  <Footer/>
</div>
    </section>
  );
}

export default Section;