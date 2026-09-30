const experiences = [
  {
    period: "Atual",
    role: "Fundador & Desenvolvedor",
    company: "WebNexa Technologies",
    description:
      "Fundador da WebNexa Technologies, responsável pelo desenvolvimento de soluções digitais, websites e aplicações, bem como pela gestão e evolução dos projetos da empresa.",
  },

  {
    period: "2025 — Atual",
    role: "Técnico de Informática & Desenvolvedor",
    company: "Projetos e Soluções Tecnológicas",
    description:
      "Atuação no desenvolvimento de websites e aplicações, configuração e estudo de redes de computadores, suporte técnico e criação de soluções digitais. Experiência prática com programação, tecnologias web e mobile, infraestrutura de redes e ferramentas tecnológicas para transformar ideias em soluções funcionais.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="section-container">

        <div className="section-heading">
          <p>Minha trajetória</p>
          <h2>Experiência</h2>
        </div>

        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <article
              className="experience-item"
              key={`${experience.company}-${index}`}
            >

              <div className="experience-marker"></div>

              <div className="experience-content">

                <span className="experience-period">
                  {experience.period}
                </span>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;