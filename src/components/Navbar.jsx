import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".nav-toggle")
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent ">
      <div className="h-[90px] flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-3">
          <img src="/vFilms.png" alt="brand" className="h-6 w-auto md:h-8" />
        </div>

        <div
          ref={menuRef}
          className={`flex items-center transition-all duration-300 gap-4
            ${
              isOpen ? "md:flex" : "md:flex"
            } /* keep md layout always available; visibility controlled below */`}
        >
          <div
            className={`hidden md:flex items-center gap-6 mr-4
              ${
                isOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-1"
              }`}
            aria-hidden={!isOpen}
          >
            <ul className="flex items-center gap-6 text-black font-normal text-base">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition cursor-pointer ${
                      isActive
                        ? "text-[#B2431F] font-semibold"
                        : "hover:text-[#B2431F]"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `transition cursor-pointer ${
                      isActive
                        ? "text-[#B2431F] font-semibold"
                        : "hover:text-[#B2431F]"
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `transition cursor-pointer ${
                        isActive
                          ? "text-[#B2431F] font-semibold"
                          : "hover:text-[#B2431F]"
                      }`
                    }
                  >
                    Their Story
                  </NavLink>
                </li>
              </li>

              <li>
                <NavLink
                  to="/our-story"
                  className={({ isActive }) =>
                    `transition cursor-pointer ${
                      isActive
                        ? "text-[#B2431F] font-semibold"
                        : "hover:text-[#B2431F]"
                    }`
                  }
                >
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vernam"
                  className={({ isActive }) =>
                    `transition cursor-pointer ${
                      isActive
                        ? "text-[#B2431F] font-semibold"
                        : "hover:text-[#B2431F]"
                    }`
                  }
                >
                  Vernam
                </NavLink>
              </li>
            </ul>
            <button className="flex items-center gap-2 bg-[#B2431F] text-white px-5 py-2 rounded-full hover:bg-[#FF9D7DB2] hover:text-[#B2431F] transition">
              Let's Talk
              <HiOutlineMail className="text-xl" />
            </button>
          </div>
          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((s) => !s)}
            className="nav-toggle ml-4 md:ml-0"
          >
            <img
              src={isOpen ? "/Vector.png" : "/Vector (1).png"}
              alt="toggle"
              className="h-6 w-6 md:h-8 md:w-8 transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden w-full bg-[url('/BG.png')] bg-cover bg-center backdrop-blur-sm transition-all duration-300 overflow-hidden
          ${isOpen ? "max-h-[360px] py-4" : "max-h-0 py-0"}`}
      >
        <div className="px-6 flex flex-col gap-4 items-start">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full text-right transition py-2 ${
                isActive
                  ? "text-[#B2431F] font-semibold"
                  : "text-black hover:text-[#B2431F]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `w-full text-right transition py-2 ${
                isActive
                  ? "text-[#B2431F] font-semibold"
                  : "text-black hover:text-[#B2431F]"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `w-full text-right transition py-2 ${
                isActive
                  ? "text-[#B2431F] font-semibold"
                  : "text-black hover:text-[#B2431F]"
              }`
            }
          >
            Their Story
          </NavLink>

          <NavLink
            to="/our-story"
            className={({ isActive }) =>
              `w-full text-right transition py-2 ${
                isActive
                  ? "text-[#B2431F] font-semibold"
                  : "text-black hover:text-[#B2431F]"
              }`
            }
          >
            Our Story
          </NavLink>
          <NavLink
            to="/vernam"
            className={({ isActive }) =>
              `w-full text-right transition py-2 ${
                isActive
                  ? "text-[#B2431F] font-semibold"
                  : "text-black hover:text-[#B2431F]"
              }`
            }
          >
            Varnam
          </NavLink>

          <div className="w-full flex justify-end">
            <button className="flex items-center gap-2 bg-[#B2431F] text-white px-5 py-2 rounded-full hover:bg-[#FF9D7DB2] hover:text-[#B2431F] transition">
              Let's Talk
              <HiOutlineMail className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
