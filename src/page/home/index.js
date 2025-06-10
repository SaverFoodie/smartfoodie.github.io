import { useState } from "react";
import Highlights from "./Highlights";
import Introduct from "./Introduct";
import Partner from "./partner";
import HomeFooter from "./HomeFooter";
import Main from "./Main";
import Storyline from "./storyline";

function Index() {
  const [refresh,setRefresh]=useState(false)

  return (
    <>
      <Main />
      <Storyline />
      <Introduct />
      <Highlights />
      <Partner />
      <HomeFooter />
    </>
  );
}

export default Index;
