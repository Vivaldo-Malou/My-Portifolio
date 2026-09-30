import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaPhone,
} from "react-icons/fa";


const skillCategories = [
  {
    title: "Desenvolvimento Web",
    icon: FaPhone,
    skills: [
      {
        name: "HTML5",
        level: 90,
        description: "Estruturação semântica e acessível de páginas web.",
      },
      {
        name: "CSS3",
        level: 85,
        description: "Interfaces responsivas, animações e layouts modernos.",
      },
      {
        name: "JavaScript",
        level: 80,
        description:
          "Lógica, interatividade e desenvolvimento de aplicações web.",
      },
      {
        name: "React",
        level: 75,
        description:
          "Desenvolvimento de interfaces modernas com componentes.",
      },
    ],
  },

  {
    title: "Desenvolvimento Mobile",
    icon: FaPhone,
    skills: [
      {
        name: "Flutter",
        level: 70,
        description:
          "Desenvolvimento de aplicações mobile multiplataforma.",
      },
      {
        name: "Dart",
        level: 70,
        description:
          "Linguagem utilizada no desenvolvimento de aplicações Flutter.",
      },
    ],
  },

  {
    title: "UI/UX & Design",
    icon: FaPhone,
    skills: [
      {
        name: "Figma",
        level: 80,
        description:
          "Criação de interfaces, protótipos e experiências de utilizador.",
      },
      {
        name: "Photoshop",
        level: 80,
        description:
          "Edição de imagens e criação de materiais gráficos.",
      },
      {
        name: "Canva",
        level: 85,
        description:
          "Criação de conteúdos visuais e materiais para comunicação digital.",
      },
    ],
  },

  {
    title: "Backend & Base de Dados",
    icon: FaPhone,
    skills: [
      {
        name: "PHP",
        level: 65,
        description:
          "Desenvolvimento de aplicações e sistemas web no lado do servidor.",
      },
      {
        name: "MySQL",
        level: 70,
        description:
          "Criação, gestão e consulta de bases de dados relacionais.",
      },
    ],
  },

  {
    title: "Ferramentas & Versionamento",
    icon: FaPhone,
    skills: [
      {
        name: "Git",
        level: 75,
        description:
          "Controlo de versões e gestão do histórico de código.",
      },
      {
        name: "GitHub",
        level: 75,
        description:
          "Hospedagem de código e colaboração em projetos.",
      },
      {
        name: "VS Code",
        level: 90,
        description:
          "Ambiente de desenvolvimento utilizado para programação.",
      },
    ],
  },

  {
    title: "Redes de Computadores",
    icon: FaPhone,
    skills: [
      {
        name: "Redes de Computadores",
        level: 65,
        description:
          "Fundamentos de redes, dispositivos e comunicação entre sistemas.",
      },
      {
        name: "TCP/IP",
        level: 60,
        description:
          "Conhecimentos sobre protocolos e comunicação em redes.",
      },
      {
        name: "Configuração de Redes",
        level: 60,
        description:
          "Configuração e fundamentos de redes locais e conectividade.",
      },

      {
        name: "Cisco Packet Trace",
        level: 85,
        description:
          "Construção e Configuração de redes simuladas.",
      },
    ],
  },

  {
    title: "Sistemas Operativos",
    icon: FaPhone,
    skills: [
      {
        name: "Linux",
        level: 60,
        description:
          "Utilização do Linux, terminal e fundamentos de administração de sistemas.",
      },

      {
        name: "Windows",
        level: 90,
        description:
          "Utilização do Windows, e suas ferramentas para realização de tarefas do dia a dia.",
      },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-container">

        <div className="section-heading">
          <p>O que utilizo</p>
          <h2>Minhas Skills</h2>
        </div>

        <div className="skills-categories">

          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>

              <div className="skill-category-header">
                <span className="skill-category-icon">
                  {category.icon}
                </span>

                <h3>{category.title}</h3>
              </div>

              <div className="skills-grid">

                {category.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>

                    <div className="skill-header">
                      <h4>{skill.name}</h4>
                      <span>{skill.level}%</span>
                    </div>

                    <p>{skill.description}</p>

                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      ></div>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;