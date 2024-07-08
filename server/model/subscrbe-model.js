const { Schema, model } = require('mongoose');

const subscribeSchema = new Schema({
    name: { type: String,required: true },
    price: { type: String,required: true }
});

module.exports = model('SUBSCRIBE', subscribeSchema, 'SUBSCRIBE');