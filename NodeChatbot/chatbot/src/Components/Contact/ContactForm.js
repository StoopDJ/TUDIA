// Code Ref: https://herotofu.com/solutions/guides/react-contact-form
// Using Herotofu as a form component in this way we dont need to create a whole new form system

// import all components here

import React, { useState } from "react";

// API for the form
let FORM_ENDPOINT =
  " https://public.herotofu.com/v1/2d312290-abc3-11ec-9c35-5156bf57ed5d"; 

// Function for submitting the forms
// data will be submitted as JSON. For example: 
// { "name": "Amir", "email": "amirakak@gmail.com","message": "NOTE HERE"}
let ContactForm = () => {
  let [submitted, setSubmitted] = useState(false);
  let handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  // create message after the form was submitted
  if (submitted) {
    return (
      // simple html header and Div
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }
  // Form handle, method is POST
  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      style={{
        position: "-webkit-sticky",
        marginLeft: "30%",
        marginRight: "30%",
        marginTop: "5%",
        borderStyle: "none",
        padding: "2%",
        backgroundColor: "white",
        borderRadius: "25px",
        background: "#72a0c1",
        width: "30%",
        boxShadow: "5px 0px 80px 20px white",
      }}
    >
      <div>
        {/* Display Form, Input box with CSS here  */}
        <h1>Contact Us</h1>
        <input
          style={{ fontSize: "20px", lineHeight: "2", width: "48%" }}
          type="text"
          placeholder="FIRST NAME*"
          name="name"
          required
        />
        <input
          style={{
            fontSize: "20px",
            marginLeft: "1%",
            lineHeight: "2",
            width: "48%",
          }}
          type="text"
          placeholder="LAST NAME*"
          name="name"
          required
        />
      </div>
      <div></div>
      <div>
        <input
          style={{
            fontSize: "20px",
            marginTop: "1%",
            lineHeight: "2",
            width: "98.7%",
          }}
          type="email"
          placeholder="STUDENT EMAIL*"
          name="email"
          required
        />
      </div>
      <div>
        <textarea
          rows="10"
          style={{ fontSize: "20px", marginTop: "1%", width: "98.7%" }}
          placeholder="MESSAGE*"
          name="message"
          required
        />
      </div>
      <div>
        <button
          style={{
            fontSize: "20px",
            marginTop: "3%",
            marginLeft: "35%",
            lineHeight: "2",
          }}
          type="submit"
        >
          {" "}
          Send a message{" "}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
