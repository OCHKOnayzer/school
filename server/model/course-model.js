const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    name: { type: String,required: true },
    image: { type: String,required: true }
});

module.exports = model('Course', courseSchema, 'Course');