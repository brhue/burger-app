const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', async (req, res) => {
  const burgers = await burger.viewBurgers();
  res.render('index', { burgers });
});

router.post('/api/burgers', async (req, res) => {
  const { burgerName } = req.body;
  const result = await burger.createBurger(burgerName);
  res.json({ status: 'ok' });
});

router.put('/api/burgers/:id', async (req, res) => {
  const { id } = req.params;
  const result = await burger.updateBurger(parseInt(id, 10));
  res.json({ status: 'ok' });
});

module.exports = router;
