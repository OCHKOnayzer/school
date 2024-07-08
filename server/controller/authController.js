const User = require('../model/User.js');
const userService = require('../service/user-service.js');
const UserServie = require('../service/user-service.js')

class authController{ 
    async registeration(req,res,next){ 
        try{ 
            const {username, password, email} = req.body;
            const userData = await UserServie.registartion(username,email,password);
            res.cookie('refreshToken', (await userData).refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true});
            return res.json(userData);
        }catch(e){ 
            console.log(e)
            next(e)
        }
    }
    async loginUser(req, res, next) {
        try{ 
            const {username, password} = req.body 
            const userData = await UserServie.login(username,password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true})
            return res.json(userData)
        }catch(e){ 
            next(e)
            console.log(e)
        }
    }
    async logout(req,res,next) {
        try{ 
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken')
            return res.json(token)
        }catch(e) {
            next(e)
        }
    }
    async refresh(req, res, next) {
        try{ 
            const {refreshToken} = req.cookies;
            const userData = await UserServie.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true})
            return res.json(userData)
        }catch(e){ 
            next(e)
        }
    }
    async edit(req,res,next){ 
        console.log(req.body)
        try{ 
            const {useriD,updateData}  = req.body;
            if(!useriD){ 
                return res.status(400).json({error:'Пользователь не найден'})
            }
            const result = await UserServie.update(useriD,updateData);
            return res.json(result);
        }catch(error){ 
            console.error(`Ошибка в контроллере complete: ${error}`);
            console.log(req.body)
            return res.status(500).json({ error: 'Произошла ошибка на сервере' });
            
        };
    };
    async updateImage(req,res){ 
        console.log(req.body);
        try{
            const {useriD,image} = req.body;
            if(!useriD){ 
                return res.status(400).json({error:'Пользователь не найден'});
            }
            const result = await UserServie.imageUpdate(useriD,image);
            return res.json(result);
        }catch(e){ 
            console.error(e);
            return res.status(500).json({error:'Произошла ошибка на сервере'})
        }
    }
};

module.exports = new authController