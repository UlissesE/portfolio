import { Outlet } from "react-router-dom";
import "./assets/css/App.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      {/* Conteúdo principal acima do vídeo */}
      <div className="relative z-10 bg-black min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
