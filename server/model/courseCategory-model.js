const {Schema, model} = require('mongoose'); 
const courseCategory = new Schema({ 
    name:{type:String},
    course_id:{type:Number},
    discription:{type:String}
})

module.exports = model("category_course",courseCategory,"category_course")