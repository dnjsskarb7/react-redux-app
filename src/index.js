const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const middleware = require("./middleware");
const router = require("./routes");
const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: `${process.env.CORS_ORIGIN}`,
  })
);

app.use(express()); //Body parser for post request
app.use("/posts", router);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(5000 || process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}...👀`);
});
