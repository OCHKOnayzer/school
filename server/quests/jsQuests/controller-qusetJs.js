

class quest{ 
    async questHtml1(req,res){ 
        try{ 
            const { finali } = req.body;
            if(!finali){ 
                return res.status(400).json({error:"FINALI INVALID"});
            }
            
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }   
}