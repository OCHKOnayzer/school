const axios = require('axios');
const DONATION_ALERTS_API_URL = 'https://www.donationalerts.com/api/v1/alerts/donations';
const API_KEY = '7uZAPAZRi8YZRlXbRZ1lof52UJZmUumbJJdEuQjB';

const apiDonation = axios.create({ 
    baseURL: DONATION_ALERTS_API_URL
});

module.exports = {
    DONATION_ALERTS_API_URL,
    API_KEY,
    apiDonation
};