import React from "react";

import Nav from "../Navigation/Nav";
import icon from "./imgs/ict.png";
import BackButton from "../Buttons/BackButton";


export default function StudentLogin() {
  return (
    <>
      <div>
        <Nav />
        <BackButton />

        <div style={{ textAlign: "center",
          background: "#72a0c1",
          boxShadow: "5px 0px 60px 20px white",
          width: "70%",
          margin: "2% 1% 5% 13%",
          borderRadius: "25px",
          padding:"1%",  }}>
          <h1>Student Login at TU Dublin</h1>
          <p>
            Student of TU Dublin are entitled to the use of a wide
            range of services such as email, Wi-Fi, print services, data
            storage, software and etc
          </p>
          <h3>In order to Log in users need full TU Dublin email address for username.</h3>
          <h3> Please use the link below to access Brightspace</h3>
          <span
            style={{
              borderStyle: "none",
              textAlign: "center",
              padding: "1%",
              background: "#CE122D",
              borderRadius: "5px",
              cursor: "pointer",
              minHeight: "13%",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
                display:"inline-block"
              }}

              href="https://brightspace.tudublin.ie/"
              target="_blank"
              rel="noopener noreferrer"

            >
              <p>Student Login</p>
            </a>
          </span>
          <h2>Student Login at City Centre</h2>
      
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Y-G3Hs1ZW00"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{}}
            ></iframe>
         <div/>
      

      <h3>TU Dublin Student Email is hosted by Microsoft 365.</h3>
          <h3>
            Your username is [your student number]@mytudublin.ie. For new
            students, please use the 8-character password provided in the
            Invitation to Register letter sent to your personal email address
          </h3>
          <h2>Contact Us</h2>
          <img style={{}} src={icon} alt=" Logo" />
          <br></br>
          <strong>
            Email:
            <a href="mailto:itsupport.city@tudublin.ie">
              itsupport.city@tudublin.ie
            </a>
          </strong>
          <br></br>
          <strong> Tel: 01 220 5123 for all IT queries</strong>
        </div>
        </div>
    </>
  );
}
