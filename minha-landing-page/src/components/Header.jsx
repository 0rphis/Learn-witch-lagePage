import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "../assets/image.png";
import ".//Header.css";

export default function Header() {
  const [isMenuOpen, setMenuOpnen] = useState(false);

  const toggleMenu = () => {
    setMenuOpnen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoImg} alt="ENERGYFIT" className="logo-img" />
      </div>

      <nav className="nav-desktop">
        <a href="#hero">Inicio</a>
        <a href="#sobre">Sobre</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#planos">Planos</a>
        <a href="#contato">Contato</a>
        <button href="#comecar" id="start">
          {" "}
          Comece agora{" "}
        </button>
      </nav>

      {/* Botão Mobile: Aparece apenas em telas pequenas */}
      <button className="btn-mobile" onClick={toggleMenu}>
        {/* Renderização condicional: Mostra o X se aberto, Menu se fechado */}
        {isMenuOpen ? (
          <X size={28} color="#8CD21F" />
        ) : (
          <Menu size={28} color="#8CD21F" />
        )}
      </button>

      {/* Navegação Mobile: Aparece apenas se o menu estiver aberto */}
      <nav className={`nav-mobile ${isMenuOpen ? "open" : ""}`}>
        <a href="#hero">Inicio</a>
        <a href="#sobre">Sobre</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#planos">Planos</a>
        <a href="#contato">Contato</a>
        <button href="#comecar" id="comecar-mobile">
          {" "}
          Comece agora{" "}
        </button>
      </nav>
    </header>
  );
}
