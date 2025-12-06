import { NavLink } from "react-router-dom";

export default function HamburguerComponent({ closeMenu }) {
  return (
    <div className="md:hidden block shadow-md backdrop-blur-xs py-4 border-t border-cyan-500/30 animate-in slide-in-from-top">
      <ul className="flex flex-col gap-3 w-full text-center py-3 px-2 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded text-lg">
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            `w-full nav-links relative transition-colors py-3 px-2 rounded bg-cyan-800 ${
              isActive ? "bg-cyan-800" : "bg-cyan-950"
            }`
          }
        >
          Início
        </NavLink>
        <NavLink
          to="/sobre"
          onClick={closeMenu}
          className={({ isActive }) =>
            `w-full nav-links relative transition-colors py-3 px-2 rounded bg-cyan-800 ${
              isActive ? "bg-cyan-800" : "bg-cyan-950"
            }`
          }
        >
          Sobre
        </NavLink>
        <NavLink
          to="/projetos"
          onClick={closeMenu}
          className={({ isActive }) =>
            `w-full nav-links relative transition-colors py-3 px-2 rounded bg-cyan-800 ${
              isActive ? "bg-cyan-800" : "bg-cyan-950"
            }`
          }
        >
          Projetos
        </NavLink>
      </ul>
    </div>
  );
}
