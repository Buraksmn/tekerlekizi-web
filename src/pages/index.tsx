import Container from "@/components/Container";
import HomeHero from "@/components/HomeHero";
import StatsCard from "@/components/StatsCard";
import AdvertListContainer from "@/containers/AdvertListContainer";
import NewAdvertSection from "@/sections/NewAdvertSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tekerlekizi</title>
        <meta
          name="description"
          content="Tekerlekizi.com Çalıntı araçların bulunması için kurulan ve ödül dagıtan bir platform."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeHero></HomeHero>
        <StatsCard></StatsCard>
        <Container>
          <AdvertListContainer title="Son Eklenenler" to="/reports" />
        </Container>
        <div className="mt-lg">
          <NewAdvertSection />
        </div>
        <Container>
          <AdvertListContainer
            title="Bulundugunuz konumdaki ilanlar"
            to="/reports"
          />
        </Container>
      </main>
    </>
  );
}
