// require("dotenv").config({ path: "./env" });
import { connectDB } from "./db/index.js";
import { app } from "./App.js";
import "dotenv/config";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("express can not interact with DB", error);
      throw error;
    });
    app.get("/", (req, res) => {
      res.send("server start");
    });
    app.listen(process.env.PORT, () => {
      console.log(
        "server is running at port: http://localhost:",
        process.env.PORT
      );
    });
  })
  .catch((error) => console.log("error during connection in db", error));
