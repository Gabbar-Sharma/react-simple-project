import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io'; // Close icon

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      data-aos="fade-down"
      className=" shadow-lg w-[100%] fixed z-50 bg-[#353535]"
    >
      {/* Top small heading */}
      <div className="text-center text-[8px] font-normal py-1 md:text-[12px] navbar font-poppins bg-[#284B63]">
        <h1 className="w-[100%]">Soltrix | My Portfolio</h1>
      </div>
      {/* Navbar main */}
      <div className="flex items-center md:px-[7%] px-2 py-2 bg-[#353535] text-[#ffff] font-poppins h-[40px] md:h-[70px] w-[100%] justify-between">
        {/* Logo */}
        <div className="logo text-[18px] md:text-[19px] font-bold">
           <Link to="/home" >
            Soltrix
          </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-[55px] text-[16px] font-medium">
          <Link to="/home" className="navlink">
            Home
          </Link>
          <Link to="/about" className="navlink ">
            About
          </Link>
          <Link to="/contact" className="navlink ">
            Contact
          </Link>
          <Link to="/login" className="navlink ">
            Login
          </Link>
        </ul>
        {/* Mobile Hamburger / Close Icon */}
        <div className="md:hidden cursor-pointer" onClick={handleMenu}>
          {menuOpen ? (
            <IoMdClose className="text-white text-2xl" />
          ) : (
            <CiMenuFries className="text-white text-2xl" />
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden text-white bg-[#353535] flex flex-col gap-5 py-5 px-4  animate-slideDown">
          <Link
            to="/home"
            className="navlink "
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="navlink "
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="navlink "
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="navlink "
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
