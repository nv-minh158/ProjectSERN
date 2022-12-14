import cors from "cors";
const express = require("express");
require("dotenv").config();
import initRouter from "./src/routes/index";
import connectDataBase from "./src/config/connectDB";

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
connectDataBase();
const port = process.env.PORT || 8888;

app.listen(port, () => console.log(`Server started on port ${port}`));
