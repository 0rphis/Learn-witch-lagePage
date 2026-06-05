import { ShieldCheck, Target, Zap } from "lucide-react";
import "./Sobre.css";

export default function Sobre() {
  return (
    <section id="sobre" className="sobre-section">
      {/* Cabeçalho da seção */}
      <div className="sobre-header" data-aos="fade-up">
        <h2>Muito mais que uma academia</h2>
        <p>
          Nosso espaço foi desenhado para quem leva o treino a sério. Ambiente
          climatizado, equipamentos de ponta e foco total nos seus resultados.
        </p>
      </div>

      {/* Grid de Cards do Nosso Espaço */}
      <div className="espaco-grid">
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <Zap size={40} className="card-icon" />
          <h3>Área de Força</h3>
          <p>
            Equipada com bancos profissionais e pesos livres otimizados para
            treinos focados em ganho de força e definição muscular detalhada.
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <Target size={40} className="card-icon" />
          <h3>Cardio Dinâmico</h3>
          <p>
            Esteiras e elípticos de última geração com monitoramento de
            desempenho em tempo real.
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <ShieldCheck size={40} className="card-icon" />
          <h3>Acompanhamento</h3>
          <p>
            Profissionais qualificados no salão o tempo todo para corrigir
            posturas e garantir um treino seguro.
          </p>
        </div>
      </div>
    </section>
  );
}
