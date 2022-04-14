import React from "react";

import Nav from "../Navigation/Nav";
import BackButton from "../Buttons/BackButton";

export default function Services() {
  return (
    <>
      <div>
        <Nav />
        <BackButton />
        <div
          style={{
            textAlign: "center",
            background: "#72a0c1",
            boxShadow: "5px 0px 60px 20px white",
            width: "50%",
            margin: "5% 5% 5% 23%",
            borderRadius: "25px",
            padding: "2%",
            position: "fixed",
          }}
        >
          <h1>Student Services and Support</h1>
         
            <p>
              As a TU Dublin student we have a range of student services and
              supports available to you.
            </p>
         
          </div>

          <div
            style={{
              position: "relative",
              display: "grid",
              marginLeft: "30%",
              gridTemplateColumns: "250px 250px 250px",
              gridTemplateRows: "100px 100px 100px",
              columnGap: "2rem",
              rowGap: "2rem",
              marginTop:"18%"
            }}
          >
            <span
              style={{
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                background: "#CE122D",
                borderRadius: "25px",
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
                }}
                href="https://www.tudublin.ie/for-students/student-services-and-support/latest-news--events/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Latest News</p>
              </a>
            </span>
            <span
              style={{
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                background: "#F0823C",
                borderRadius: "25px",
                cursor: "pointer",
              }}
              href="https://www.tudublin.ie/for-students/student-services-and-support/registration/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                }}
                href="/Timetables"
              >
                <p>Registration</p>
              </a>
            </span>
            <span
              style={{
                cursor: "pointer",
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                background: "#4B0082",
                borderRadius: "25px",
                minHeight: "13%",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                }}
                href="https://www.tudublin.ie/for-students/student-services-and-support/fees-grants/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> Fees &amp; Grants </p>
              </a>
            </span>
            <span
              style={{
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                background: "#7B68EE",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                }}
                href="https://www.tudublin.ie/for-students/student-services-and-support/examinations/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Examinations</p>
              </a>
            </span>

            <span
              style={{
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                background: "#B60057",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                }}
                href="https://www.tudublin.ie/for-students/student-services-and-support/student-information-desks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Information Desks </p>
              </a>
            </span>

            <span
              style={{
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                background: "#2856A3",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                }}
                href="https://www.tudublin.ie/for-students/student-services-and-support/withdrawing-from-your-programme/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> Withdrawing </p>
              </a>
            </span>

            <span
              style={{
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                background: "#00A9B7",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                }}
                href="https://www.tudublin.ie/for-students/student-services-and-support/deferring-from-your-programme/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> Deferring </p>
              </a>
            </span>

            <span
              style={{
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                background: "#00795F",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                }}
                href="https://www.tudublin.ie/for-students/student-services-and-support/student-wellbeing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Student Wellbeing</p>
              </a>
            </span>

            <span
              style={{
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                background: "#1E90FF",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                }}
                href="https://www.tudublin.ie/for-students/student-services-and-support/financial-support/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Financial Support</p>
              </a>
            </span>
          
        </div>
      </div>
    </>
  );
}
