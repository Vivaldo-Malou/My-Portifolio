function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Vivaldo <span>Smile</span>
          </h2>

          <p>
            Técnico de Informática e profissional de tecnologia.
          </p>

          <p>
            Fundador da WebNexa Technologies.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>

          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#services">Serviços</a>
          <a href="#projects">Projetos</a>
          <a href="#experience">Experiência</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>

          <a href="tel:+244928247458">
            +244 928 247 458
          </a>

          <a
            href="https://wa.me/244928247458"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {currentYear} Vivaldo Smile. Todos os direitos reservados.
        </p>

        <p>
          Desenvolvido com React
        </p>

      </div>
    </footer>
  );
}

export default Footer;