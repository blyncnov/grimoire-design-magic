import Head from "next/head";

// My Components
import BuyNowCard from "../components/BuyNowCard/buy-now-card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grimoire | design spells</title>
        <meta
          name="Grimoire | design spells"
          content="Grimoire | design spells"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grimoire-container">
        <BuyNowCard />
      </div>
    </div>
  );
}
