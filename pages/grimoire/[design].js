import React from "react";
import { useRouter } from "next/router";

import BuyNowCard from "../../components/BuyNowCard/buy-now-card";
import SubscribeCard from "../../components/SubscribeCard/subscribe-card";

const Design = () => {
  let Component;
  const router = useRouter();
  const { design } = router.query;

  console.log(typeof design);

  switch (design) {
    case "1":
      Component = <BuyNowCard />;
      break;
    case "2":
      Component = <SubscribeCard />;
      break;
    default:
      Component = <h4>Show Us Your Grimoire</h4>;
  }
  return (
    <>
      <div className="grimoire-container">{Component}</div>
    </>
  );
};

export default Design;
