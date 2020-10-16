var admin = require("firebase-admin");

var serviceAccount = require("./xavier-ddf46-firebase-adminsdk-lnpmi-7143b648d3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://xavier-ddf46.firebaseio.com",
});

// Backend
var firebaseAdmin = require("firebase-admin");
var express = require("express");
var router = express.Router();

router.post("/token", function (request, response, next) {
  if (true) {
    firebaseAdmin
      .auth()
      .createCustomToken(request.body.login)
      .then(function (token) {
        response.json({ token: token });
      })
      .catch(function (error) {
        res.status(500).json({ error: "Error during token creation" });
      });
  }
});
module.exports = router;
