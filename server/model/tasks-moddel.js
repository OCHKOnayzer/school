const { Schema, model } = require('mongoose');

const Tasks = new Schema({
    quest_id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true }
});

module.exports = model('Tasks', Tasks, 'Tasks');
