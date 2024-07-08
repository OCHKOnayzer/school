const fs = require('fs/promises');
const ApiError  = require('../exceptions/api-error.js');
const path = require('path');
const CompletedUserModel = require('../model/completedUser-model.js');
const questModel = require('../model/quest-model.js');
const lastCompletedModel = require('../model/lastCompleted-model.js');
const completedStageModel = require('../model/completedStage-model.js');
const tasksModdel = require('../model/tasks-moddel.js');

class QuestService{ 
    async countUserQuest(userId){ 
        try{
            const search = CompletedUserModel.countDocuments({userId});
            return search;
        }catch(e){ 
            console.log(e);
            throw e;
        }
    };
    async countQuestCourse(course_id,stage_id){ 
        try{
            const search = questModel.countDocuments({course_id,stage_id});
            return search;
        }catch(e){ 
            console.log(e);
            throw e;
        }
    };
    async getQuestInfo(_id){ 
        try { 
            const search = await questModel.findById(_id);
            if (!search) {
                console.log("Quest not found");
                return null;
            }
            const name = search.name;
            const title = search.title;
            const task = search.tasks;
            return {name,title,task};
        } catch (e) { 
            console.log(e); 
            return null; 
        }
    }
    async checkCompl(quest_id,user_id){ 
        try {
            const findCompl = await CompletedUserModel.findOne({ questId: quest_id, userId: user_id });
            if (findCompl) {
                const result = true
                return result
            } else {
                const result = false
                return result
            }
        } catch (e) {
            console.error('Error occurred:', e);
        }
    }
    async questCode(title,course_id){
        try{ 
            
            const questTitle = title;

            const courseId = course_id

            const code = {};

            const htmlPath  = path.join(__dirname, `../quests/other/QuestCode/course${courseId}/html/${questTitle}.txt`);
            const cssPath = path.join(__dirname, `../quests/other/QuestCode/course${courseId}/css/${questTitle}.txt`);             
            const jsPath = path.join(__dirname, `../quests/other/QuestCode/course${courseId}/js/${questTitle}.txt`);

            try {
                code.html = await fs.readFile(htmlPath, 'utf8');
            } catch (err) {
                console.log(`HTML file not found: ${htmlPath}`);
            }

            try {
                code.css = await fs.readFile(cssPath, 'utf8');
            } catch (err) {
                console.log(`CSS file not found: ${cssPath}`);
            }

            try {
                code.js = await fs.readFile(jsPath, 'utf8');
            } catch (err) {
                console.log(`JS file not found: ${jsPath}`);
            }

            return code;
        }catch(e){ 
            console.log('Error occurred:', e)
        }
    }
    async Completed(user_id,quest_id,course_id,stage_id){ 
        try{ 

            const userId = user_id; 
            const questId = quest_id;
            const courseId = course_id;
            const stageId = stage_id;
            const searchCompleted = await CompletedUserModel.findOne({userId:userId,questId:questId});
            if(searchCompleted){ 
                throw ApiError.BadRequest(`Пользователь ${userId} уже существует`);
            }
            const toDB = new CompletedUserModel({ userId: userId, questId: questId, stageId: stageId });
            
           return(
            await toDB.save()
           ) 

        }catch(e){ 
            console.log(e)
        }
    }
    async countUserStage(user_id){ 
        try{ 
            const userId = user_id;
            const find = await completedStageModel.countDocuments({user_id:userId})
            return find 
        }catch(e){ 
            console.log(e);
        }
    }
    async tasksQuests(quest_id) { 
        try { 
            console.log('quest_id:', quest_id);
            const find = await tasksModdel.findOne({ quest_id:quest_id });
            console.log('find:', find);
            return find;
        } catch (e) {
            console.log(e);
        }
    }
    
};
module.exports = new QuestService();