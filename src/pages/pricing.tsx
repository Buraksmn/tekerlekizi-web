import React from "react";

import Container from "@/components/Container";
import { Card } from "antd";

export interface PricingPageProps {}

const PricingPage: React.FC<PricingPageProps> = () => {
  return (
    <Container>
      <Card className="mt-4xl">
        <h3>Ödüllendirme Sistemi Hakkında</h3>

        <b>
          Tekerlekizi.com kullanıcılarına 2 farklı şekilde ödül kazanmasını
          sağlar;
        </b>

        <ul>
          <li>
            Tekerlekizi.com platform üzerinde yayımlanmış bir ilanın
            bulunmasında yardımcı oldugunuz taktirde{" "}
            <b>
              <i>ödül@tekerlekizi.com</i>
            </b>{" "}
            adresine bir ileti göndermeniz yeterli olacaktır.
            <br></br>
            <br></br>
            <b>Mail içeriginde olması gerekenler;</b>
            <ul>
              <li>Platform üzerinde yayınlanan ilanın adresi(url)</li>
              <li>Bulunan aracın fotografları</li>
              <li>Bulunan aracın polis tesliminde çektiginiz görseller</li>
              <li>
                Polis ekiplerine bildirdiginize dair ekipler tarafından tutulan
                tutanak.
              </li>
            </ul>
          </li>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <li>
            Bir çalıntı araç ilanı verilirken ilan sahibi aracın bulunmasında
            yardımcı olan kişi veya kişilere ödüllendirme yapabilir. opsiyonel
            şekilde aldıgımız bu bilgiyi ilanların detay sayfalarında
            görebilirsiniz.
            <br></br>
            <br></br>
            <b>Önemli Hatırlatma</b>
            <br></br>
            İlan Sahibinin belirledigi ödülün tesliminde tekerlekizi.com un
            hiçbir sorumlulugu kabul etmedigini bilmenizi isteriz.
            <br></br>
            ilan sahibinin belirlemiş oldugu ödül direk olarak ilan sahibinden
            teslim alınır. tekerlekizi.com bu ödül sisteminde aracılık yapmaz.
          </li>
        </ul>
      </Card>
    </Container>
  );
};
export default PricingPage;
