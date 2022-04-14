// Code Ref: https://github.com/anthonyjgrove/react-google-login/issues/175


// a function to refresh the Token 
// The setup for refreshing token automatically

export let refreshTokenSetup = (res) => {

    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  
    let refreshToken = async () => {
     let newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    

      // saveUserToken(newAuthRes.access_token);  <-- save new token
      // we can save it for Page router so we can navigate to home page
      // this could be future work for TUDIA 
      localStorage.setItem('authToken', newAuthRes.id_token);
  
      // Setup the other timer after the first one
      setTimeout(refreshToken, refreshTiming);
    };
  
    // Setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
  };