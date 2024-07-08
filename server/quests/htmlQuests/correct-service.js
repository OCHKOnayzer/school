const { currResponse1,currResponse2,currResponse3 } = require('./corrects-Html.js');

class correctService{ 
    async questHtml1Serv(finali){ 
        try{ 
            const response = finali;
            if(response === currResponse1){ 
               return response
            }else{ 
                console.log('ya loh')
            }

        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async questHtml2Serv(finali){ 
        try{ 
            const response = finali; 
            if(response === currResponse2){ 
                return response
            }
        }catch(e){ 
            console.log(e);
            throw(e);
        }
    }
}
module.exports = new correctService