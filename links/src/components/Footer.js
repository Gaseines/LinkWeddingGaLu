import React from "react";

//styles
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Developer <a target="_blank" rel="noreferrer"  href="https://gaseines.github.io/Portifolio">Gabriel Nunes</a>. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
