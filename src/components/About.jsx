import { motion } from "framer-motion";
import { Rocket, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="relative p-4 flex min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mt-24 mb-12"
          initial={{ opacity: 0.2, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-6xl mb-5 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent font-bold">
            Sobre mim
          </h2>
          <p className="text-2xl text-center text-white">
            Desenvolvedor apaixonado por descobrir tecnologia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition"></div>
              <div className="relative w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-900/20 rounded-2xl border-2 border-cyan-500/30 flex items-center justify-center overflow-hidden">
                <img
                  src="./src/assets/images/photo.jpg"
                  alt=""
                  className="h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl mb-4 text-cyan-300 flex items-center gap-3 font-semibold">
                <Rocket className="w-8 h-8" />
                Minha Jornada
              </h2>
              <p className="text-cyan-100/80 leading-relaxed mb-4">
                Olá! Sou Eduardo Ulisses, um desenvolvedor Full Stack em
                crescimento e estudante de Engenharia de Software na{" "}
                <a
                  href="https://www.fiap.com.br"
                  target="_blank"
                  className="text-cyan-400 font-bold"
                >
                  FIAP
                </a>
                .
              </p>
              <p className="text-cyan-100/80 leading-relaxed mb-4">
                Minha paixão por tecnologia nasceu no final de 2024, pouco antes
                de conquistar uma bolsa integral para cursar Engenharia de
                Software na FIAP. Sou um profissional proativo, dedicado à busca
                constante por melhores práticas de codificação e à exploração
                das tecnologias mais atuais.
              </p>
              <p className="text-cyan-100/80 leading-relaxed mb-4">
                Atualmente, meu foco é ingressar em um{" "}
                <strong>programa de estágio</strong> para traduzir minhas
                habilidades em projetos reais. Busco uma oportunidade para
                aplicar meu conhecimento técnico, ganhar experiência prática de
                mercado e expandir minha visão profissional no setor de
                tecnologia.
              </p>
              <div className="flex items-start gap-3 p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-lg mt-10">
                <Heart className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                <p className="text-cyan-100/80">
                  Quando não estou programando, gosto de explorar novas
                  tecnologias, fazer uma boa leitura e fazer algum tipo de 
                  atividade física.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
