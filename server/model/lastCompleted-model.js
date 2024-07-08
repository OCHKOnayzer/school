const {Schema,model} = require('mongoose');

const lastCompleted = new Schema({
    userId:{type:Schema.Types.ObjectId},
    questId:{type:Schema.Types.ObjectId},
    courseId:{type:Schema.Types.ObjectId},
    StageId:{Type:Number}
})

module.exports = model('lastCompleted',lastCompleted)