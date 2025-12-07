import { useEffect, useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedSectionCard from "./AnimtedInViewCard";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedInView";

export default function MyProjects() {
  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1737737351943-82e01f866e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjA1OTE4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYwNTk5MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwNTU0MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  useEffect(() => {
    fetch("https://api.github.com/users/UlissesE/repos")
      .then((res) => res.json())
      .then((data) => {
        const sortedRepos = data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });

        setRepos(sortedRepos.slice(0, 3));
      });
  }, []);
  return (
    <section id="projetos" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
        <h2 className="text-5xl mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent font-bold font-mono">
          Últimos Projetos
        </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {repos.map((project, index) => (
            <AnimatedSectionCard
              key={index}
              className="group bg-black border-2 border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-400 transition-colors hover:shadow-lg hover:shadow-cyan-500/20"
              delay={((index + 1) * 2) / 10}
            >
              <div className="relative h-40 overflow-hidden bg-cyan-950/20">
                <img
                  src={images[index]}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="p-5">
                <h3 className="text-2xl mb-3 text-cyan-300">{project.name}</h3>
                <p className="text-cyan-100/80 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 rounded-full text-sm"
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
            </AnimatedSectionCard>
          ))}
        </div>

  
        <div className="text-center">
          <button
            onClick={() => navigate("/projetos")}
            className="inline-flex items-center gap-2 cursor-pointer px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black rounded-xl transition-all shadow-lg shadow-cyan-500/50 min-w-[200px] group hover:scale-105 hover:shadow-sm focus:scale-95"
          >
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
