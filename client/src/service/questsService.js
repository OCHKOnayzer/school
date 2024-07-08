import { apiQuest } from '../http/index.js';

export class QuestService{ 

    static async quest(name,image){ 
        return apiQuest.get('/getQuests',{name,image});
    };
    static async stages(course_id) {
        return apiQuest.post('/getStages', { course_id });
    };
    static async courseCategory(){ 
        return apiQuest.get('/getCourseCategory');
    };
    static async getQuestByStageId(stage_id,course_id){ 
        return apiQuest.post('/getQuestByStage',{ stage_id,course_id });
    };
    static async countCompletedUser(userId){
        return apiQuest.post('/countCompletedQuest',{userId});
    };
    static async countQuestCourse(course_id,stage_id){ 
        return apiQuest.post('/countQuest',{course_id,stage_id});
    };
    static async PostQuestInfo(quest_id){ 
        return apiQuest.post('/getQuestInfo',{quest_id});
    };
    static async getAll(){ 
        return apiQuest.get('/getAllQuest');
    };
    static async next(quest_id,course_id){ 
        return apiQuest.post('/next',{quest_id,course_id});
    };
    static async prev(quest_id,course_id){ 
        return apiQuest.post('/prev',{quest_id,course_id});
    };
    static async first(course_id){ 
        return apiQuest.post('/FirstQuest',{course_id});
    };
    static async last(course_id){ 
        return apiQuest.post('/lastQuest',{course_id});
    };
    static async findComplete(quest_id,user_id){ 
        return apiQuest.post('/findComplete',{quest_id,user_id});
    };
    static async questCode(title,course_id){ 
        return apiQuest.post('/codeQuest',{title,course_id});
    };
    static async completed(user_id,quest_id,stage_id,course_id){ 
        return apiQuest.post('/Completed',{user_id,quest_id,stage_id,course_id})
    }
    static async userStage(user_id){ 
        return apiQuest.post('/userStage',{user_id});
    };
};