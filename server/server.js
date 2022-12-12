import cors from "cors";
const express = require("express");
require("dotenv").config();
import initRouter from "./src/routes/index";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_PORT,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRouter(app);

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log("server listening on");
});
