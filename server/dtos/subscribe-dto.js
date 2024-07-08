module.exports = class UserDto { 
    id;
    name; 
    price; 
    constructor(model){ 
        this.email = model.email;
        this.id = model._id;
        this.username = model.username;
    }
}