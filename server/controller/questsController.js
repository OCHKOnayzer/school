const mongoose = require('mongoose');
const courseSchema = require('../model/course-model.js');
const stagesModule = require('../model/stages-model.js');
const courseCategory = require('../model/courseCategory-model.js');
const questSchema = require('../model/quest-model.js');
const QuestService = require('../service/quest-service.js');

class questController{ 
    async quests(req,res){ 
        try{ 
         const items = await courseSchema.find()
         return res.json(items)
        }catch(e){ 
            console.log(e)
        }
    }
    async stages(req,res){ 
        console.log(req.body)
        try {
            const { course_id } = req.body;
    
            if (!course_id) {
                return res.status(400).json({ error: 'Missing course_id' });
            }
        
            // Используем метод find для поиска всех записей, соответствующих course_id
            const result = await stagesModule.find({course_id});
        
            if (!result || result.length === 0) {
                return res.status(404).json({ message: 'No stages found for the provided course_id' });
            }
        
            return res.json(result);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async courseCategory(req,res){ 
        try{

            const result = await courseCategory.find()

            if(!result || result.length === 0){ 
                return res.status(500).json({error:'Interval server error'})
            }

            return res.json(result)

        }catch(e){ 
            console.log(e)
            throw e
        }
    }
    async questByStage(req,res){ 
        try{ 
            const { course_id,stage_id } = req.body;

            if(!stage_id){ 
                return res.status(400).json({error:'Данная  стадия не найдена'})
            }
            const result = await questSchema.find({stage_id,course_id})

            if(!result || result.length === 0) { 
                return res.status(500).json({error:'Interval server error'})
            }
            return res.json(result)
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }
    async countUserComplted(req,res){ 
        try{ 
            const {userId} = req.body; 

            if(!userId){ 
                return res.status(400).json({error:'invalid userid'})
            };
            const result = await QuestService.countUserQuest(userId);
            return res.json(result);
        }catch(e){ 
            console.log(e);
            throw e;
        };
    };
    async countQuestCourse(req,res){ 
        try{ 
            const {course_id,stage_id} = req.body; 

            if(!course_id){ 
                return res.status(400).json({error:'invalid course_id'})
            };
            const result = await QuestService.countQuestCourse(course_id,stage_id);
            return res.json(result);
        }catch(e){ 
            console.log(e);
            throw e;
        };
    };
    async getQuestInfo(req,res){ 
        try{ 
            const {quest_id} = req.body;

            if(!quest_id){ 
                return res.status(400).json({error:"quest_id invalid"});
            };
            if (!mongoose.Types.ObjectId.isValid(quest_id)) { 
                return res.status(400).json({ error: "quest_id invalid" });
            }
            const result = await QuestService.getQuestInfo(quest_id)
            return res.json(result)
        }catch(e){ 
            console.log(e)
            throw e;
        }
    }
    async nextQuest(req,res){ 
        try { 
            const { quest_id, course_id } = req.body;
        
            if (!quest_id) { 
                return res.status(400).json({ error: "quest_id invalid" });
            }
        
            if (!mongoose.Types.ObjectId.isValid(quest_id)) { 
                return res.status(400).json({ error: "quest_id invalid" });
            }
            if (!course_id) {
                return res.status(400).json({ error: "course_id invalid" });
            }
            if (!mongoose.Types.ObjectId.isValid(course_id)) { 
                return res.status(400).json({ error: "course_id invalid" });
            }
            // Найти следующий документ после заданного quest_id
            const nextQuest = await questSchema.findOne({ _id: { $gt: quest_id }, course_id: course_id  }).sort({ _id: 1 }).exec();
        
            if (!nextQuest) {
                return res.status(404).json({ error: "No next quest found" });
            }
        
            return res.json(nextQuest);
        } catch (e) { 
            console.log(e);
            return res.status(500).json({ error: "An error occurred" });
        }
    }
    async prevQuest(req, res) { 
        try { 
            const { quest_id, course_id } = req.body;
    
            if (!quest_id) { 
                return res.status(400).json({ error: "quest_id invalid" });
            }
            if (!mongoose.Types.ObjectId.isValid(quest_id)) { 
                return res.status(400).json({ error: "quest_id invalid" });
            }
            if (!course_id) {
                return res.status(400).json({ error: "course_id invalid" });
            }
            if (!mongoose.Types.ObjectId.isValid(course_id)) { 
                return res.status(400).json({ error: "course_id invalid" });
            }
            const currentQuest = await questSchema.findOne({ _id: quest_id, course_id: course_id });
            if (!currentQuest) {
                return res.status(404).json({ error: "Quest not found" });
            }
            const prevQuest = await questSchema.findOne({ _id: { $lt: quest_id }, course_id: course_id }).sort({ _id: -1 });
    
           
            return res.status(200).json(prevQuest);
        } catch (e) { 
            console.log(e);
            return res.status(500).json({ error: "An error occurred" });
        }
    }
    async lastQuest(req, res) {
        try {
            const { course_id } = req.body;
            if (!course_id) {
                return res.status(400).json({ error: "course_id invalid" });
            }
            if (!mongoose.Types.ObjectId.isValid(course_id)) {
                return res.status(400).json({ error: "course_id invalid" });
            }
            const lastQuest = await questSchema.findOne({ course_id: course_id }).sort({ _id: -1 });
    
            if (!lastQuest) {
                return res.status(404).json({ error: "No quests found for this course" });
            }
            return res.status(200).json(lastQuest);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: "An error occurred" });
        }
    }
    async FirstQuest(req, res) {
        try {
            const { course_id } = req.body;
            if (!course_id) {
                return res.status(400).json({ error: "course_id invalid" });
            }
            if (!mongoose.Types.ObjectId.isValid(course_id)) {
                return res.status(400).json({ error: "course_id invalid" });
            }
            const lastQuest = await questSchema.findOne({ course_id: course_id }).sort({ _id: 1 });
    
            if (!lastQuest) {
                return res.status(404).json({ error: "No quests found for this course" });
            }
            return res.status(200).json(lastQuest);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: "An error occurred" });
        }
    }
    async getAllQuest(req,res){ 
        try{ 
            const result = await questSchema.countDocuments()
            if(!result){ 
                return res.status(400).json({error:"math count error"})
            }
            return res.json(result);
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }
    async checkCompleted(req,res){
        try{
            const {user_id,quest_id} = req.body;

            if(!user_id){ 
                return res.status(400).json({error:"user_id invalid"});
            };
            if(!quest_id){ 
                return res.status(400).json({error:"quest_id invalid"});
            };
            if(!mongoose.Types.ObjectId.isValid(user_id)){
                return res.status(400).json({ error: "user_id invalid" });
            }
            if(!mongoose.Types.ObjectId.isValid(quest_id)){
                return res.status(400).json({ error: "!quest_id objectId" });
            }
            const result = await QuestService.checkCompl(quest_id,user_id);

            return res.json(result);
        }catch(e){ 
            console.log(e)
            return res.status(500).json({error:"an error occurred"})
        }
    }
    async QuestCode(req,res){
        console.log(req.body)
        try{
            const { title,course_id } = req.body;

            if(!title){ 
                return res.status(404).json({error:"title invalid"});
            };

            if(!course_id){ 
                return res.status(404).json({error:"course_id invalid"});
            };

            const result = await QuestService.questCode(title,course_id);

            return res.json(result);

        }catch(e){ 
            console.log(e);
            return res.status(500).json({error:"server error"});
        }
    }
    async Completed(req,res){ 
        try{ 

            const {user_id,quest_id,course_id,stage_id} = req.body

            if(!user_id){ 
                return res.status(404).json({error:"user_id invalid"})
            }
            if(!quest_id){ 
                return res.status(400).json({error:"quest_id invalid"});
            };
            if(!course_id){ 
                return res.status(400).json({error:"course_id invalid"});
            };
            if(!stage_id){ 
                return res.status(400).json({error:"stage_id invalid"});
            };
            if(!mongoose.Types.ObjectId.isValid(user_id)){
                return res.status(400).json({ error: "!user_id objectId"});
            }
            if(!mongoose.Types.ObjectId.isValid(quest_id)){
                return res.status(400).json({ error: "!quest_id objectId"});
            }
            if(!mongoose.Types.ObjectId.isValid(course_id)){
                return res.status(400).json({ error: "!course_id objectId"});
            }
            if(!mongoose.Types.ObjectId.isValid(stage_id)){
                return res.status(400).json({ error: "!stage_id objectId"});
            }
            const result = await QuestService.Completed(user_id,quest_id,course_id,stage_id)
            
            return res.json(result);

        }catch(e){ 
            console.log(e);
            return res.status(500).json({error:"server error"});
        };
    };
    async userStage(req,res){ 
        try{ 
            const {user_id} = req.body;
            if(!user_id){ 
                return res.status(400).json({error:"user_id invalid"})
            }
            if(!mongoose.Types.ObjectId.isValid(user_id)){
                return res.status(400).json({ error: "!user_id objectId"});
            }
            const result = await QuestService.countUserStage(user_id)
            return res.json(result)
        }catch(e){ 
            console.log(e);
            return res.status(500).json({error:"server error"});
        }
    }
    async questTasks(req, res) { 
        console.log(req.body);
        try { 
            const { quest_id } = req.body;
            if (!quest_id) { 
                return res.status(400).json({ error: "quest_id invalid" });
            }
            if (!mongoose.Types.ObjectId.isValid(quest_id)) {
                return res.status(400).json({ error: "!quest_id objectId" });
            }
            const result = await QuestService.tasksQuests(quest_id);
            if (!result) {
                return res.status(404).json({ error: "No tasks found for given quest_id" });
            }
            return res.json(result);
        } catch (e) { 
            console.log(e);
            return res.status(500).json({ error: "server error" });
        }
    }
   
};
module.exports = new questController;