const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

// Get all players
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new player
router.post("/", async (req, res) => {
  const player = new Player(req.body);
  try {
    const savedPlayer = await player.save();
    res.status(201).json(savedPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
