import { Check } from "lucide-react";
import "./Planos.css";

export default function Planos() {
  const planos = [
    {
      nome: "Mensal",
      preco: "129",
      periodo: "/mês",
      destaque: false,
      beneficios: [
        "Acesso livre à área de musculação",
        "Acesso à área de cardio",
        "Vestiários e armários",
        "App com treinos básicos",
      ],
    },
    {
      nome: "Semestral",
      preco: "99",
      periodo: "/mês",
      destaque: true, // Esse é o nosso plano campeão de vendas!
      beneficios: [
        "Tudo do plano Mensal",
        "Avaliação física inclusa",
        "Acompanhamento focado em hipertrofia",
        "Acesso livre a todas as aulas coletivas",
        "Trancamento de até 15 dias",
      ],
    },
    {
      nome: "Anual",
      preco: "89",
      periodo: "/mês",
      destaque: false,
      beneficios: [
        "Tudo do plano Semestral",
        "Camiseta exclusiva EnergyFit",
        "Desconto em suplementos parceiros",
        "Trancamento de até 30 dias",
        "1 convidado por mês",
      ],
    },
  ];

  return (
    <section id="planos" className="planos-section">
      <div className="planos-header" data-aos="fade-up">
        <h2>
          Escolha seu <span className="destaque-texto">Plano</span>
        </h2>
        <p>Sem taxas ocultas. Cancele quando quiser.</p>
      </div>

      <div className="planos-grid">
        {planos.map((plano, index) => (
          // Se o plano for destaque, ele ganha uma classe CSS extra chamada "card-destaque"
          <div
            key={index}
            className={`plano-card ${plano.destaque ? "card-destaque" : ""}`}
            data-aos="fade-up"
            data-aos-delay={index * 150} // 0, 150, 300 (Eles vão subir um depois do outro!)
          >
            {/* Tag flutuante se for o plano destaque */}
            {plano.destaque && (
              <span className="tag-recomendado">Mais Escolhido</span>
            )}

            <h3>{plano.nome}</h3>
            <div className="preco-box">
              <span className="moeda">R$</span>
              <span className="valor">{plano.preco}</span>
              <span className="periodo">{plano.periodo}</span>
            </div>

            <ul className="beneficios-lista">
              {plano.beneficios.map((beneficio, i) => (
                <li key={i}>
                  <Check size={20} className="check-icon" />
                  {beneficio}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className={`btn-plano ${plano.destaque ? "btn-destaque" : ""}`}
            >
              Assinar {plano.nome}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
