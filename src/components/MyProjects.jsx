import { useEffect, useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

export default function MyProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/UlissesE/repos")
      .then((res) => res.json())
      .then((data) => {
        const sortedRepos = data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });

        setRepos(sortedRepos.slice(0, 6));
      });
  }, []);
  console.log(repos);
  return (
    <section
      id="projetos"
      className="py-20 px-4 bg-gradient-to-b from-black to-cyan-950/20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl mb-12 text-center text-cyan-400">
          Meus Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {repos.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="text-2xl mb-3 text-cyan-300">{project.name}</h3>
              <p className="text-cyan-100/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.topics.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.html_url}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  target="_blank"
                >
                  <Github size={20} />
                  <span>Código</span>
                </a>

                {project.homepage && (
                  <a
                    href={project.homepage}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    target="_blank"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black rounded-lg transition-colors group">
            <span>Ver Todos os Projetos</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
