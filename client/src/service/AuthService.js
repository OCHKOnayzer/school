import {apiAuth} from "../http";

export default class AuthService {
    static async login(username,password){ 
        return apiAuth.post('/login',{username,password});
    };
    static async registration(username,email,password){ 
        return apiAuth.post('/registration',{username,email,password});
    };
    static async logout(){ 
        return apiAuth.post('/logout')
    }
    static async editUser(useriD,updateData){ 
        return apiAuth.post('/edit',{useriD,updateData});
    };
    static async UpdateImage(useriD,image){
        return apiAuth.post('/updateImage',{useriD,image});
    };
};