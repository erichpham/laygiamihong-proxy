const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS (Cross-Origin Resource Sharing) if you are using this API in a browser
app.use(cors());

// Route to fetch gold price data from Mihong API
app.get('/gold-prices', async (req, res) => {
    try {
        const response = await axios.get('https://www.mihong.vn/api/v1/gold/prices/current', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data); // Return the data as JSON
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data from Mihong API' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
