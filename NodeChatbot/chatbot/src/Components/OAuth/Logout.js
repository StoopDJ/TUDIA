// Documentation Ref:https://developers.google.com/identity/protocols/oauth2
// Code Ref: https://www.npmjs.com/package/react-google-login

// import all react components here 
import React from "react";
import { GoogleLogout } from "react-google-login";

// client ID 
let clientId =
  "263406707950-dutl18qifkihb1g5m37dlpo90bpngpjr.apps.googleusercontent.com";

// Function for logging out of google account 
function Logout() {
  // onSuccess display a message for users 
  let onSuccess = () => {

    //console.log("Logout made successfully");
    //Display the message to users they're logged out
    alert("Successfully Logout");
  };


  return (
    <div style={{ marginTop: "10px", zIndex: "1" }}>
      
        <br/>
        
      {/* Google Logout component  */}
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
