import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaPhone,
} from "react-icons/fa";

const contactInfo = [
  {
    title: "Telefone",
    value: "+244 928 247 458",
    link: "tel:+244928247458",
    icon: FaPhone,
  },
  {
    title: "Instagram",
    value: "@vivaldo_smile_",
    link: "https://instagram.com/vivaldo_smile_",
    icon: FaInstagram,
  },
  {
    title: "Facebook",
    value: "Vivaldo Smile",
    link: "https://www.facebook.com/profile.php?id=100077790134325",
    icon: FaFacebook,
  },
  {
    title: "LinkedIn",
    value: "Vivaldo Smile",
    link: "https://www.linkedin.com/in/vivaldo-smile-36468635a/",
    icon: FaLinkedin,
  },
  {
    title: "TikTok",
    value: "Vivaldo Smile",
    link: "https://www.tiktok.com/@vivaldo_smile?is_from_webapp=1&sender_device=pc",
    icon: FaTiktok,
  },
];

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");

    const whatsappMessage = `Olá Vivaldo!

Meu nome é ${name}.
Email: ${email}
Assunto: ${subject}

Mensagem:
${message}`;

    const whatsappUrl =
      `https://wa.me/244928247458?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section id="contact" className="contact section">
      <div className="section-container">

        <div className="section-heading">
          <p>Vamos conversar</p>
          <h2>Entre em Contacto</h2>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Tem um projeto em mente?</h3>

            <p>
              Se tens uma ideia, projeto ou negócio que precisa de uma
              solução digital, entra em contacto comigo. Vamos conversar
              sobre como posso ajudar.
            </p>

            <div className="contact-list">

              {contactInfo.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    href={contact.link}
                    key={contact.title}
                    className="contact-item"
                    target={
                      contact.link.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                  >
                    <div className="contact-icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <span>{contact.title}</span>
                      <strong>{contact.value}</strong>
                    </div>
                  </a>
                );
              })}

            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">Nome</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="O teu nome"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="teuemail@exemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Como posso ajudar?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Escreve a tua mensagem..."
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary form-button"
            >
              Enviar pelo WhatsApp →
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;