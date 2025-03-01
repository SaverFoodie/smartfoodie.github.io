import { useState } from "react";
import Banner from "./banner";
import OurFood from "./Banner3";
import Highlights from "./banner2";
import Introduct from "./banner1";
import HomeFooter from "./banner6";

function Index() {

const [refresh,setRefresh]=useState(false)

  return (
    <>
      <Introduct></Introduct>
      <Banner></Banner>
      <Highlights></Highlights>
      <OurFood></OurFood>
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
