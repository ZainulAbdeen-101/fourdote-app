import React from "react";
import {
  Navbars,
  Heros,
  Mains,
  Services,
  Contacts,
  Footers,
} from "./components/Components";

const page = () => {
  return (
    <>
      <Navbars />
      <Heros />
      <Mains />
      <Services />
      <Contacts />
      <Footers />
    </>
  );
};

export default page;
