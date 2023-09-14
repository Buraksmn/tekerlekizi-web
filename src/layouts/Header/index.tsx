import React, { useState } from "react";

import Styles from "./Header.module.scss";
import Container from "../../components/Container";

import { Button, Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
import CheckReportsModal from "@/modals/CheckReportsModal/CheckReportsModal";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [modal, setModal] = useState(false);
  return (
    <header className={Styles.header}>
      <Container>
        <div className={Styles.headerContent}>
          <Row
            style={{
              width: "100%",
            }}
            justify={"center"}
            align={"middle"}
          >
            <Col md={2} span={2}>
              <Link href={"/"} style={{ zIndex: "99" }}>
                <Image height={20} alt="logo" src={"/logo.png"} width={200} />
              </Link>
            </Col>

            <Col span={20} md={20}>
              <div className={Styles.menü}>
                <Link href={"/reports"}>İlanlar</Link>
                <Link href={"/pricing"}>Ödüllendirme</Link>
                {/* <a href="/about">Hakkımızda</a> */}
              </div>
            </Col>
            <Col md={2} span={2}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Button
                  onClick={() => setModal(true)}
                  size="large"
                  type="primary"
                >
                  Araç Kontrol
                </Button>

                {/* <Button size="large" type="dashed">
                  Giriş
                </Button> */}
              </div>
            </Col>
          </Row>

          <div>
            <CheckReportsModal
              open={modal}
              onClose={() => {
                setModal(false);
              }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
