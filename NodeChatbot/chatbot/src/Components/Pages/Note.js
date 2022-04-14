import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../CSS/index.css";
import Nav from "../Navigation/Nav";
import BackButton from "../Buttons/BackButton";


const NOTES_COLL = [];
const TABLE_ROW_ID = { value: 1 };

class MainPage extends Component {
  //REACT USE RENDER METHOD
  render() {
    return (
      <section>
        <Nav />
        <BackButton />
        <section
          style={{
            textAlign: "center",
            background: "#72a0c1",
            boxShadow: "5px 0px 60px 20px white",
            width: "20%",
            margin: "3% 3% 3% 40%",
            borderRadius: "25px",
            padding: "2%",
          }}
        >
          <div>
            <h2 style={{ textAlign: "center", marginTop:"0%"  }}>Notes Application </h2>
            <input
              type="text"
              id="myText"
              placeholder="Enter your note here..."
              style={{ fontSize: "16px" }}
            />
            <button
              id="Add"
              onClick={this.NEW_NOTE}
              style={{ fontSize: "16px" }}
            >
              Add a note
            </button>
          </div>
        </section>
        <div style={{marginLeft:"1%", marginTop: "1em",}} id="NOTES"></div>
      </section>
    );
  } //END RENDER

  NEW_NOTE = () => {
    const note = document.getElementById("myText").value;
    //prompt("Enter your note here...");
    if (note == null) {
      return;
    }
    const NOTE_ID = "NOTES_DIV" + TABLE_ROW_ID.value;

    // PARAGRAPH
    const NOTE_P = React.createElement(
      "p",
      { key: " paragraph" + NOTE_ID },
      note
    );

    //EDIT AND DELETE BUTTON
    const EDIT_ID = "EDIT_B" + TABLE_ROW_ID.value;
    const EDIT_B = React.createElement(
      "button",
      {
        key: EDIT_ID,
        id: EDIT_ID,
        onClick: () => this.EDIT_B_FUNCTION(EDIT_ID),
      },

      "Edit"
    );

    const DELETE_ID = "DELETE_B" + TABLE_ROW_ID.value;
    const DELETE_B = React.createElement(
      "button",

      {
        key: DELETE_ID,
        id: DELETE_ID,
        onClick: () => this.MainDELETE_B(DELETE_ID),
      },

      "Delete"
    );

    // HEADER
    const HEADER = React.createElement(
      "h2",
      { key: "h2" + NOTE_ID },
      "pick a color for your note"
    );

    // CREATING BUTTONS
    const PINK_B = React.createElement("button", {
      key: "PINK_B" + TABLE_ROW_ID.value,
      className: "PINK_B",
      onClick: () => this.PINK_SET(NOTE_ID),
    });

    const AQUA_B = React.createElement("button", {
      key: "AQUA_B" + TABLE_ROW_ID.value,
      className: "AQUA_B",
      onClick: () => this.AQUA_SET(NOTE_ID),
    });

    const WHITE_B = React.createElement("button", {
      key: "WHITE_B" + TABLE_ROW_ID.value,
      className: "WHITE_B",
      onClick: () => this.WHITE_SET(NOTE_ID),
    });

    //DIV TO CONTAIN ALL NOTES AND BUTTONS(USE REACT AND RENDER METHOD)
    const MAIN_DIV = React.createElement(
      "div",
      { className: "NOTES_DIV", key: NOTE_ID, id: NOTE_ID },
      [NOTE_P, EDIT_B, DELETE_B, HEADER, PINK_B, AQUA_B, WHITE_B]
    );

    NOTES_COLL.push(MAIN_DIV);
    TABLE_ROW_ID.value = TABLE_ROW_ID.value + 1;
    ReactDOM.render(NOTES_COLL, document.getElementById("NOTES"));
  };

  //BUTTONS
  EDIT_B_FUNCTION(CounterId) {
    let NOTES_A = document.getElementById("NOTES");
    let NOTES_C = NOTES_A.getElementsByClassName("NOTES_DIV");

    for (let i = 0; i < NOTES_C.length; i++) {
      let P_AREA = NOTES_C[i].getElementsByTagName("p");
      let P_TEXT = P_AREA[0];

      let BUTTONS = NOTES_C[i].getElementsByTagName("button");
      let EDIT_B = BUTTONS[0];

      if (EDIT_B.id === CounterId) {
        var newText = prompt("Update your note here ...", P_TEXT.innerText);
        if (newText == null) {
          return;
        }
        P_TEXT.innerText = newText;
        break;
      }
    }
  }

  MainDELETE_B(CounterId) {
    const NOTES_A = document.getElementById("NOTES");
    const NOTES_C = NOTES_A.getElementsByClassName("NOTES_DIV");

    for (let i = 0; i < NOTES_C.length; i++) {
      let BUTTONS = NOTES_C[i].getElementsByTagName("button");
      let BUTTON_D = BUTTONS[1];

      if (BUTTON_D.id === CounterId) {
        NOTES_A.removeChild(NOTES_C[i]);
        const index = NOTES_COLL.indexOf(CounterId);
        NOTES_COLL.pop(index);
        console.log(NOTES_COLL);
        break;
      }
    }
  }

  PINK_SET(CounterID) {
    document.getElementById(CounterID).style.backgroundColor = "pink";
  }

  WHITE_SET(CounterID) {
    document.getElementById(CounterID).style.backgroundColor = "white";
  }

  AQUA_SET(CounterID) {
    document.getElementById(CounterID).style.backgroundColor = "aqua";
  }
}

export default MainPage;
