import React, { useState } from "react";

import Styles from "./HomeHero.module.scss";
import Container from "../../components/Container";
import { Button } from "antd";
import NewAdvertModal from "@/modals/NewAdvertModal/NewAdvertModal";

export interface HomeHeroProps {}

const HomeHero: React.FC<HomeHeroProps> = () => {
  const [newReportModal, setnewReportModal] = useState(false);
  return (
    <div className={Styles.homeHero}>
      <Container>
        <h2 className={Styles.heroTitle}> Çalıntı Taşıt Paylaşma Platformu</h2>
        <h4 className={Styles.heroSubTitle}>
          Buldugunuz Her Araç için <span className={Styles.price}>100TL</span>{" "}
          Ödül !
        </h4>

        <div className={Styles.buttons}>
          <Button
            size="large"
            onClick={() => setnewReportModal(true)}
            type="primary"
          >
            Yeni İhbar Ekle
          </Button>
        </div>
      </Container>
      <NewAdvertModal
        open={newReportModal}
        onClose={() => setnewReportModal(false)}
      />
    </div>
  );
};
export default HomeHero;
