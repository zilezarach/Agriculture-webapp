"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { TiHome } from "react-icons/ti";

import { IoMdContact } from "react-icons/io";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
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
        <Image src="/Gok.png" alt="logo" height={198} width={200} />
        <Image src="/logo.png" alt="logo" height={400} width={195} />
      </div>
      <div className={`navLinks ${isMobileOpen ? "active" : ""}`}>
        <li>
          <Link href="/">
            Home
            <TiHome />
          </Link>
        </li>
        <li>
          <button
            onClick={handleDropdownToggle}
            className="flex items-center gap-1 p-3 hover:text-green-600 hover:underline"
          >
            Services
            <RiServiceFill className="ml-1" />
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a
                  href="/MassMedia"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Mass Media
                </a>
              </li>
              <li>
                <a
                  href="/TrainingUnit"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Training Unit and Accommodation
                </a>
              </li>
              <li>
                <a
                  href="/PrintingDesign"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Printing and Design
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/Media center">
            Media Center
            <GrMultimedia />
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
            <IoMdContact />
          </Link>
        </li>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
