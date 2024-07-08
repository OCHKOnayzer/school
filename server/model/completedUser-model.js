const {Schema,model} = require('mongoose');

const CompletedUser = new Schema({
    userId:{type:Schema.Types.ObjectId},
    questId:{type:Schema.Types.ObjectId},
    StageId:{Type:Number}
})

module.exports = model('CompletedUserQuest',CompletedUser,'CompletedUserQuest')