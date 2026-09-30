const services = [
  {
    number: "01",
    title: "Desenvolvimento Web",
    description:
      "Criação de websites modernos, profissionais, rápidos e totalmente responsivos para empresas, marcas e profissionais.",
  },
 
  {
    number: "02",
    title: "Redes e Infraestrutura",
    description:
      "Configuração e administração de redes, incluindo LAN, WAN, endereçamento IP, equipamentos de rede, conectividade e diagnóstico de problemas.",
  },
  {
    number: "03",
    title: "Desenvolvimento Mobile",
    description:
      "Desenvolvimento de aplicações mobile modernas e multiplataforma utilizando tecnologias atuais.",
  },
  {
    number: "04",
    title: "Portfólios Profissionais",
    description:
      "Criação de portfólios digitais para profissionais apresentarem os seus trabalhos, competências e experiência.",
  },
  {
    number: "05",
    title: "Consultoria Tecnológica",
    description:
      "Orientação na escolha de tecnologias, soluções digitais e estratégias para transformar ideias em projetos.",
  },
  {
    number: "06",
    title: "Manutenção e Otimização",
    description:
      "Atualização, correção, melhoria de desempenho e evolução de websites, infraestrutura de    redes e aplicações existentes.",
  },
];

function Services() {
  return (
    <section id="services" className="services section">
      <div className="section-container">

        <div className="section-heading">
          <p>O que faço</p>
          <h2>Meus Serviços</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Saber mais →
              </a>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;