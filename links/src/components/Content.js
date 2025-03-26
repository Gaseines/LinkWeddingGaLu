import React from "react";

//Styles
import styles from "./Content.module.css";

//images
import noix from "../images/gl.png";
import Footer from "./Footer";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.perfil}>
        <img className={styles.logo} src={noix} alt="Gabriel e Luiza" />
        <h1 className={styles.titulo}>Casamento Gabriel & Luiza</h1>
      </div>
      <div className={styles.container_links}>
        <ul>
          <li>
            <a href="https://noivos.casar.com/luiza-e-gabriel-2025-05-04#/rsvp" target="_black" >Confirmação de Presença</a>
          </li>
          <li>
            <a href="/LinkWeddingGaLu/pdf/manual.pdf" target="_blank" rel="noopener noreferrer">Manual do convidado</a>
          </li>
          <li>
            <a href="https://noivos.casar.com/luiza-e-gabriel-2025-05-04" target="_black" >Lista de Presentes</a>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/Sítio+Vô+Paulo+Bittencourt/@-26.7819628,-48.7752882,497m/data=!3m1!1e3!4m6!3m5!1s0x94df2bc06757f837:0x63b6b6b02593de70!8m2!3d-26.7821151!4d-48.774931!16s%2Fg%2F11vj_l4hjk?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D" target="_black" >Localização</a>
          </li>
          <li>
            <a href="https://www.wedshoots.com/download?albumId=ES1b133eda" target="_black" >Aplicativo de fotos compartilhado</a>
          </li>
          <p>Código do nosso álbum: ES1b133eda</p>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
