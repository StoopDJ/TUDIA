import React from "react";
import Nav from "../Navigation/Nav";
import BackButton from "../Buttons/BackButton";

export default function Timetables() {
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
            width: "70%",
            margin: "2% 1% 5% 14%",
            borderRadius: "25px",
            padding: "1%",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>Timetables</h1>
            <h2>Student Timetables - Academic Year 2021/22</h2>
            <h3>Semester 2: January - May 2022</h3>
            <h3>All Timetables are provisional and are subject to change.</h3>
            <p>
              Your Programme Timetable is available to view in our online
              timetabling system.
            </p>
            <p> Please use link below </p>
            <span
              style={{
                borderStyle: "none",
                textAlign: "center",
                padding: "1%",
                width: "10%",
                background: "#00008B",
                borderRadius: "25px",
                cursor: "pointer",
                display: "block",
                marginLeft: "44%",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                }}
                href="https://timetables.tudublin.ie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Publish</p>
              </a>
            </span>
            <br />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/907pEd_qTy8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <p>
              A user guide is available:
              <a
                href="https://www.tudublin.ie/media/website/for-students/timetables/documents/How-to-Access-Your-Timetable.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to Access Your Timetable
              </a>
            </p>
            <p>
              Please check your provisional timetables frequently, as changes
              may occur at the start of each semester.
            </p>
            <p>
              Blanchardstown timetables will be available from Friday, 21st
              January 2022.
            </p>
            <p>
              Grangegorman, Aungier Street and Bolton Street timetables will be
              available from Wednesday, 19th January 2022.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
