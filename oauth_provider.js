require('dotenv').config();

// the client id from GCP
const client_id = process.env.OAUTH_CLIENT_ID;

// create a CSRF token and store it locally
const state = crypto.randomBytes(16).toString("hex");
localStorage.setItem("latestCSRFToken", state);
    
// redirect the user to Google
const link = `https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/cloud-platform&response_type=code&access_type=offline&state=${state}&redirect_uri=${window.location.origin}/integrations/google/oauth2/callback&client_id=${client_id}`;
window.location.assign(link);