const express = require("express");
const { postJob, getJobs } = require("../controllers/jobController");

const router = express.Router();

router.post("/post", postJob);
router.get("/all", getJobs);

module.exports = router;
