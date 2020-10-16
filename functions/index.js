const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));


var admin = require("firebase-admin");
const functions = require('firebase-functions');

var serviceAccount = require("./xavier-ddf46-firebase-adminsdk-lnpmi-7143b648d3.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://xavier-ddf46.firebaseio.com",
});


app.post("/token", (req, res) => {
  if (true) {
    admin
      .auth()
      .createCustomToken(req.body.login || "halison")
      .then(function (token) {
        res.json({ token: token });
      })
      .catch(function (error) {
        res.status(500).json({ message: "Error during token creation", error });
      });
  }
})

exports.auth = functions.https.onRequest(app);
