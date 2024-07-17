'use client'

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { TiHome } from "react-icons/ti"
import { FaServicestack } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu";
import { GrMultimedia } from "react-icons/gr";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <nav className="navbar">
      <div className="logoContainer">
        <Image
          src='/Gok.png'
          alt="logo"
          height={198}
          width={200}

        />
        <Image
          src="/logo.png"
          alt="logo"
          height={400}
          width={195}

        />
      </div>
      <div className={`navLinks ${isMobileOpen ? 'open' : ''}`}>
        <li><Link href="/">Home<TiHome /></Link></li>
        <li><button onClick={handleDropdownToggle} className="hover:text-green-600 hover:underline focus:outline-none">Services<FaServicestack /></button>{isDropdownOpen && (
          <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
            <li><a href="/MassMedia" className="block px-4 py-2 hover:bg-gray-100">Mass Media</a></li>
            <li><a href="/TrainingUnit" className="block px-4 py-2 hover:bg-gray-100">Training Unit and Accommodation</a></li>
            <li><a href="/PrintingDesign" className="block px-4 py-2 hover:bg-gray-100">Printing and Design</a></li>
          </ul>
        )}
        </li>
        <li><Link href="/Mediacenter">Media Center<GrMultimedia /></Link></li>
        <li><Link href="/contact">Contact<IoMdContact /></Link></li>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  )
};


export default Navbar;
