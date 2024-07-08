const axios = require('axios');
const { DONATION_ALERTS_API_URL, API_KEY } = require ('./httpDonate');

class Donate {
    async buy(req, res) {
        console.log(req.body);
        try {
            const { user_id, price, subscribe_lvl } = req.body;

            if (!user_id) {
                return res.status(400).json({ error: 'userId не найден' });
            }
            if (!price || price !== 1) {
                return res.status(400).json({ error: 'SUBSCRIBE PAYMENT ERROR,PLEASE TRY AGAIN' });
            }

            const response = await axios.get(DONATION_ALERTS_API_URL, {
                params: {
                    user_id,
                    price,
                    subscribe_lvl
                },
                headers: {
                    Authorization: `Bearer ${API_KEY} `
                }
            });

            return res.json(response.data);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: e.message || 'Internal Server Error' });
        }
    }
}

module.exports = new Donate;