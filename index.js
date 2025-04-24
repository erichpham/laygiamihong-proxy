const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

// Route để lấy giá vàng từ Mihong
app.get('/gold', async (req, res) => {
  try {
    const response = await fetch('https://www.mihong.vn/api/v1/gold/prices/current');
    const data = await response.json();
    
    // Kiểm tra phản hồi và gửi lại dữ liệu
    if (data.status === 1) {
      res.json(data);
    } else {
      res.status(500).json({ error: 'Không lấy được dữ liệu giá vàng' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Lỗi khi truy vấn API Mihong' });
  }
});

// Cấu hình port (có thể chạy trên port 3000 hoặc tự động trên môi trường deploy)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server chạy trên port ${port}`);
});
