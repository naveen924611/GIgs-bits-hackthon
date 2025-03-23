const Job = require("../models/Job");

// Post a Job
exports.postJob = async (req, res) => {
  const { title, description, skillsRequired, postedBy } = req.body;

  try {
    const job = await Job.create({ title, description, skillsRequired, postedBy });
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: "Job posting failed" });
  }
};

// Get All Jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};
