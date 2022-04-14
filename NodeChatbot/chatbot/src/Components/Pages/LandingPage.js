import React from "react";
import Login from "../OAuth/Login";
import Logout from "../OAuth/Logout";

//CODE REF: https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6

export default function LandingPage() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          background: "#72a0c1",
          boxShadow: "5px 0px 60px 20px white",
          width: "200%",
          margin: "5% 5% 5% 43.5%",
          borderRadius: "25px",
          padding:"1%",
                 
        }}
      >
        <h3>Please login Here</h3>

        <br></br>
        <br></br>
        <Login />
        <Logout />
        <br></br>
        <br></br>
      </div>
    </>
  );
}
