import "../assets/css/Hero.css";
import video from "../assets/videos/video.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <div className="w-full h-full fixed z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl mb-6 text-white">
          Olá, eu sou <span className="text-cyan-400">Ulisses</span>
        </h1>
        <p className="text-xl md:text-2xl text-cyan-200 mb-8">
          Futuro Desenvolvedor Full Stack | Estudante de Engenharia de Software na FIAP
        </p>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
