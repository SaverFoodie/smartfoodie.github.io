import { useState } from "react";
import Banner from "../home/banner";
import OurFood from "../home/Banner3";
import Highlights from "../home/banner2";
import Introduct from "../home/banner1";
import HomeFooter from "../home/banner6";
import Partner from "../home/partner";

function Index() {

const [refresh,setRefresh]=useState(false)

  return (
    <>
      <Introduct></Introduct>
      <Banner></Banner>
      <Highlights></Highlights>
      <OurFood></OurFood>
      <Partner></Partner>
      <HomeFooter></HomeFooter>
     {/*
  <div className="flex items-center justify-center mx-3 h-[500px] rounded-3xl">


    <Form setRefresh={setRefresh} data="" />

  </div>
  <div className="flex justify-center">
    <List refresh={refresh}></List>
  </div>
*/}
    </>
  );
}
export default Index;
