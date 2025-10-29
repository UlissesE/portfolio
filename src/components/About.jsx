export default function About() {
  return (
    <section
      id="sobre"
      className="relative p-4 flex min-h-screen bg-gradient-to-t from-black to-cyan-950/30"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl my-24 text-center text-cyan-400 font-bold font-mono">
          Sobre mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full aspect-square rounded-2xl border-5 border-cyan-500/30 object-contain">
            <img
              src="./src/assets/images/photo.jpg"
              alt=""
              className="h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-gray-500 leading-7 font-mono whitespace-normal">
            <p className="mb-4">
              Olá! Sou Eduardo Ulisses, um desenvolvedor Full Stack em
              crescimento e estudante de Engenharia de Software na {" "}
              <a
                href="https://www.fiap.com.br"
                target="_blank"
                className="text-cyan-400 font-bold"
              >
                FIAP
              </a>
              .
            </p>
            <p className="mb-4">
              Minha paixão por tecnologia nasceu no final de 2024, pouco antes
              de conquistar uma bolsa integral <strong>(100% ProUni)</strong> para cursar
              Engenharia de Software na FIAP. <br /><br />Sou um profissional proativo,
              dedicado à busca constante por melhores práticas de codificação e
              à exploração das tecnologias mais atuais.
            </p>
            <p className="mb-4">
              Atualmente, meu foco é ingressar em um <strong>programa de estágio</strong> para
              traduzir minhas habilidades em projetos reais. Busco uma
              oportunidade para aplicar meu conhecimento técnico, ganhar
              experiência prática de mercado e expandir minha visão profissional
              no setor de tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
