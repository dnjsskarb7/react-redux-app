const express = require("express");
const app = express();
require("dotenv").config();



app.listen(PORT || process.env.PORT, () => {
  console.log(`Listening on ${PORT}...👀`);
});
