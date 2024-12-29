import React, { useRef, useState } from "react";

//Styles
import styles from "./Contact.module.css";

//Components
import SocialCard from "../components/layouts/SocialCard";
import Titulo from "../components/layouts/Titulo";

const Contact = () => {
  const [card, setCard] = useState("whats");

  const whatsIconRef = useRef(null);
  const emailIconRef = useRef(null);
  const linkedinIconRef = useRef(null);
  const instaIconRef = useRef(null);

  //Ativando cards
  const handleActiveCard = (name) => {
    if (name === "whats") {
      whatsIconRef.current.style.color = "black";
      emailIconRef.current.style.color = "var(--bege)";
      linkedinIconRef.current.style.color = "var(--bege)";
      instaIconRef.current.style.color = "var(--bege)";
      setCard("whats");
    } else if (name === "email") {
      emailIconRef.current.style.color = "black";
      whatsIconRef.current.style.color = "var(--bege)";
      linkedinIconRef.current.style.color = "var(--bege)";
      instaIconRef.current.style.color = "var(--bege)";
      setCard("email");
    } else if (name === "linkedin") {
      linkedinIconRef.current.style.color = "black";
      emailIconRef.current.style.color = "var(--bege)";
      whatsIconRef.current.style.color = "var(--bege)";
      instaIconRef.current.style.color = "var(--bege)";
      setCard("linkedin");
    } else if (name === "insta") {
      instaIconRef.current.style.color = "black";
      emailIconRef.current.style.color = "var(--bege)";
      linkedinIconRef.current.style.color = "var(--bege)";
      whatsIconRef.current.style.color = "var(--bege)";
      setCard("insta");
    }
  };

  return (
    <div className={styles.container}>
      <Titulo>Contato</Titulo>
      <div className={styles.main_card}>
        {/* <h1>Meios para Contato</h1>
        <p>Selecione alguma opção de contato para mais informações</p> */}
        <SocialCard
          link={
            "https://wa.me/5547999226050?text=Olá%2C+Gabriel!+Encontrei+seu+portfólio+e+gostaria+de+saber+mais+sobre+seus+serviços+como+desenvolvedor+freelancer."
          }
          style={`${styles.whats_card} ${styles.cardE} ${
            card === "whats" ? styles.is_active : ""
          }`}
          title={"WhatsApp"}
          desc={
            "Disponivel das 08:00 as 21:00, aguardo seu contato para poder lhe atender da melhor forma! Desde ja agradeço!"
          }
        />

        <SocialCard
          link={
            "mailto:contato.gsn_dev@hotmail.com?subject=Interesse%20em%20projeto&body=Olá%20Gabriel,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          }
          style={`${styles.email_card} ${styles.cardE} ${styles.teste} ${
            card === "email" ? styles.is_active : ""
          }`}
          title={"Email"}
          desc={
            "Disponivel das 08:00 as 21:00, aguardo seu contato para poder lhe atender da melhor forma! Desde ja agradeço!"
          }
        />

        <SocialCard
          link={"https://www.linkedin.com/in/gabriel-nunes-42218b271/"}
          style={`${styles.linkedin_card} ${styles.cardE} ${
            card === "linkedin" ? styles.is_active : ""
          }`}
          title={"LinkedIn"}
          desc={
            "Conheça meu perfil do LinkedIn, se preferir pode me contatar por la, disponível das 08:00 as 21:00"
          }
        />

        <SocialCard
          link={"https://www.instagram.com/gaseines/"}
          style={`${styles.instagram_card} ${styles.cardE} ${
            card === "insta" ? styles.is_active : ""
          }`}
          title={"Instagram"}
          desc={
            "Meu Instagram, mais relacionado a minha vida pessoal, mas se preferir, pode me contatar por la também, disponível das 08:00 as 21:00"
          }
        />

        <div className={styles.menu_social}>
          {/* Whatsapp */}
          <div
            className={styles.links}
            onClick={() => handleActiveCard("whats")}
          >
            <svg
              ref={whatsIconRef}
              className={styles.whats_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#46d321"
              fill="none"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                stroke="currentColor"
                stroke_width="1.5"
                stroke_linejoin="round"
              />
              <path
                d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118"
                stroke="currentColor"
                stroke_width="1.5"
              />
            </svg>
          </div>

          {/* Email */}
          <div
            className={styles.links}
            onClick={() => handleActiveCard("email")}
          >
            <svg
              ref={emailIconRef}
              className={styles.email_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#4a90e2"
              fill="none"
            >
              <path
                d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                stroke="currentColor"
                stroke_width="1.5"
                stroke_linejoin="round"
              />
              <path
                d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                stroke="currentColor"
                stroke_width="1.5"
                stroke_linejoin="round"
              />
            </svg>
          </div>

          {/* LinkedIn */}
          <div
            className={styles.links}
            onClick={() => handleActiveCard("linkedin")}
          >
            <svg
              ref={linkedinIconRef}
              className={styles.linkedin_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#4a90e2"
              fill="none"
            >
              <path
                d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                stroke="currentColor"
                stroke_width="1.5"
              />
              <path
                d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                stroke="currentColor"
                stroke_width="1.5"
              />
              <path
                d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                stroke="currentColor"
                stroke_width="1.5"
                stroke_linejoin="round"
              />
            </svg>
          </div>

          {/* Instagram */}
          <div
            className={styles.links}
            onClick={() => handleActiveCard("insta")}
          >
            <svg
              ref={instaIconRef}
              className={styles.instagram_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#e01090"
              fill="none"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                stroke_width="1.5"
                stroke_linejoin="round"
              />
              <path
                d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                stroke="currentColor"
                stroke_width="1.5"
              />
              <path
                d="M17.5078 6.5L17.4988 6.5"
                stroke="currentColor"
                stroke_width="2"
                stroke_linecap="round"
                stroke_linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
