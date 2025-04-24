const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

// Cho phép tất cả các miền
app.use(cors()); 

// Hoặc chỉ cho phép miền của bạn
// app.use(cors({ origin: 'https://your-domain.com' }));

app.get('/gold', async (req, res) => {
  try {
    const response = await fetch('https://www.mihong.vn/api/v1/gold/prices/current');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch gold price' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
