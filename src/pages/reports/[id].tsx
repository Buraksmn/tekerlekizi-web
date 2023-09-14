import Container from "@/components/Container";
import { Card, Carousel, Descriptions, DescriptionsProps } from "antd";
import React from "react";

export interface ReportDetailPageProps {}

const ReportDetailPage: React.FC<ReportDetailPageProps> = () => {
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Marka",
      children: "Yamaha",
      span: 24,
    },
    {
      key: "2",
      label: "Model",
      children: "YZF R25",
      span: 24,
    },
    {
      key: "2",
      label: "Plaka",
      children: "34 FNZ 274",
      span: 12,
    },
    {
      key: "2",
      label: "Şase No",
      children: "1823 8123 89127398172398",
      span: 12,
    },
    {
      key: "3",
      label: "Yıl",
      children: "2023",
      span: 12,
    },
    {
      key: "4",
      label: "Çalınma Tarihi",
      children: "2018-04-24 18:00:00",
      span: 12,
    },
    {
      key: "5",
      label: "İlan Eklenme Tarihi",
      children: "2019-04-24 18:00:00",
      span: 12,
    },

    {
      key: "8",
      label: "İl",
      children: "$20.00",
      span: 12,
    },
    {
      key: "9",
      label: "İlçe",
      children: "Başakşehir",
      span: 12,
    },
    {
      key: "9",
      label: "Ödül",
      children: "$60.00",
      span: 12,
    },
    {
      key: "10",
      label: "Açıklama",
      children: (
        <>
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
          <br />
        </>
      ),
    },
  ];

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const items2: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Product",
      children: "Cloud Database",
    },
    {
      key: "2",
      label: "Billing",
      children: "Prepaid",
    },
    {
      key: "3",
      label: "Time",
      children: "18:00:00",
    },
    {
      key: "4",
      label: "Amount",
      children: "$80.00",
    },
    {
      key: "5",
      label: "Discount",
      children: "$20.00",
    },
    {
      key: "6",
      label: "Official",
      children: "$60.00",
    },
  ];
  return (
    <div>
      <Container>
        <h3 className=" mt-4xl mb-lg">2023 Yamaha YZF R25</h3>
        <Carousel className="" afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <Card className="mt-xl">
          <Descriptions
            size="small"
            title="Araç Hakkında"
            bordered
            items={items}
          />
        </Card>

        <Card className="mt-lg">
          <Descriptions title="İlan Sahibi" size={"small"} items={items2} />
        </Card>
      </Container>
    </div>
  );
};

export default ReportDetailPage;
