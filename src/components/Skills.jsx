import {
  Lightbulb,
  Code2,
  Terminal,
  LucideHammer,
  SpeakerIcon,
} from "lucide-react";

export function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "Tailwind CSS"],
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
    },
    {
      category: "Backend",
      items: ["Python", "Node.js", "PostgreSQL", "REST APIs"],
      icon: Terminal,
      color: "from-blue-500 to-purple-500",
    },
    {
      category: "Ferramentas",
      items: ["Git", "Figma", "VS Code", "Postman"],
      icon: LucideHammer,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Soft Skills",
      items: [
        "Trabalho em Equipe",
        "Comunicação",
        "Resolução de Problemas",
        "Criatividade",
        "Adaptabilidade",
      ],
      icon: SpeakerIcon,
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section
      id="habilidades"
      className="py-20 px-4 relative"
      aria-label="Minhas Habilidades"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <header>
          <h2 className="text-5xl mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent font-bold font-mono">
            Habilidades
          </h2>
        </header>
        <div className="grid md:grid-cols-2 gap-8" role="list">
          {skills.map((skillSet, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-cyan-950/30 to-black border-2 border-cyan-500/40 rounded-xl p-8 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              role="listitem"
            >
              <div className="mb-3 flex gap-5 items-center">
                <div
                  className={`w-14 h-14 mb-4 bg-gradient-to-r ${skillSet.color} rounded-lg flex items-center justify-center`}
                >
                  <skillSet.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl mb-6 text-cyan-300"
                  id={`category-${skillSet.category.toLowerCase()}`}
                >
                  {skillSet.category}
                </h3>
              </div>
              <ul
                className="flex flex-wrap gap-3"
                aria-labelledby={`category-${skillSet.category.toLowerCase()}`}
                role="list"
              >
                {skillSet.items.map((skill, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/50 text-cyan-200 rounded-lg hover:bg-cyan-500/20 transition-colors"
                    role="listitem"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="md:w-[50%] mt-10 flex flex-col md:flex-row items-center gap-3 p-4 bg-cyan-500/10 border-2 border-yellow-400/50 hover:border-yellow-300 rounded-lg group transition-all duration-100 hover:shadow-2xl hover:shadow-yellow-500/20">
          <Lightbulb className="w-14 h-14 text-yellow-600 group-hover:text-yellow-200 transition-colors duration-100 flex-shrink-0" />
          <p className="text-cyan-100/80">
            Nota: ainda estou aprendendo como utilizar algumas tecnologias.
            <br />
            Recentemente comecei a aprender a linguagem Java, diferentes tipos
            de Algoritmo, Linux e até mesmo SQL com Postgre.
          </p>
        </div>
      </div>
    </section>
  );
}
