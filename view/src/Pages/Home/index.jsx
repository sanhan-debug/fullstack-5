import React from "react";
import Hero from "../../Components/Hero";
import Blocks from "../../Components/Blocks";
import Collections from "../../Components/Collections";
import Products from "../../Components/Products";
import BigSale from "../../Components/BigSale";

function Home() {
  return (
    <>
      <Hero />
      <Blocks />
      <Collections/>
      <Products/>
      <BigSale/>
    </>
  );
}

export default Home;
