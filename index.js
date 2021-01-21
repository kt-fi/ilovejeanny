const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = "BLwh0a57OVckoVwFRsOYcQaJONXCTevPiRjfAeAyAgGDOlgnDXpCEPyfvueBXj718FRG-4AA2TcZgyKL4CdCoCo";
const privateVapidKey = "-xgEJWO9QjQcV7ckM2kjgD0W4HKM2BFpVFpYA1jobeQ";
webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
