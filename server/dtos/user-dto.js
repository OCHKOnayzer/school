module.exports = class UserDto { 
    id;
    email; 
    username; 
    role;
    image;
    constructor(model){ 
        this.email = model.email;
        this.id = model._id;
        this.username = model.username;
        this.role = model.role;
        this.image = model.image;
    }
}