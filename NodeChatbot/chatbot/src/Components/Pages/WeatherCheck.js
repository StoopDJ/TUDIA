import React from "react";

import Nav from "../Navigation/Nav";
import Weather from "../Weather/Weather";
import BackButton from "../Buttons/BackButton";



export default function Life() {
  return (
    <>
      <div>
        
        <Nav />
        <BackButton/>
        <Weather />
      
      </div>
    </>
  );
}
