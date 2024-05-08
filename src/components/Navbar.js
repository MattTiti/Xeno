import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      } text-black fixed top-0 w-full z-10 transition-colors duration-300`}
    >
      <div className="mx-auto px-16 flex justify-between items-center h-16 text-white">
        <div className="flex items-center">
          {/* <a href="/" className="text-lg"></a> */}
        </div>

        <div className="flex items-center space-x-4 ">
          <a href="/" className="px-3 py-2 hover:text-gray-400">
            HOME
          </a>
          <a href="/1" className="px-3 py-2 hover:text-gray-400">
            DRAWING THE LINE
          </a>
          <a href="/2" className="px-3 py-2 hover:text-gray-400">
            PAINTING PICTURES
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
