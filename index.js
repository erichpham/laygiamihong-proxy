const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/gold', async (req, res) => {
  try {
    const response = await fetch('https://www.mihong.vn/api/v1/gold/prices/current', {
      headers: {
        'Origin': 'https://laygiamihong-proxy.onrender.com', // Thêm header Origin nếu cần
        'Referer': 'https://laygiamihong-proxy.onrender.com', // Thêm Referer nếu cần
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch gold prices');
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err); // Ghi lại lỗi chi tiết
    res.status(500).json({ error: 'Failed to fetch gold price' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
