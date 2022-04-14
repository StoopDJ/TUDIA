// Note: following tutorial has been used to create this component 
// Ref: Nitin Patel - Jul 2, 2018
// URL : https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd

// importing all of the react components here

import React, { Component } from "react";
import RESULTS from "./Results";
import CAL_KEY_PAD from "./KeyPad";


class Calculator extends Component {

// Creating a constructor so we get a clear result at the start
  constructor() {
    super();

    this.state = {
      value: null,
      result:"",
    };
  }

  // Two button needed here, one for clearing the results, second one for delete
  onClick = (button) => {
    // Equal to AddUP
    if (button === "=") {
      this.AddUP();
    // Clear to clear the field   
    } else if (button === "CLEAR") {
      this.clear();
    // Delete to delete, delete one number
    } else if (button === "DELETE") {
      this.delete();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  // AddUP function 
  // we getting error when we do 6.6.6 this is basically 6*6*6
  AddUP = () => {
    // Check Results 
    let checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  // Lets clear the results 
  clear = () => {
    this.setState({
      //value:NULL
      result: "",
    });
  };

  // Lets delete, delete one number at the time 
  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      // creating a div to contain our calculator keypad and results box 
      <div
        style={{
          textAlign: "center",
          background: "#72a0c1",
          boxShadow: "5px 0px 60px 20px white",
          width: "20%",
          margin: "5% 5% 5% 40%",
          borderRadius: "25px",
          padding: "1%",
        }}
      >
       
        <div style={{ maxWidth: "400px", margin: "Auto" }}>
          <h1>Calculator</h1>

          {/* importing calculator keypad and results box  */}
          <RESULTS result={this.state.result} />
          <CAL_KEY_PAD onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
export default Calculator;
