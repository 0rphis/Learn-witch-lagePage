import { motion } from "framer-motion";
import { ArrowRight, Dumbbell } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Lado Esquerdo: Textos e Botões */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }} // Começa invisível e um pouco para a esquerda
        animate={{ opacity: 1, x: 0 }} // Anima para o estado normal
        transition={{ duration: 0.8 }} // Duração de quase 1 segundo
      >
        <span className="badge">
          Transforme seu corpo
          <br />
          Transforme sua vida
        </span>
        <h1>
          Transforme sua energia em{" "}
          <span className="destaque">resultados.</span>
        </h1>
        <p>
          Treinamento de alta performance para quem busca superar limites.
          Junte-se à EnergyFit e alcance o seu melhor shape com acompanhamento
          profissional.
        </p>

        <div className="hero-buttons">
          <a href="#planos" className="btn-primary">
            Ver Planos <ArrowRight size={20} style={{ marginLeft: "0.5rem" }} />
          </a>
          <a href="#sobre" className="btn-secondary">
            Conhecer o Espaço{" "}
            <Dumbbell size={20} style={{ marginLeft: "0.5rem" }} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
