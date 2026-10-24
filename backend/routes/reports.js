// Khodiyar Grocery API - Report routes
const express = require('express');
const Model = require('../models/reports');

const router = express.Router();

router.get('/', function (req, res) {
  res.json(Model.all());
});

router.get('/:id', function (req, res) {
  const item = Model.find(req.params.id);
  if (!item) return res.status(404).json({ error: 'Report not found' });
  res.json(item);
});

router.post('/', function (req, res) {
  const error = Model.validate(req.body || {});
  if (error) return res.status(400).json({ error: error });
  res.status(201).json(Model.create(req.body));
});

router.put('/:id', function (req, res) {
  const item = Model.update(req.params.id, req.body || {});
  if (!item) return res.status(404).json({ error: 'Report not found' });
  res.json(item);
});

router.delete('/:id', function (req, res) {
  if (!Model.remove(req.params.id)) return res.status(404).json({ error: 'Report not found' });
  res.status(204).end();
});

module.exports = router;
