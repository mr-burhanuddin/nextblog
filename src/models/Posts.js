import mongoose from "mongoose";

const { Schema } = mongoose;

let Posts;

try {
  // Try to retrieve the existing model if it has already been defined
  Posts = mongoose.model("Posts");
} catch (error) {
  // If the model doesn't exist, define it
  const postSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  Posts = mongoose.model("Posts", postSchema);
}

// Export the model
export default Posts;
