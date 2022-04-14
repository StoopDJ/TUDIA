// Import all react components here 

import React from "react";
import Nav from "../Navigation/Nav";
import Calculator from "../Calculator/Calculator";
import BackButton from "../Buttons/BackButton";


export default function Contact() {
  return (
    <>
      <div>
        <Nav />
        <BackButton/>
        <Calculator/>

       </div>
    </>
  );
}
