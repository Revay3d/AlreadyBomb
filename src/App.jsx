import { useState } from "react";
import "./assets/stylesheet/App.scss";

function App() {
  const [count, setCount] = useState(false);
  return (
    <>
      <nav className="Nav">
        <h1 className="Nav__title">AlreadyBomb</h1>

        <ul className={"Nav__items " + (count ? "visible" : " ")}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Novedades</a>
          </li>
          <li>
            <a href="https://discord.gg/R6dJFKegpx">Soporte</a>
          </li>
        </ul>
        <a href="https://discord.gg/R6dJFKegpx">
          <button className="Nav__button">
            <i className="fa-brands fa-discord"></i> <span>Unete</span>
          </button>
        </a>

        <span className="Nav__menu" onClick={() => setCount(!count)}>
          <i className="fa-solid fa-bars"></i>
        </span>
      </nav>

      <header>
        <div className="Aviso">
          <h1 className="Aviso__title">Mantenimiento</h1>
          <p className="Aviso__text">
            Queremos informarte que actualmente estoy trabajando en el
            desarrollo y mantenimiento de nuestra web. Mientras tanto, nuestro
            equipo de programadores está mejorando nuestro bot de Discord,
            desarrollado con JavaScript. Este esfuerzo conjunto es esencial para
            garantizar que tanto nuestra web como nuestro bot continúen
            evolucionando y proporcionando el mejor servicio posible.
            Agradecemos tu paciencia y comprensión durante este tiempo. Nos
            esforzamos por minimizar cualquier inconveniente y agradecemos tu
            apoyo continuo mientras trabajamos para hacer que nuestras
            plataformas sean aún mejores.
          </p>
        </div>
      </header>
    </>
  );
}

export default App;
