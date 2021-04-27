const express = require('express');
const router = express.Router();
const Order = require('../models/order');

const getOrder = async (req, res, next) => {
  let order;
  try {
    order = await Order.findById(req.params.id);
    if (order == null) {
      return res.status(400).json({ message: 'Cannot find order' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.order = order;
  next();
};

// GET
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getOrder, (req, res) => {
  res.json(res.order);
});

// POST
router.post('/', async (req, res) => {
  const order = new Order({
    user: req.body.user,
    orderedItems: req.body.orderedItems,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// // PATCH
// router.patch('/:id', getOrder, (req, res) => {});

// DELETE
router.delete('/:id', getOrder, async (req, res) => {
  try {
    await res.order.remove();
    res.json({ message: 'Deleted order' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
