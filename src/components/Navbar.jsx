import React from "react";

function Navbar() {
  return (
<header className="my-header text-gray-600 body-font bg-[#252525]">
  <div className="container mx-auto flex flex-wrap px-5 py-4 md:py-8 flex-col md:flex-row items-center justify-between">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 text-center w-full">
      <span className="text-xl text-green-500 mx-auto flex pt-2 ">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Eo_circle_green_white_letter-h.svg/2048px-Eo_circle_green_white_letter-h.svg.png" style={{maxHeight: '40px'}} className="mr-4 pt-1"/>
        Favorite Movie Directory
      </span>
    </a>
  </div>
</header>

  );
}

export default Navbar;
