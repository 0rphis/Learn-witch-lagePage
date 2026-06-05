import { Quote } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Importações obrigatórias do CSS interno do Swiper
import "swiper/css";
import "swiper/css/pagination";

import "./Depoimentos.css";

export default function Depoimentos() {
  // Lista de depoimentos (Simulando um banco de dados simples)
  const depoimentos = [
    {
      nome: "Lucas Mendes",
      texto:
        "A melhor estrutura da cidade. Os equipamentos são novos e os professores realmente acompanham o seu treino.",
      objetivo: "Hipertrofia",
    },
    {
      nome: "Mariana Silva",
      texto:
        "Eu tinha dificuldades para emagrecer, mas com a ajuda dos profissionais daqui, consegui alcançar meu objetivo em poucos meses.",
      objetivo: "Emagrecimento",
    },
    {
      nome: "Rafael Costa",
      texto:
        "Otimo locas para pratica para o condicionamento fisico, os professores são muito atenciosos e sempre estão dispostos a ajudar.",
      objetivo: "Condicionamento",
    },
    {
      nome: "Ana Paula",
      texto:
        "O diferencial é o acompanhamento. Sinto que estou evoluindo muito mais rápido com a correção de postura que eles dão.",
      objetivo: "Saúde e Bem-estar",
    },
    {
      nome: "Carlos Eduardo",
      texto:
        "Nunca gostei de academia, mas o clima da EnergyFit é diferente. A galera é super receptiva e te motiva a não desistir.",
      objetivo: "Qualidade de Vida",
    },
    {
      nome: "Juliana Castro",
      texto:
        "Treino há 5 anos e mudei para cá pela qualidade dos equipamentos de peso livre. Foi a melhor decisão, meu rendimento dobrou.",
      objetivo: "Força e Performance",
    },
    {
      nome: "Fernanda Lima",
      texto:
        "Tinha muitas dores nas costas por causa do trabalho. Com o treino focado e a ajuda da equipe, minhas dores sumiram.",
      objetivo: "Fortalecimento",
    },
    {
      nome: "Roberto Alves",
      texto:
        "As aulas coletivas são sensacionais! Muita energia, ambiente climatizado e espaço enorme. Saio pingando e de alma lavada.",
      objetivo: "Perda de Peso",
    },
  ];

  return (
    <section id="depoimentos" className="depoimentos-section">
      <div className="depoimentos-header" data-aos="fade-up">
        <h2 href="#Depoimentos">O que nossos alunos dizem</h2>
        <p>Resultados reais de quem treina com a gente.</p>
      </div>

      <div className="swiper-container" data-aos="fade-up" data-aos-delay="200">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1} // Começa mostrando 1 card no celular
          pagination={{ clickable: true }}
          breakpoints={{
            // Quando a tela tiver 768px ou mais (Tablet), mostra 2 cards
            768: {
              slidesPerView: 2,
            },
            // Quando a tela tiver 1024px ou mais (PC), mostra 3 cards
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {/* O .map() percorre a nossa lista e cria um SwiperSlide para cada aluno */}
          {depoimentos.map((dep, index) => (
            <SwiperSlide key={index}>
              <div className="depoimento-card">
                {/* 2. O HTML (Aqui sim colocamos os ícones junto com o dep.texto) */}
                <p className="texto">
                  <Quote size={15} className="quote-inline invertido" />
                  {dep.texto}
                  <Quote size={15} className="quote-inline " />
                </p>

                <div className="aluno-info">
                  <h4>{dep.nome}</h4>
                  <span>{dep.objetivo}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
