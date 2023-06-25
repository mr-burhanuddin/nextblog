import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL);
  } catch (error) {
    throw new Error("Failed To Make DB Connection");
  }
};

export default connect;
