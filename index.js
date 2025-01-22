const express = require("express");
const cors = require("cors");
const routes = require("./routes/furniture");

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

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
