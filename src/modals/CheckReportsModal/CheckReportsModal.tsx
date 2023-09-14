import React from "react";

import { Form, Input, Modal } from "antd";
import Link from "next/link";

export interface CheckReportsModalProps {
  open: boolean;
  onClose: () => void;
}

const CheckReportsModal: React.FC<CheckReportsModalProps> = ({
  onClose,
  open,
}) => {
  return (
    <Modal onCancel={onClose} width={"700px"} open={open}>
      <h3>Araç Kontrol</h3>
      <p>
        Bu form çalıntı oldugunuz bir aracı plaka veya şase no ile kontrol
        edebilirsiniz. eğer araç üzerinde bu bilgiler bulunmuyorsa{" "}
        <Link href={"/reports"}>İlanlar</Link> sayfasından detaylı arama
        yapabilirsiniz.
      </p>

      <Form layout="vertical">
        <Form.Item help="Araç üzerine plaka var mı ?" label="Plaka">
          <Input />
        </Form.Item>
        <Form.Item help="Şase no okunur durumda mı ? " label="Şase No">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default CheckReportsModal;
