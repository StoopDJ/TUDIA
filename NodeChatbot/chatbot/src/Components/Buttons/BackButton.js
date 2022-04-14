// importing all of the react components here
import React, { Component } from "react";

// a component for navigating to home page
// need a button with <a> href="./home" </a>
class BackButton extends Component {
  render() {
    return (
        // Creating a new div, button and link it to home 
      <div>
        <button style={{background:"#3F5161", position:"absolute",
              left:"90%", top:".8%"}}>
          <a
            href="./home"
            style={{
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
             
           
            }}
          >
            Back to Home
          </a>
        </button>
      </div>
    );
  }
}

export default BackButton;
