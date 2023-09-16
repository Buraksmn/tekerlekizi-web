import React from "react";
import Link from "next/link";
import { Button, Col, Row } from "antd";

import Styles from "./AdvertListContainer.module.scss";
import AdvertCard from "@/components/AdvertCard";

export interface AdvertListContainerProps {
  title: string;
  extra?: "location";
  to?: string;
  filterTypes?: "last";
}

const AdvertListContainer: React.FC<AdvertListContainerProps> = ({
  title,
  filterTypes,
  extra,
  to,
}) => {
  return (
    <div className={Styles.lastestList}>
      <div className={Styles.head}>
        <h3 className={Styles.title}>{title}</h3>
        {to && (
          <Button type="text">
            <Link href={"/"}>Tümünü Gör</Link>
          </Button>
        )}
      </div>
      <div className={Styles.list}>
        <Row gutter={[16, 12]}>
          <Col span={24} lg={6} md={6}>
            <AdvertCard />
          </Col>
          <Col span={24} lg={6} md={6}>
            <AdvertCard />
          </Col>
          <Col span={24} lg={6} md={6}>
            <AdvertCard />
          </Col>
          <Col span={24} lg={6} md={6}>
            <AdvertCard />
          </Col>
          <Col span={24} lg={6} md={6}>
            <AdvertCard />
          </Col>
          <Col span={24} lg={6} md={6}>
            <AdvertCard />
          </Col>
          <Col span={24} lg={6} md={6}>
            <AdvertCard />
          </Col>
          <Col span={24} lg={6} md={6}>
            <AdvertCard />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default AdvertListContainer;
