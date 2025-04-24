const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/gold', async (req, res) => {
  try {
    const response = await fetch('https://www.mihong.vn/api/v1/gold/prices/current');
    const data = await response.json();
    res.json(data);  // Đảm bảo trả về dữ liệu JSON
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch gold price' });
  }
});

// Chạy trên port 3000 hoặc sử dụng port từ môi trường
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
