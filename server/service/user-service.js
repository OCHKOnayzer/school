const bcrypt = require('bcrypt');
const User = require('../model/User.js');
const tokenService = require('./token-service.js');
const Role = require('../model/role-model.js');
const UserDto = require('../dtos/user-dto.js');
const ApiError  = require('../exceptions/api-error.js');
const randomstring = require("randomstring");
const webp = require('webp-converter');
const fs = require('fs')

class UserServie{ 
    async registartion(username, email, password){
        const candidate = await User.findOne({username});
        if(candidate){ 
            throw ApiError.BadRequest(`Пользователь ${username} уже существует`);
        }
        const emailCandidate = await User.findOne({email})
        if(emailCandidate){
            throw ApiError.BadRequest("Пользователь с такой почтой уже зарегистрирован");
        } 
        const hashPassword = bcrypt.hashSync(password, 7);
        // const userRole = await Role.findOne({value: "USER"})
        const user = await User({username, email, password:hashPassword})
        user.save()

        const userDto = new UserDto(user)
        const tokens = tokenService.generationTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return{ 
            ...tokens,
            User:userDto
        }
    }
    async login(username, password){ 
        const user = await User.findOne({username})
        if(!user) {
            throw ApiError.BadRequest (`Пользователь ${username} не найден`);
        }
        const validPass = await bcrypt.compare(password, user.password);
        if(!validPass){ 
            throw ApiError.BadRequest("Введен неверный пароль")
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generationTokens({...userDto});
        
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return{ 
            ...tokens,
            User:userDto
        }
    }
    async logout(refreshToken){ 
        const token = await tokenService.removeToken(refreshToken)
        return token
    }
    async refresh(refreshToken){ 
        if(!refreshToken){
            console.log('error')
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateResreshToken(refreshToken)
        const tokenFromDB = await tokenService.FindToken(refreshToken)
        if(!userData || !tokenFromDB){ 
            throw ApiError.UnauthorizedError()
        }
        const user = await User.findById(userData.id)
        const userDto = new UserDto(user);
        const tokens = tokenService.generationTokens({...userDto});
        
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return{ 
            ...tokens,
            User:userDto
        }
    }
    async update(useriD,updateData){ 
        try {
            const client = await User.findById(useriD);
            if (!client) {
                throw new Error('Пользователь не найден');
            }
            if (updateData.username) {
                client.username = updateData.username;
            }
            if (updateData.password) {
                const dataPassword = updateData.password
                const hashPassword = bcrypt.hashSync(dataPassword, 7);
                client.password = hashPassword;
            }
            if (updateData.email) {
                client.email = updateData.email;
            }
            await client.save();
            return client;
        } catch (e) {
            console.log(e);
            throw e;
        }
    } 
    async imageUpdate(useriD,image){ 
        try {
            const client = await User.findById(useriD);
            if (!client) {
                throw new Error('Пользователь не найден');
            }
            const StringBase64 = image.image;
            const imageBase64 = StringBase64.split(',')[1];
            const imageData = Buffer.from(imageBase64, 'base64');
            const randomStr = randomstring.generate(7);
            const imageName = `${useriD}_${randomStr}.jpg`;
            const imagePath = `./images/h4/${imageName.toLowerCase()}`;
    
            fs.writeFileSync(imagePath, imageData);
            client.image = `http://localhost:8080/image/h4/${imageName.toLowerCase()}`;
    
            await client.save();
        } catch (error) {
            throw error;
        }
    };
};
module.exports = new UserServie();