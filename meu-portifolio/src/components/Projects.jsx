const projects = [
  {
    title: "BongaNet",
    category: "Website",
    description:
      "Website institucional desenvolvido para apresentar os serviços, identidade e presença digital da BongaNet.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/src/assets/BongaNet.jpeg",
    link: "#",
  },

  {
    title: "Fersansil",
    category: "Website",
    description:
      "Projeto web desenvolvido para criar uma presença digital profissional para a marca.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/src/assets/Fersansil.png",
    link: "#",
  },

  {
    title: "Infraestrutura de Rede Escolar",
    category: "Infraestrutura de Rede",
    description:
      "Planeamento e simulação de uma rede para uma instituição de ensino, permitindo a comunicação entre salas, laboratórios, administração e servidores, com organização da rede e distribuição automática de endereços IP.",
    technologies: ["Cisco Packet Tracer", "Cisco IOS", "IPv6", "VLAN", "dhcp", "Routing", "Switch", "cabos ethernet", "servidores"],
    image: "/src/assets/Esc.png",
    link: "#",
  },

  {
    title: "LSA",
    category: "Plataforma Web",
    description:
      "Projeto de dicionário digital de Língua Gestual Angolana, desenvolvido para facilitar o acesso e aprendizagem dos gestos.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/src",
    link: "#",
  },

  {
    title: "Rede Corporativa — Emilia Sabores",
    category: "Infraestrutura de Rede",
    description:
      "Planeamento e configuração de uma infraestrutura de rede para uma empresa, com segmentação de departamentos, configuração de endereçamento IP, comunicação entre dispositivos e implementação de serviços de rede.",
    technologies: ["Cisco Packet Tracer", "Cisco IOS", "IPv4", "IPv6", "VLAN", "dhcp", "Routing", "Switching", "cabos ethernet"],
    image: "/src/assets/infraEmp.png",
    link: "#",
  },

  {
    title: "R97",
    category: "E-commerce / Moda",
    description:
      "Website para uma marca de roupas, com catálogo de produtos e possibilidade de realizar encomendas através do WhatsApp.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/src/assets/r97.jpg",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-container">

        <div className="section-heading">
          <p>O meu trabalho</p>
          <h2>Projetos em Destaque</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={`Preview do projeto ${project.title}`}
                />

                <span>{project.category}</span>
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto →
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;