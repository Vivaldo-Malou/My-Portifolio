function About() {
  return (
    <section id="about" className="about section">
      <div className="section-container">

        <div className="section-heading">
          <p>Conheça-me</p>
          <h2>Sobre Mim</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>
              Olá, sou o <span>Vivaldo Smile</span>.
            </h3>

            <p>
              Sou Técnico de Informática e profissional de tecnologia, 
              apaixonado por redes, sistemas e desenvolvimento. Crio e implemento soluções tecnológicas que ajudam pessoas, marcas e empresas a trabalhar de forma mais eficiente, segura e conectada.
            </p>

            <p>
             Atuo na área de Tecnologia da Informação, com foco em suporte técnico, redes de computadores, administração de sistemas e desenvolvimento Web & Mobile, criando soluções eficientes, funcionais e adaptadas às necessidades de cada projeto.
            </p>

            <p>
              Sou também <strong>Fundador da WebNexa Technologies</strong>,
              onde atuo no desenvolvimento de soluções tecnológicas,
              produtos digitais e serviços para diferentes necessidades.
            </p>

            <p>
              Acredito que um bom projeto não deve apenas ter uma boa
              aparência. Deve ser rápido, funcional, responsivo,
              intuitivo e resolver verdadeiramente o problema para o
              qual foi criado.
            </p>

            <a href="#contact" className="btn-primary">
              Vamos trabalhar juntos
            </a>
          </div>

          <div className="about-info">

            <div className="info-card">
              <span>01</span>

              <div className="info-card-content">
                <h4>Desenvolvimento Web</h4>

                <p>
                  Criação de websites modernos, responsivos,
                  profissionais e adaptados a diferentes dispositivos.
                </p>
              </div>
            </div>

            <div className="info-card">
              <span>02</span>

              <div className="info-card-content">
                <h4>Desenvolvimento Mobile</h4>

                <p>
                  Desenvolvimento de aplicações mobile com
                  tecnologias modernas e foco na experiência do utilizador.
                </p>
              </div>
            </div>

            <div className="info-card">
              <span>03</span>

              <div className="info-card-content">
                <h4>Redes e infraestrutura</h4>

                <p>
                  Configuração e manutenção de redes de computadores, incluindo LAN, WAN, equipamentos de rede, endereçamento IP, conectividade e resolução de problemas de comunicação.
                </p>
              </div>
            </div>

            <div className="info-card">
              <span>04</span>

              <div className="info-card-content">
                <h4>Consultoria Tecnológica</h4>

                <p>
                  Orientação na escolha de tecnologias e estratégias
                  para desenvolver e melhorar projetos digitais.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;