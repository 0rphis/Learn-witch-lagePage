import { useEffect } from "react";
import Contato from "./components/Contato";
import Depoimentos from "./components/Depoimentos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Planos from "./components/Planos";
import Sobre from "./components/Sobre";

// Importações obrigatórias para o AOS funcionar
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  // 1. A Lógica: O useEffect fica aqui dentro, antes do return
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // 2. O Visual: O return entrega o que vai para a tela
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Depoimentos />
        <Planos />
      </main>
      <Contato />
    </div>
  );
}
