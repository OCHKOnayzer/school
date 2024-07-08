const {Schema, model} =require('mongoose');

const Role = new Schema ({ 
    value:{type:String, unique:true, default:"USER"}
});

module.exports = model('role', Role);