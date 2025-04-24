const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Định nghĩa endpoint '/gold-prices'
app.get('/gold-prices', async (req, res) => {
  try {
    const response = await axios.get('https://www.mihong.vn/api/v1/gold/prices/current');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
