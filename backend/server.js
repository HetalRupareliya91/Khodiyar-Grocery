// Khodiyar Grocery - API server
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', function (req, res) {
  res.json({ status: 'ok', store: 'Khodiyar Grocery', time: new Date().toISOString() });
});

app.use('/api', require('./routes'));
app.use('/admin', express.static(path.join(__dirname, '..', 'admin')));
app.use('/', express.static(path.join(__dirname, '..', 'frontend')));

app.listen(PORT, function () {
  console.log('Khodiyar Grocery running on http://localhost:' + PORT);
  console.log('Admin panel on http://localhost:' + PORT + '/admin');
});
