import minhaFoto from "../assets/eu.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <p className="hero-greeting">Olá, eu sou o</p>

          <h1>
            Vivaldo <span>Smile</span>
          </h1>

          <h2>Trabalho com suporte técnico, redes de computadores, administração de sistemas 
            e desenvolvimento Web & Mobile, transformando problemas tecnológicos em soluções 
            práticas e eficientes.
          </h2>


          <p className="hero-founder">
            Fundador da <strong>WebNexa Technologies</strong>
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Ver Projetos
            </a>

            <a href="#contact" className="btn-secondary">
              Contactar-me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-frame">
            <img
              src={minhaFoto}
              alt="Vivaldo Smile"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;