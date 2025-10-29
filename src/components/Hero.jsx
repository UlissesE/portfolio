import "../assets/css/Hero.css";
import TextType from "./reactBits/TextType";
import LiquidEther from "./reactBits/LiquidEther";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div style={{ width: "100%", height: '100%', position: "relative" }}>
        <LiquidEther
          // colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          colors={["#FF9FFC", "#5227FF", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="absolute z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="mb-6 text-lg text-gray-500">Olá, eu sou</p>
        <h1 className="text-6xl md:text-8xl mb-6 text-cyan-400 font-bold">
          Eduardo Ulisses
        </h1>

        <TextType
          text={[
            "Desenvolvedor Full Stack em Formação",
            "Estudante de Engenharia de Software na FIAP",
          ]}
          typingSpeed={75}
          pauseDuration={2500}
          showCursor={true}
          cursorCharacter="|"
          className="text-xl md:text-2xl text-cyan-200/70 mb-8"
        />

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black rounded-lg transition-colors">
            Ver Projetos
          </button>
          <a
            href="#contato"
            className="px-8 py-3 border-2 border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 rounded-lg transition-colors inline-block"
          >
            Sobre mim
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
