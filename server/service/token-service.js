const jwt = require('jsonwebtoken');
const tokenModel = require('../model/token-model.js');

class TokenService { 
    generationTokens(payload){ 
        const accessToken = jwt.sign(payload, process.env.ACCESSTOKEN, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.REFRESHTOKEN, {expiresIn: '30d'});
        return { 
            accessToken,
            refreshToken
        };
    };
    async saveToken(userId, refreshToken){ 
        const tokenData = await tokenModel.findOne({user:userId});
        if(tokenData){ 
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        };
        const token = await tokenModel.create({user:userId, refreshToken});
        return token;
    };
    validateAccessToken(token){ 
        try{ 
            const userData = jwt.verify(token, process.env.ACCESSTOKEN);
            return userData;
        }catch(e){
            console.log(`access token ${e}`)
            return null;
        }
    }
    validateResreshToken(token){
        try{
            const userData = jwt.verify(token, process.env.REFRESHTOKEN);
            return userData;
         }catch(e){
            console.log(e)
            return null;
         }
    }
    async removeToken(refreshToken){ 
        const tokenData = await tokenModel.deleteOne({refreshToken})
        return tokenData
    }

    async FindToken(refreshToken){ 
        const tokenData = await tokenModel.findOne({refreshToken})
        return tokenData
    }
    
};

module.exports = new TokenService()