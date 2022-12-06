import React from "react";
import logo from "../../assets/logowithoutbg.png";
const Header = () => {
  return (
    <div className="flex items-center justify-between bg-red-500 w-1100">
      <img src={logo} alt="logo" className="w-[240px] h-[70px] object-cover" />
    </div>
  );
};

export default Header;
