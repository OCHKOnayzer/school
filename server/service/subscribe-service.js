const Mongoose = require('mongoose');
const SubDto = require('../dtos/subscribe-dto.js');
Ы
const SubscribeModel = Mongoose.model('Subscribe', {
    
    name: String,
    price: String
});

class SubscribeService {
    async subscribe() {
        try {
            const allSubscriptions = await SubscribeModel.find();
            const subDto = allSubscriptions.map(sub => new SubDto(sub));

            return subDto;
        } catch (error) {
            console.error("Ошибка при получении подписок:", error);
            throw error;
        };
    };
};

module.exports = new SubscribeService()


