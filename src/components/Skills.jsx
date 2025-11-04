export function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Python", "Node.js", "PostgreSQL", "REST APIs"],
    },
    {
      category: "Ferramentas",
      items: ["Git", "Figma", "VS Code", "Postman"],
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
    },
  ];

  return (
    <section
      id="habilidades"
      className="py-20 px-4 relative"
      aria-label="Minhas Habilidades"
    >
      <div className="max-w-6xl mx-auto">
        <header>
          <h2 className="text-5xl mt-24 mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent font-bold font-mono">
            Habilidades
          </h2>
        </header>
        <div className="grid md:grid-cols-2 gap-8" role="list">
          {skills.map((skillSet, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-cyan-950/30 to-black border-2 border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              role="listitem"
            >
              <h3
                className="text-2xl mb-6 text-cyan-300"
                id={`category-${skillSet.category.toLowerCase()}`}
              >
                {skillSet.category}
              </h3>
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
      </div>
    </section>
  );
}
