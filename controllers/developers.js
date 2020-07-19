const Developer = require("../models/Developer");
const axios = require("axios");

// @desc    Get all developers
// @route   GET /api/developers
// @access  Public
exports.getDevelopers = async (req, res, next) => {
  try {
    const isDBEmpty = Boolean(await Developer.find().length);
    if (isDBEmpty) {
      const url = "https://jsonplaceholder.typicode.com/users";
      const { data } = await axios.get(url);
      data.forEach(async (item) => {
        await Developer.create(item);
      });
    }
    const developers = await Developer.find();
    return res.status(200).json({
      success: true,
      count: developers.length,
      developers: developers,
    });
  } catch (err) {
    return res.status(500).json({
      success: "false",
      error: "Server Error",
    });
  }
};

// @desc    Get developer
// @route   GET /api/developers/:id
// @access  Public
exports.getDeveloper = async (req, res, next) => {
  try {
    const developer = await Developer.findById(req.params.id); //req.params.id to get access to ":id"
    if (!developer) {
      return res.status(404).json({
        success: false,
        error: "No developer found",
      });
    }
    return res.status(200).json({
      success: true,
      developer: developer,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add developer
// @route   POST /api/developers
// @access  Public
exports.addDeveloper = async (req, res, next) => {
  try {
    const developer = await Developer.create(req.body);
    return res.status(201).json({
      success: true,
      developer: developer,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
        body: req.body,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Delete developer
// @route   DELETE /api/developers/:id
// @access  Public
exports.deleteDeveloper = async (req, res, next) => {
  try {
    const developer = await Developer.findById(req.params.id); //req.params.id to get access to ":id"
    if (!developer) {
      return res.status(404).json({
        success: false,
        error: "No developer found",
      });
    }
    await developer.remove();
    const developers = await Developer.find();
    return res.status(200).json({
      success: true,
      developers: developers,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
