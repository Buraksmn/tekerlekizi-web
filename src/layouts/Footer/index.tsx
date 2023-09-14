import Container from "../../components/Container";
import React from "react";

export interface FooterProps {}
import Styles from "./Footer.module.scss";

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={Styles.footer}>
      <Container>
        <div className={Styles.footerContent}>
          <h1>Tekerlekizi</h1>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
