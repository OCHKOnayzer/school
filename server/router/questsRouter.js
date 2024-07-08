const Router = require('express');
const router = new Router();
const controller = require('../controller/questsController.js');

router.get('/getQuests',controller.quests);
router.post('/getStages',controller.stages);
router.get('/getCourseCategory',controller.courseCategory);
router.post('/getQuestByStage',controller.questByStage);
router.post('/countCompletedQuest',controller.countUserComplted);
router.post('/countQuest',controller.countQuestCourse);
router.post('/getQuestInfo',controller.getQuestInfo);
router.get('/getAllQuest',controller.getAllQuest);
router.post('/next',controller.nextQuest);
router.post('/prev',controller.prevQuest);
router.post('/lastQuest',controller.lastQuest);
router.post('/FirstQuest',controller.FirstQuest);
router.post('/findComplete',controller.checkCompleted);
router.post('/codeQuest',controller.QuestCode);
router.post('/Completed',controller.Completed);
router.post('/userStage',controller.userStage);
router.post('/Tasks',controller.questTasks)
module.exports = router;