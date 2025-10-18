import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

export default function Navbar() {
    return (
        <header className="fixed w-full top-0 z-50 py-2 px-5 lg:px-30 shadow-md backdrop-blur-xs">
            <div className="flex justify-between items-center">
                <Link to="/" className="w-20 h-auto"><img src={logo} alt="" /></Link>
                <ul className="flex flex-wrap lg:gap-10 text-white text-lg">
                    <li>
                        <Link>Sobre</Link>
                    </li>
                    <li>
                        <Link>Projetos</Link>
                    </li>
                    <li>
                        <Link>Habilidades</Link>
                    </li>
                    <li>
                        <Link>Contato</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}