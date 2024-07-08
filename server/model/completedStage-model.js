const {Schema,model} = require('mongoose');

const CompletedUserStages = new Schema({
    userId:{type:Schema.Types.ObjectId},
    StageId:{Type:Number}
})

module.exports = model('CompletedUserStages',CompletedUserStages,'CompletedUserStages')