const Subscribe = require('../model/subscrbe-model.js')

class SubscribeController{ 
    async subscribe(req,res){ 
        try{ 
         const items = await Subscribe.find()
         return res.json(items)
        }catch(e){ 
            console.log(e)
        }
    }

}
module.exports = new SubscribeController