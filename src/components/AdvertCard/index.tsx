import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button, Card } from "antd";
import cn from "classnames";

import Styles from "./AdvertCard.module.scss";

export interface AdvertCardProps {}

const AdvertCard: React.FC<AdvertCardProps> = () => {
  return (
    <Link href={"/reports/:id"}>
      <Card className={cn(Styles.eventBox)}>
        <div className={Styles.dateBox}>
          <div>İstanbul/</div>
          <div>Başakşehir</div>
        </div>
        <div className={Styles.bannerWrapper}>
          <Image
            width={1000}
            alt="ilan"
            height={1000}
            src={"/reportimage.jpeg"}
            className={Styles.banner}
          />
        </div>

        <h6 className={Styles.title}>
          Lorem Ipsum is simply dummy text of the printing{" "}
        </h6>
        <p className={Styles.description}>
          typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took
        </p>

        <div>
          <Button className={Styles.button} type="dashed">
            Detay
          </Button>
        </div>
      </Card>
    </Link>
  );
};
export default AdvertCard;
