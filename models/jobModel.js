import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    jobType: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    aboutCompany: {
      type: String,
      required: true,
    },
    partTime: {
      type: Boolean,
    },

    jobDiscription: {
      type: String,
      required: true,
    },
    skillsRequired: String,
    whoCanApply: String,
    perks: String,
    noOfOpenings: String,
    startDate: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    stipend: {
      type: String,
      required: true,
    },
    applyBy: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    workFromHome: Boolean,
    location: {
      type: String,
    },
    // categories:[]
    logo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const jobModel = mongoose.model('job', jobSchema);

export default jobModel;
