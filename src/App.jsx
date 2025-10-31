import { Outlet } from "react-router-dom";
import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import BouncePointsBg from "./components/BouncePointsBg";

export default function App() {
  return (
    <>
      <div className="relative z-10 bg-black min-h-screen">
        <Navbar />
        <BouncePointsBg/>
        <Outlet />
      </div>
    </>
  );
}
