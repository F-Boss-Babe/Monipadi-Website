import React, { FC } from "react";
import Logo from "../assets/images/logo.png";
import MenuIcon from "../assets/images/menu-icon.png";
import InstaLogo from "../assets/images/insta-logo.png";
import WhatsappLogo from "../assets/images/whatsapp-logo.png";
// import "./style.css";

const Navbar: FC = () => {
  return (
    <nav className="pt-5 pb-5 px-2 sticky top-0 bg-white z-10">
      <div className="xl:container mx-auto flex items-center">
        <img src={Logo} alt="" className="h-6" />
        <div className="gap-x-7 ml-6 items-center hidden md:flex">
          <a href="#about" className="hover:font-semibold">About</a>
          <a href="#service" className="hover:font-semibold">Services</a>
          <a href="#product" className="hover:font-semibold">Product</a>
        </div>
        <div className="flex ml-auto items-center">
          <div className="hidden md:flex gap-2 items-center">
            <a href="#" className="w-6 h-6">
              <img src={InstaLogo} alt="Instagram" />
            </a>

            <a href="#" className="w-6 h-6">
              <img src={WhatsappLogo} alt="Whatsapp" />
            </a>

            <a href="https://chat.whatsapp.com/Gxqhrz69nXV5ka8YO5TImj" target="_blank" rel="noreferrer" className="bg-[#3A84EF] text-white px-10 py-1 rounded-lg" >Join our Trybe</a>
          </div>
          <button className="md:hidden">
            <img src={MenuIcon} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
