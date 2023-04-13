const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).res.send("Home");
});

app.get("/data", (req, res) => {
  const data = {
    Bangalore: "25C",
    Delhi: "32C",
    Mumbai: "27C",
  };
  //const { movie } = req.query;
  const { city } = req.query;
  const returnData = data[city];
  res.send(
    `This will contain details about the ${city}-temprature ${returnData}`
  );
});

app.listen(8080, "localhost", () => {
  console.log("initializing server module, data is available");
});
