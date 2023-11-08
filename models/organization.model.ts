import mongoose, { model } from "mongoose";

const organisationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  orgOwner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  year: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  githubUrl: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return v.startsWith("https://github.com/");
      },
      message: (props: { value: string }) =>
        `${props.value} is not a valid GitHub link! It should start with "https://github.com/".`,
    },
  },
  description: {
    type: String,
    required: true,
  },
  miniDescription: {
    type: String,
    required: true,
  },
  isAccepted: {
    type: String,
    enum: ["PENDING", "REJECTED", "ACCEPTED"],
    default: "PENDING",
  },
});

const Organisation = mongoose.model("Organisation", organisationSchema);

export default Organisation;
