const express = require("express");
const router = express.Router();
const Project = require("../models/project");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects" });
  }
});

router.post("/projects", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json({ message: "Project added", project: newProject });
  } catch (error) {
    res.status(500).json({ message: "Error adding project", error });
  }
})

module.exports = router;
