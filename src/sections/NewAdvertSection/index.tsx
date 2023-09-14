import React, { useState } from "react";

import cn from "classnames";
import Styles from "./NewAdvertSection.module.scss";
import { Button } from "antd";
import Container from "../../components/Container";
import NewAdvertModal from "@/modals/NewAdvertModal/NewAdvertModal";

export interface NewAdvertSectionProps {}

const NewAdvertSection: React.FC<NewAdvertSectionProps> = () => {
  const [newReportModal, setnewReportModal] = useState(false);

  return (
    <div className={Styles.newAdvertSection}>
      <Container>
        <div className={Styles.inner}>
          <div className={Styles.leftContent}>
            <h1 className={Styles.title}>Aracınız mı Çalındı</h1>
            <h2 className={Styles.subTitle}>
              Bizimle paylaşın. bulunma sürecini hızlansın.
            </h2>
          </div>

          <Button
            onClick={() => setnewReportModal(true)}
            className={Styles.reportButton}
            size="large"
            type="primary"
          >
            Bildir!
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
export default NewAdvertSection;
