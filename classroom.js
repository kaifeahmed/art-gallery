const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const TOKEN_PATH = path.join(__dirname, 'token.json');

const SCOPES = ['https://www.googleapis.com/auth/classroom.courses'];
const code = "4/0ATx3LY6CnGPp6pRQ-jbfMTbtTlpe0n0Wkz66A4m8ceyXsqh70NtI__HmwZDz1PbLiQDuZg";

const client_id = "305247874592-u699aebcvomna2v5nobmpvnre12i66t1.apps.googleusercontent.com";
const client_secret = "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";
const redirect_uris ="http://localhost:3000";
let oAuth2Client;

function getAuthUrl() {
  const client_id = "305247874592-u699aebcvomna2v5nobmpvnre12i66t1.apps.googleusercontent.com";
  const client_secret = "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";
  const redirect_uris ="http://localhost:3000";
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('Authorize this app by visiting this url:', authUrl);
}

async function getAccessToken(oAuth2Client, code) {
    try {
      const { tokens } = await oAuth2Client.getToken(code);
      oAuth2Client.setCredentials(tokens);
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
      console.log('Token stored to', TOKEN_PATH);
    } catch (error) {
      console.error('Error retrieving access token', error);
    }
}
// getAccessToken(oAuth2Client, code);
function initializeOAuth2Client() {
    const client_id = "305247874592-u699aebcvomna2v5nobmpvnre12i66t1.apps.googleusercontent.com";
    const client_secret = "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";
    const redirect_uris ="http://localhost:3000";
    oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);
  
    if (fs.existsSync(TOKEN_PATH)) {
      const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
      oAuth2Client.setCredentials(token);
    } else {
      throw new Error('Token not found. Please authorize the app.');
    }
  }
  
//   initializeOAuth2Client();
  
  const classroom = google.classroom({ version: 'v1', auth: oAuth2Client });
  
  async function createCourse(courseData) {
    try {
      const response = await classroom.courses.create({
        requestBody: {
          name: courseData.name,
          section: courseData.section,
          description: courseData.description,
          ownerId: "kbaloch80@gmail.com",
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating course:', error);
      throw error;
    }
  }
  
  module.exports = {
    createCourse,
  };