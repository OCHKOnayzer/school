import {apiSub} from '../http'

export default class SubscribeService{ 
    static async subscribe(name,price){ 
        return apiSub.get('/subscribe',{name,price})
    }
}