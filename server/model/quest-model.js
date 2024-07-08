const { Schema, model } = require('mongoose');

const questSchema = new Schema({
    name: { type: String},
    stage_id: { type: Number},
    course_id:{type: Number},
    title:{type:String},
    tasks:{type:String}
});

module.exports = model('Quests', questSchema, 'Quests');