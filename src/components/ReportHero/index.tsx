import React from "react";

import Styles from "./ReportHero.module.scss";
import Container from "../Container";

export interface HomeHeroProps {}

const ReportHero: React.FC<HomeHeroProps> = () => {
  return (
    <div className={Styles.reportHero}>
      <Container>
        <h4 className={Styles.heroSubTitle}>
          Bildirilen Tüm Çalıntı veya Kayıp İlanları
        </h4>
      </Container>
    </div>
  );
};
export default ReportHero;
