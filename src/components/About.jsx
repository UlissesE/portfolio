export default function About() {
  return (
    <section id="sobre" className="py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl mb-12 text-center text-cyan-400">Sobre mim</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full aspect-square rounded-2xl border-5 border-cyan-500/30 object-contain">
            <img
              src="./src/assets/images/photo.jpg"
              alt=""
              className="h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-cyan-100">
            <p className="mb-4">
              Olá! Sou Eduardo Ulisses, tenho 19 anos, e sou estudante de
              Engenharia de Software na{" "}
              <a
                href="https://www.fiap.com.br"
                target="_blank"
                className="text-cyan-400"
              >
                FIAP
              </a>
              , renomada universidade de tecnologia no Brasil, a qual consegui
              100% de bolsa via ProUni.
            </p>
            <p className="mb-4">
              Minha jornada no mundo da tecnologia começou há pouco tempo, no
              finalzinho de 2024, poucos meses antes de entrar na faculdade, e
              desde então tenho me dedicado a aprender e evoluir constantemente,
              sempre buscando as melhores práticas e tecnologias mais recentes.
            </p>
            <p className="mb-4">
              Quando não estou programando, gosto de explorar novas tecnologias,
              andar de bike para onde meu coração me levar, e fazer uma leitura
              (agora tentando Nietzche).
            </p>
            <p>
              Atualmente, estou procurando uma oportunidade de ingressar num
              programa de estágio, para aplicar a tecnologia que eu sei e
              ingressar no mercado, ampliando minha visão profissional em tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
