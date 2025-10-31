import "../assets/css/Hero.css";
import TextType from "./reactBits/TextType";
import LiquidEther from "./reactBits/LiquidEther";
import * as motion from "motion/react-client";
import { Sparkles, Rocket, Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate("");

  return (
    <section className="relative h-screen flex justify-center overflow-hidden">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: 1,
          opacity: 3 / 10,
        }}
      >
        <LiquidEther
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
          autoResumeDelay={0}
          autoRampDuration={0.6}
        />
      </div>

      <div className="my-auto relative text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.8, type: "spring" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-cyan-500/30 blur-sm"
              style={{ width: "120px", height: "120px" }}
            />
            <div className="relative w-28 h-28 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center border-2 border-cyan-400/50">
              <Rocket className="w-14 h-14 text-cyan-400" />
            </div>
          </div>
        </motion.div>

        <div className="z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="z-10 relative text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent font-bold">
              Eduardo Ulisses
            </h1>
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 flex justify-center"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4"
          >
            <TextType
              text={[
                "Desenvolvedor Full Stack em Formação",
                "Engenharia de Software na FIAP",
              ]}
              typingSpeed={75}
              pauseDuration={2500}
              showCursor={true}
              cursorCharacter="|"
              className="z-10 relative text-xl md:text-3xl text-cyan-200/70 mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => navigate("sobre")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black rounded-xl transition-all shadow-lg shadow-cyan-500/50 min-w-[200px]"
            >
              <span className="flex items-center justify-center gap-2">
                Sobre Mim
              </span>
            </motion.button>

            <motion.button
              onClick={() => navigate("projetos")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 rounded-xl transition-all backdrop-blur-sm min-w-[200px] cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2">
                Ver Projetos
              </span>
            </motion.button>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center gap-8 text-cyan-400/40"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code2 className="w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              <Rocket className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
