const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/mihong', async (req, res) => {
  try {
    const response = await axios.get('https://www.mihong.vn/api/v1/gold/prices/current', {
      httpsAgent: new (require('https')).Agent({
        rejectUnauthorized: false // Bỏ qua kiểm tra chứng chỉ SSL
      })
    });

    // Trả về dữ liệu JSON từ Mi Hồng
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Proxy is running on port ${port}`);
});
