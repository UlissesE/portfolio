import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import HamburguerComponent from "./HamburgerComponent";

export default function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <header className="fixed w-full top-0 z-50 py-2 px-10 lg:px-30 shadow-md backdrop-blur-xs">
      <div className="relative flex justify-between items-center">
        <Link to="/" className="w-20 h-auto">
          <img src={logo} alt="" />
        </Link>
        <div className="fixed right-5 block md:hidden">
          <HamburguerComponent />
        </div>
        <ul className="hidden md:flex flex-wrap md:gap-10 text-white text-lg">
          <li>
            <Link to="/projetos" className="text-white hover:text-cyan-400 transition-colors">Projetos</Link>
          </li>
          <li>
            <Link to="/sobre" reloadDocument className="text-white hover:text-cyan-400 transition-colors">Sobre</Link>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("/sobre", "habilidades")}
              className="text-white hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Habilidades
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("/sobre", "contato")}
              className="text-white hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
