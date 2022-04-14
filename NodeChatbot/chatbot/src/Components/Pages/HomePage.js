//CODE REF for PopUP: https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6

import React, { Component } from "react";
import Nav from "../Navigation/Nav";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";
import { Calendar } from "@ui5/webcomponents-react";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div>
        <Nav />

        <Calendar
          style={{ position: "fixed", zIndex: 1 }}
          hide-week-numbers
          selection-mode="Range"
        ></Calendar>

        <div>
          <button
            style={{ position: "absolute", left: "95%", top: "1%" }}
            onClick={this.togglePopup.bind(this)}
          >
            Login Here
          </button>
          {this.state.showPopup ? (
            <Popup closePopup={this.togglePopup.bind(this)} />
          ) : null}
        </div>

        <br />
        <div>
          <h1 style={{ color: "black", textAlign: "center", marginTop: "4%" }}>
            Welcome to TUD Intelligent Assistant
          </h1>
          <p style={{ color: "black", textAlign: "center", marginTop: "2%" }}>
            <h2>
              "The future belongs to those who believe in the beauty of their
              dreams."
            </h2>
            <h3 style={{ textAlign: "Left", marginLeft: "29%" }}>
              Eleanor Roosevelt
            </h3>
          </p>
        </div>

        <br />
        <br />
        <br />

        <div
          style={{
            display: "grid",
            marginLeft: "28%",
            gridTemplateColumns: "250px 250px 250px",
            gridTemplateRows: "100px 100px 100px",
            columnGap: "2rem",
            rowGap: "2rem",
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
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              to="/StudentLogin"
            >
              <p>Student Login</p>
            </Link>
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
          >
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              to="/Timetables"
            >
              <p>Timetables</p>
            </Link>
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
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              to="/Services"
            >
              <p> Services </p>
            </Link>
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
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              to="/Calculator"
            >
              <p>Calculator</p>
            </Link>
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
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              to="/Health"
            >
              <p>Health </p>
            </Link>
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
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              to="/note"
            >
              <p>Take Notes</p>
            </Link>
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
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              to="/Life"
            >
              <p> Weather</p>
            </Link>
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
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              to="/contact"
            >
              <p>Contact Us</p>
            </Link>
          </span>

          <span
            style={{
              borderStyle: "none",
              textAlign: "center",
              padding: "1%",
              background: "#00008B",
              borderRadius: "25px",
              cursor: "pointer",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              to="/home"
            >
              <p>Home Page</p>
            </Link>
          </span>
        </div>
        <br />
      </div>
    );
  }
}

export default Chat;
