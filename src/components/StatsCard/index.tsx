import React from "react";

import cn from "classnames";
import Styles from "./StatsCard.module.scss";
import Container from "../../components/Container";

export interface StatsCardProps {}

const StatsCard: React.FC<StatsCardProps> = () => {
  return (
    <div className={Styles.statsCard}>
      <Container>
        <div className={Styles.statsCardContent}>
          <div>
            <h1 className={Styles.titles}>12.938</h1>
            <h4 className={Styles.values}>Toplam İhbar</h4>
          </div>
          <div>
            <h1 className={Styles.titles}>129</h1>
            <h4 className={Styles.values}>Bulunan Araç Sayısı</h4>
          </div>
          <div>
            <h1 className={Styles.titles}>12.900TL</h1>
            <h4 className={Styles.values}>Dağıtılan Ödül</h4>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default StatsCard;
