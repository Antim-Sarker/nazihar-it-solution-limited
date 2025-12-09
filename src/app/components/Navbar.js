"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const navLinks = ["Services", "Products", "Partners", "Clients"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const handleDesktopDropdownLinkClick = () => {
    setIsDesktopDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">

      {/* MAIN NAV CONTAINER */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 lg:h-24 w-full">

          {/* LEFT LOGO */}
          <div className="flex items-center h-full flex-shrink-0">
            <Link href="#home" className="flex items-center h-full">
              <Image
                src="/logo.png"
                alt="Logo"
                width={112} // lg:w-28
                height={80} // lg:h-20
                className="object-contain"
              />
            </Link>
          </div>

          {/* RIGHT SIDE NAV (TOP + BOTTOM MENUS) */}
          <div className="hidden md:flex flex-col items-end justify-center h-full">

            {/* TOP MENU */}
            <div className="flex items-center text-sm text-gray-600 space-x-6 mb-2">
              <Link
                href="https://nazihargroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1 hover:scale-110 transition"
              >
                <Image src="/nazihar.png" width={34} height={34} alt="Company Logo" />
              </Link>

              <Link href="#careers" className="hover:bg-orange-500 hover:text-white px-3 py-1 rounded transition">
                Careers
              </Link>

              <Link href="#news" className="hover:bg-orange-500 hover:text-white px-3 py-1 rounded transition">
                News & Events
              </Link>

              <Link
                href="#contact"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-1 rounded-full transition"
              >
                Contact
              </Link>
            </div>

            {/* BOTTOM MAIN NAV */}
            <div className="flex items-center h-full">
              <ul className="flex items-center space-x-6 lg:space-x-8">

                {/* About Dropdown */}
                <li className="relative">
                  <button
                    onClick={() =>
                      setIsDesktopDropdownOpen(!isDesktopDropdownOpen)
                    }
                    className="text-gray-900 font-medium text-sm lg:text-base"
                  >
                    About
                  </button>

                  {isDesktopDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white shadow-lg z-10 p-2 rounded-lg w-44 flex flex-col">
                      <Link
                        href="#who-we-are"
                        className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded transition"
                        onClick={handleDesktopDropdownLinkClick}
                      >
                        Who We Are
                      </Link>
                      <Link
                        href="#expertise"
                        className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded transition"
                        onClick={handleDesktopDropdownLinkClick}
                      >
                        Expertises
                      </Link>
                      <Link
                        href="#certifications"
                        className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded transition"
                        onClick={handleDesktopDropdownLinkClick}
                      >
                        Certifications
                      </Link>
                      <Link
                        href="#scr"
                        className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded transition"
                        onClick={handleDesktopDropdownLinkClick}
                      >
                        CSR
                      </Link>
                    </div>
                  )}
                </li>

                {/* Other Links */}
                {navLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-900 hover:bg-orange-500 hover:text-white px-3 py-1 rounded transition font-medium text-sm lg:text-base"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden menu-button flex items-center">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200 mobile-menu"
      >
        <div className="px-4 py-6 space-y-4">

          {/* Mobile About Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex items-center justify-between w-full text-gray-700 font-medium"
            >
              About <span>{isMobileDropdownOpen ? "▲" : "▼"}</span>
            </button>

            {isMobileDropdownOpen && (
              <div className="mt-2 bg-white border rounded-lg shadow-lg flex flex-col">
                <Link
                  href="#who-we-are"
                  className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded transition"
                  onClick={handleMobileLinkClick}
                >
                  Who We Are
                </Link>
                <Link
                  href="#expertise"
                  className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded transition"
                  onClick={handleMobileLinkClick}
                >
                  Expertises
                </Link>
                <Link
                  href="#certifications"
                  className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded transition"
                  onClick={handleMobileLinkClick}
                >
                  Certifications
                </Link>
                <Link
                  href="#scr"
                  className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded transition"
                  onClick={handleMobileLinkClick}
                >
                  CSR
                </Link>
              </div>
            )}
          </div>

          {/* Other Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-700 hover:bg-orange-500 hover:text-white px-3 py-1 rounded transition"
              onClick={handleMobileLinkClick}
            >
              {link}
            </Link>
          ))}

          <Link
            href="#careers"
            className="block text-gray-700 hover:bg-orange-500 hover:text-white px-3 py-1 rounded transition"
            onClick={handleMobileLinkClick}
          >
            Careers
          </Link>

          <Link
            href="#news"
            className="block text-gray-700 hover:bg-orange-500 hover:text-white px-3 py-1 rounded transition"
            onClick={handleMobileLinkClick}
          >
            News & Events
          </Link>

          <Link
            href="#contact"
            className="block text-white bg-orange-600 text-center py-2 rounded hover:bg-orange-700 transition"
            onClick={handleMobileLinkClick}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
