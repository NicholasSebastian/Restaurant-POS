import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import credentials from "./credentials.json";

const SHEET_ID = "1W6S_2amvGrTrhoS7y_6OBg-Zc97MujbaBDfNOBcwDCg";
const OPTIONS = {
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file'
  ]
};

let instance: GoogleSpreadsheet;

export default () => {
  if (!instance) {
    const auth = new JWT(OPTIONS);
    instance = new GoogleSpreadsheet(SHEET_ID, auth);
  }
  return instance;
}

// TODO: Fix this. It most likely got an error because it's being 
// instantiated in a browser environment instead of Node.js
