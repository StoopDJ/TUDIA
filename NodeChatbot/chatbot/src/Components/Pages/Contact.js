import React from "react";
import Nav from "../Navigation/Nav";
import ContactMap from "../GoogleMap/Map";
import ContactForm from "../Contact/ContactForm";
import { Bar } from "@ui5/webcomponents-react";
import tud from "./imgs/tu-dublin-logo1.svg";
import BackButton from "../Buttons/BackButton";

export default function Contact() {
  return (
    <>
      <div>
        <Nav />
        <BackButton />
        <ContactForm />

        <Bar
          design="Footer"
          style={{
            position: "absolute",
            marginTop: "5%",
            height: "80%",
            boxShadow: "0px 0px 50px 10px #3F5161",
            background: "#3F5161",
          }}
        ></Bar>

        <div>
          <hr
            style={{
              width: "100%",
              position: "absolute",
              marginTop: "5%",
              color: "#3F5161",
            }}
          />
          <img
            style={{ position: "absolute", marginTop: "7%", marginLeft: "5%" }}
            src={tud}
            alt=" TU DUBLIN"
          />

          <p
            style={{
              position: "absolute",
              marginTop: "14%",
              marginLeft: "7%",
              color: "white",
            }}
          >
            <strong>General Enquiries</strong>
            <br />
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="tel:+353-1-220-5000"
            >
              +353 1 220 5000
            </a>

            <div
              style={{
                position: "absolute",
                marginTop: "-175%",
                marginLeft: "150%",
                width: "1000%",
              }}
            >
              <h4>
                <br />
                <br />
                <strong>Aungier Street</strong>
              </h4>
              <p>Situated on the Ground Floor (opposite Grumpy Mule Café)</p>
              <p>
                <div style={{ marginLeft: "40%", marginTop: "-6.5%" }}>
                  <strong>
                    Opening Hours
                    <br />
                  </strong>
                  Monday - Thursday 09:00 - 13:00, 14.00 - 17:00
                  <br />
                  Friday 09.00 - 13.00, 14.00 - 16.00
                  <br />
                  <strong>Tel: </strong>+353 1 220 6003
                  <br />
                  <strong>Email: </strong>
                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href="mailto:studentservices.city@tudublin.ie"
                  >
                    studentservices.city@tudublin.ie
                  </a>
                  <a href="mailto:studentservices.city@tudublin.ie">
                    <br />
                  </a>
                </div>
              </p>

              <h4>
                <strong>Grangegorman</strong>
              </h4>
              <p>Situated on the Ground Floor, Rathdown House, RD002</p>
              <div style={{ marginLeft: "40%", marginTop: "-6.8%" }}>
                <p>
                  <strong>
                    Opening Hours
                    <br />
                  </strong>
                  Monday - Friday 09:30 - 13:00, 14:00 - 16:30
                  <br />
                  <strong>Tel:</strong> +353 1 220 6003
                  <br />
                  <strong>Email:</strong>
                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href="mailto:studentservices.city@tudublin.ie"
                  >
                    studentservices.city@tudublin.ie
                  </a>
                </p>
              </div>
            </div>
          </p>
          <ContactMap />
        </div>
      </div>
    </>
  );
}
