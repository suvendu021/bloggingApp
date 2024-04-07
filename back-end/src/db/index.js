import mongoose from "mongoose";
import { DB_NAME } from "../Constant.js";

const connectDB = async () => {
  try {
    const connectionDBinstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "our blog App db hosted at: ",
      connectionDBinstance.connection.host
    );
  } catch (error) {
    console.log("Error during connection to DB", error);
    process.exit(1);
  }
};
export { connectDB };
