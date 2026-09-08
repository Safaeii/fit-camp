

import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full h-auto px-6 lg:px-12 xl:px-20 py-5 mb-10">
      <div className="flex items-center justify-between w-full">

        {/* Logo + Brand */}
        <div className="flex items-center w-3/12 lg:w-2/12 gap-2">
          <img
            src="/src/assets/images/Logo.png"
            alt="logo"
            className="w-1/12 h-1/12 min-w-7 min-h-7"
          />

          <p className="text-[15px] font-bold whitespace-nowrap">
            FITCAMP
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-center w-7/12 gap-8">
          <a href="#" className="text-[8px] no-underline">
            Subscribe Plan
          </a>

          <a href="#" className="text-[8px] no-underline">
            Blog
          </a>

          <a href="#" className="text-[8px] no-underline">
            Testimonial
          </a>

          <a href="#" className="text-[8px] no-underline">
            About
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex justify-end w-3/12">
          <button className="bg-[#606DE5] py-2 px-4 rounded-full text-[8px] text-white">
            My Subscription
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden w-1/12">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="absolute right-6 top-16 bg-white shadow-lg rounded-lg p-5 flex flex-col gap-4 z-50">
              <a href="#" className="text-[10px]">
                Subscribe Plan
              </a>

              <a href="#" className="text-[10px]">
                Blog
              </a>

              <a href="#" className="text-[10px]">
                Testimonial
              </a>

              <a href="#" className="text-[10px]">
                About
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;