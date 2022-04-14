// Documentation Ref:https://developers.google.com/identity/protocols/oauth2
// Code Ref: https://www.npmjs.com/package/react-google-login

// import all react components here 
import { GoogleLogin } from "react-google-login";
//import {  useNavigate } from "react-router";
import React  from "react";

// refresh token
import { refreshTokenSetup } from "./utils/refreshToken";

// client ID 
let clientId =
  "263406707950-dutl18qifkihb1g5m37dlpo90bpngpjr.apps.googleusercontent.com";

  // Login Function, Error checking needed, onSuccess display message to users
function Login() {
  //let navigate = useNavigate();
  let onSuccess = (res) => {
    // console.log("Login Success: currentUser:", res.profileObj);
    // send user a message 
    alert(
      `successfully Logged in \nwelcome ${res.profileObj.name}.`
    );

    //refresh token
    refreshTokenSetup(res);

    //navigate.push("/home");
  };

  //error checking 
 let onFailure = (res) => {
    //console.log("Login failed: res:", res);
    alert(`Failed to login.`);
  };

  return (
    <div style={{ marginTop: "0%" }}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
