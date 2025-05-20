import { useState } from "react";
import OurFood from "./OurFood";
import Highlights from "./Highlights";
import Introduct from "./Introduct";
import Partner from "./partner";
import HomeFooter from "./HomeFooter";
import Main from "./Main";

function Index() {
  const [refresh,setRefresh]=useState(false)

  return (
    <>
      <Main />
      <Introduct></Introduct>
      <Highlights></Highlights>
      <OurFood></OurFood>
      <Partner></Partner>
      <HomeFooter></HomeFooter>
    </>
  );
}
export default Index;
