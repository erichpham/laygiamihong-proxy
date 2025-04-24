const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/gold', async (req, res) => {
  try {
    // Đảm bảo URL gọi Mi Hồng là chính xác
    const response = await fetch('https://www.mihong.vn/api/v1/gold/prices/current');
    if (!response.ok) {
      return res.status(500).json({ error: 'Failed to fetch gold price from Mi Hồng' });
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);  // Ghi lại lỗi chi tiết
    res.status(500).json({ error: 'Failed to fetch gold price' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
