import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

import logo from "../assets/images/logo.png";
import HamburguerComponent from "./HamburgerComponent";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 shadow-md backdrop-blur-xs">
      <div className="relative flex justify-between items-center py-2 px-10 lg:px-30">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "w-20 h-auto rotate-360 transition-transform duration-1000"
              : "w-20 h-auto hover:rotate-360 transition-transform duration-1000"
          }
        >
          <img src={logo} alt="" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap md:gap-10 text-white text-lg">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `nav-links relative transition-colors
                        ${isActive
                          ? " text-cyan-400 hover:text-cyan-800"
                          : "text-white hover:text-cyan-400"}`
                      }
                    >
                      Início
                    </NavLink>
                  </li>
          <li>
            <NavLink
              to="/projetos"
                className={({ isActive }) =>
                `nav-links relative transition-colors
                ${isActive
                  ? " text-cyan-400 hover:text-cyan-800"
                  : "text-white hover:text-cyan-400"}`
              }
            >
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                `nav-links relative transition-colors
                ${isActive
                  ? " text-cyan-400 hover:text-cyan-800"
                  : "text-white hover:text-cyan-400"}`
              }
            >
              Sobre
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden">
          <Hamburger color="cyan" toggled={open} toggle={setOpen} />
        </div>
      </div>

      {open && <HamburguerComponent closeMenu={() => setOpen(false)}/>}
    </nav>
  );
}
