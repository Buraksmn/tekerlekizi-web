import React from "react";

import ReportHero from "@/components/ReportHero";
import Container from "@/components/Container";
import { Card, Col, Form, Input, Row, Select } from "antd";
import AdvertListContainer from "@/containers/AdvertListContainer";

export interface ReportsPageProps {}

const ReportsPage: React.FC<ReportsPageProps> = () => {
  return (
    <div>
      <ReportHero></ReportHero>
      <Container>
        <div className="mt-xl pt-xl">
          <Card>
            <h5>Filtre</h5>
            <div>
              <Form layout="vertical">
                <Row align={"middle"} justify={"center"} gutter={12}>
                  <Col md={4} lg={4}>
                    <Form.Item label="İl">
                      <Select size="large"></Select>
                    </Form.Item>
                  </Col>
                  <Col md={4} lg={4}>
                    <Form.Item label="İlçe">
                      <Select size="large" />
                    </Form.Item>
                  </Col>
                  <Col md={4} lg={4}>
                    <Form.Item label="Marka">
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col md={4} lg={4}>
                    <Form.Item label="Model">
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col md={4} lg={4}>
                    <Form.Item label="Yıl">
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col md={4} lg={4}>
                    <Form.Item label="Renk">
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Card>
        </div>
        <AdvertListContainer title="Tüm İlanlar" />
      </Container>
    </div>
  );
};
export default ReportsPage;
