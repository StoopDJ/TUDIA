import React from "react";

import Nav from "../Navigation/Nav";

import BackButton from "../Buttons/BackButton";

export default function Health() {
  return (
    <>
      <div>
        
        <Nav />
        <BackButton/>


        <h1>Welcome to TUD Health Chatbot</h1>

        <iframe src="http://127.0.0.1:5000/" title="myFrame"  width="800" height="700" style={{marginLeft:"30%", borderRadius:"20px"}} ></iframe>

        <div></div>
      </div>
    </>
  );
}
