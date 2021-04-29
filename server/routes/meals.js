const express = require('express');
const router = express.Router();
const Meal = require('../models/meal');

const getMeal = async (req, res, next) => {
  let meal;
  try {
    meal = await Meal.findById(req.params.id);
    if (meal == null) {
      return res.status(400).json({ message: 'Cannot find meal' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.meal = meal;
  next();
};

// GET
router.get('/', async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getMeal, (req, res) => {
  res.json(res.meal);
});

// POST
router.post('/', async (req, res) => {
  const meal = new Meal({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    const newMeal = await meal.save();
    res.status(201).json(newMeal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
