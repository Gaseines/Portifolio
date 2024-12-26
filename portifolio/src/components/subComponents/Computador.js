import { useEffect, useRef, useState } from "react";

import styles from "./Computador.module.css";
import animacao from "../Animacoes.module.css";
import Titulo from "../layouts/Titulo";

function Computador({ isSection }) {
  const mainRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const [isbg, setbg] = useState(false);

  useEffect(() => {
    const main = mainRef.current;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setbg(true);
          observer.unobserve(main);
        }
      });
    });
    observer.observe(main);

    return () => {
      if (main) observer.unobserve(main);
    };
  });

  // Animação inicial
  useEffect(() => {
    setVisible(true);
  },[]);

  return (
    <div
      id="sobre"
      className={`${styles.container} ${isVisible ? animacao.fade_in : ""} ${
              isSection === "sobre" ||
              isSection === "projetos" ||
              isSection === "contato" ||
              isSection === "skills"
                ? animacao.blur
                : animacao.focus
            }`}
    >
      <Titulo>Gabriel Nunes</Titulo>
      <div
        ref={mainRef}
        className={`${styles.container_img} ${isbg ? styles.background : ""}`}
      ></div>
    </div>
  );
}

export default Computador;
