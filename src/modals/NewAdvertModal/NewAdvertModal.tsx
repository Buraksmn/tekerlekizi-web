import React from "react";

import cn from "classnames";
import Styles from "./NewAdvertModal.module.scss";
import {
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Space,
  Upload,
} from "antd";

export interface NewAdvertModalProps {
  onClose: () => void;
  open: boolean;
}

const NewAdvertModal: React.FC<NewAdvertModalProps> = ({ onClose, open }) => {
  return (
    <Modal onCancel={onClose} width={"700px"} open={open}>
      <h3>Yeni İhbar</h3>
      <Form layout="vertical">
        <Row gutter={12}>
          <Col md={8} span={24}>
            <Form.Item label="Marka">
              <Select size="large" />
            </Form.Item>
          </Col>
          <Col md={8} span={24}>
            <Form.Item label="Model">
              <Select size="large" />
            </Form.Item>
          </Col>

          <Col md={8} span={24}>
            <Form.Item label="Model Yıl">
              <Input size="large"></Input>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Renk">
          <Select size="large" />
        </Form.Item>

        <Row gutter={12}>
          <Col md={12} span={24}>
            <Form.Item label="Plaka">
              <Input size="large"></Input>
            </Form.Item>
          </Col>
          <Col md={12} span={24}>
            <Form.Item label="Şase No">
              <Input size="large"></Input>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Çalınma Tarihi">
          <DatePicker style={{ width: "100%" }} size="large"></DatePicker>
        </Form.Item>

        <Form.Item
          help="Çalınan aracın nereden nasıl çalındıgı hakkında bilgilendirme yapınız."
          label="Açıklama"
        >
          <Input.TextArea></Input.TextArea>
        </Form.Item>

        <Form.Item
          help="Aracınızın görselleri ve çalınma anına ait fotograf ve videolarınızı ekleyebilirsiniz."
          label="Dosyalar"
        >
          <Upload.Dragger multiple>
            <div className="pl-md pr-md">
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </div>
          </Upload.Dragger>
        </Form.Item>

        <Row gutter={12}>
          <Col md={12} span={24}>
            <Form.Item label="İl">
              <Select size="large"></Select>
            </Form.Item>
          </Col>
          <Col md={12} span={24}>
            <Form.Item label="İlçe">
              <Select size="large"></Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={12}>
          <Col md={12} span={24}></Col>
          <Col md={12} span={24}></Col>
          <Col md={12} span={24}></Col>
        </Row>

        <Row gutter={12}>
          <Col md={12} span={24}>
            <Form.Item label="Telefon No">
              <Input size="large"></Input>
            </Form.Item>
          </Col>
          <Col md={12} span={24}>
            <Form.Item label="Email">
              <Input size="large"></Input>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          help="Aracın Bulunmasında yardımcı olan kişiye ödül vermek istermisiniz ? (Bu ödül mikarı için platform aracılık yapmaz.)"
          label="Ödül*"
        >
          <Input size="large"></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default NewAdvertModal;
