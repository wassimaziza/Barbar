const axios = require('axios');

const initiatePayment = async (req, res) => {
  try {
    const appToken = '64e357bc34079ab47a52af3b';
    const appSecret = '64e357bc34079ab47a52af38:XNxmYUqyE7Q7ANsq616c0vV24Rk1';

    const response = await axios.post(
      'https://api.konnect.network/api/v2/payments/init-payment',
      {
        app_token: appToken,
        app_secret: appSecret,
        amount: req.body.amount,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ result: response.data.result });
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

module.exports = {
  initiatePayment,
};
