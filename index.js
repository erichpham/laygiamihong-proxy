const express = require('express');
const axios = require('axios');
const https = require('https');
const app = express();
const port = process.env.PORT || 3000;

// Cấu hình httpsAgent để bỏ qua kiểm tra chứng chỉ SSL
const agent = new https.Agent({
  rejectUnauthorized: false  // Bỏ qua kiểm tra SSL
});

app.get('/mihong', async (req, res) => {
  try {
    console.log('Fetching data from Mi Hồng...');
    
    // Thực hiện yêu cầu đến Mi Hồng
    const response = await axios.get('https://www.mihong.vn/api/v1/gold/prices/current', {
      httpsAgent: agent  // Sử dụng agent không xác thực SSL
    });

    console.log('Data fetched successfully.');
    res.json(response.data);
  } catch (error) {
    console.error('Error occurred while fetching data from Mi Hồng:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from Mi Hồng', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
