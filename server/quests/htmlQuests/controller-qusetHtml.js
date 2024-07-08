const correctService = require('./correct-service')

class questHtml{ 
    async questHtml1(req,res){
        console.log(req.body) 
        try{ 
            const { finali } = req.body;
            if(!finali){ 
                return res.status(400).json({error:"FINALI INVALID"});
            };
            const result = await correctService.questHtml1Serv(finali);
            return res.json(result);
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }   
}

module.exports = new questHtml