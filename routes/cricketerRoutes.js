import express from 'express';
import Cricketer from '../models/cricketerModel.js';

const router = express.Router();

// @route POST /api/cricketers
// @desc Create a new cricketer
// @access Public
router.post('/', async (req, res) => {
  const { name, country, matches, runs, wickets } = req.body;

  try {
    const cricketer = await Cricketer.create({ name, country, matches, runs, wickets });
    res.status(201).json(cricketer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
