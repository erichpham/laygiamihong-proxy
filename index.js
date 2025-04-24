const express = require('express');
const axios = require('axios');
const https = require('https');  // Cần thêm thư viện https
const app = express();
const port = process.env.PORT || 3000;

// Cấu hình httpsAgent để bỏ qua kiểm tra chứng chỉ SSL
const agent = new https.Agent({  
  rejectUnauthorized: false  // Bỏ qua xác thực SSL
});

app.get('/mihong', async (req, res) => {
  try {
    const response = await axios.get('https://www.mihong.vn/api/v1/gold/prices/current', {
      httpsAgent: agent  // Gửi yêu cầu với agent không xác thực SSL
    });

    // Trả dữ liệu về cho client
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Mi Hong' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
