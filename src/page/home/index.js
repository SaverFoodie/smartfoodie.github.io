import { useState } from "react";
import OurFood from "./OurFood";
import Highlights from "./Highlights";
import Introduct from "./Introduct";
import Partner from "./partner";
import HomeFooter from "./HomeFooter";
import Main from "./Main";
import RecommendationBanner from "./recommendation";

function Index() {
  const [refresh,setRefresh]=useState(false)

  return (
    <>
      <Main />
      <Introduct />
      <Highlights />
      <OurFood />
      <Partner />
      <RecommendationBanner />
      <HomeFooter />
    </>
  );
}
export default Index;
