const { Schema,model } = require('mongoose');

const Stages = new Schema({ 
    name: { type: String,required: true },
    course_id: { type: Number,required: true }
})

module.exports = model('stages', Stages,'stages');