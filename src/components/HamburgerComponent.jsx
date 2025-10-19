import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HamburguerComponent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <Hamburger color="white" toggled={open} toggle={setOpen} />

      {open && (
        <div className="absolute right-0 top-17.5 text-white text-right w-[200px] bg-black/90 py-4">
                <ul className="flex md:hidden flex-col gap-5 text-white text-lg">
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
      )}
    </div>
  );
}
