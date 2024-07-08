const {Schema,model} = require('mongoose')
const User = new Schema({
    username:{type:String,required:true, unique:true},
    password:{type:String, required:true},
    email:{type:String, required:true},
    image:{type:String, default:'http://localhost:8080/image/h4/maskot.PNG'},
    role:{type:String, ref:'role'}
})
module.exports = model('User', User)