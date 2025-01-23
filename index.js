const express = require("express");
const cors = require("cors");
const routes = require("./routes/furniture");

const app = express();
const PORT = 4000;
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

app.use("/data", routes);

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
