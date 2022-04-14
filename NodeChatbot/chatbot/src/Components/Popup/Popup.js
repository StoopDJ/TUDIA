import React from "react";
import LandingPage from "../Pages/LandingPage";

const Popup = (props) => {
  return (
    <div style={{ position:"absolute",zIndex:1, right:"13%", top:"8%"}} >
      <span text= "x" onClick={props.handleClose}>
        <LandingPage />
      </span>
      {props.content}
    </div>
  );
};

export default Popup;
