import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import "./Contato.css";

export default function Contato() {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault(); // Impede a página de recarregar ao clicar no botão

    /// A mágica acontece aqui:
    emailjs
      .sendForm(
        "service_5k70s0g", // 1. Seu Service ID
        "template_da1t5kh", // 2. O seu Template ID
        form.current, // 3. Referência do formulário (Não mexer)
        "DiXjYZXitTqZ8QLWe", // 4. Cole aqui a sua Public Key
      )
      .then(
        (result) => {
          console.log("SUCESSO!", result.text);
          alert(
            "Mensagem enviada com sucesso! Em breve entraremos em contato.",
          );
          e.target.reset(); // Limpa os campos depois de enviar
        },
        (error) => {
          alert("Ocorreu um erro ao enviar. Tente novamente.");
          console.log(error.text);
        },
      );
  };

  return (
    <footer id="contato" className="contato-wrapper">
      <section className="contato-section">
        <div className="contato-grid">
          <div className="contato-info" data-aos="fade-right">
            <h2>
              Venha treinar com a{" "}
              <span className="destaque-texto">EnergyFit</span>
            </h2>
            <p>
              Ficou com alguma dúvida? Mande uma mensagem ou faça uma visita.
              Nossa equipe está pronta para te ajudar a alcançar seu melhor
              shape.
            </p>

            <ul className="info-lista">
              <li>
                <MapPin className="info-icon" size={24} />
                <span>Rua do Suor, 123 - Centro</span>
              </li>
              <li>
                <Phone className="info-icon" size={24} />
                <span>(00) 99999-9999</span>
              </li>
              <li>
                <Mail className="info-icon" size={24} />
                <span>contato@energyfit.com.br</span>
              </li>
            </ul>
          </div>

          <div className="contato-form-container" data-aos="fade-left">
            {/* O onSubmit chama a nossa função, e o ref liga o formulário ao EmailJS */}
            <form ref={form} onSubmit={enviarEmail} className="contato-form">
              <div className="input-group">
                <label htmlFor="nome">Nome Completo</label>
                {/* O 'name' é obrigatório para o EmailJS saber qual dado é qual */}
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  rows="4"
                  placeholder="Como podemos te ajudar?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-enviar">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="footer-bottom">
        <p>&copy; 2026 EnergyFit. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
