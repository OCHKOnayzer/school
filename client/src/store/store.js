import { makeAutoObservable } from "mobx";
import AuthService from "../service/AuthService";
import SubscribesService from '../service/SubscribeService.js';
import { QuestService } from '../service/questsService.js';
import axios from "axios";
import { AUTH_API_URL } from "../http";

export default class Store { 
    user = {};
    isAuth = false

    constructor() { 
        makeAutoObservable(this);
        this.checkAuth(); 
    };

    setAuth(bool){ 
        this.isAuth = bool
    }

    setUser(user){ 
        this.user = user;
    };

    async login(username, password, handleError){
        try{ 
            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setUser(response.data.user);
            this.setAuth(true)
            console.log(response)
        } catch(e){
            console.log(e);
            handleError(e)
        }
    };

    async registration(username, email, password ,handleError){
        try{ 
            const response = await AuthService.registration(username, email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setUser(response.data.user);
            console.log(response)
        } catch(e){
            console.log(e)
            handleError(e)
        }
    };

    async logout(){ 
        try{ 
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({})
            
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }

    async checkAuth() {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await axios.get(`${AUTH_API_URL}/refresh`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true
                });
                localStorage.setItem('token', response.data.accessToken);
                this.setAuth(true);
                this.setUser(response.data.User);

            }
        } catch (e) {
            console.log(e);
        }
    }
    async editUser(useriD,username,password,email,handleError){ 
        const _id = useriD
        try {
            const updateData = {}
            if(username||password||email){ 
                if (typeof useriD === undefined||!useriD) {
                    handleError('Не передан идентификатор пользователя');
                }
                if (typeof username !== 'undefined'&&username.length>1) {
                    console.log(username);
                    updateData.username = username
                }
                if (typeof password !== 'undefined'&&password.length>1) {
                    console.log(password);
                    updateData.password = password
                }
                if (typeof email !== 'undefined'&&email.length>1) {
                    console.log(email);
                    updateData.email = email
                }
                await AuthService.editUser(_id,updateData)
            }
            
        } catch (error) {
            console.log(error);
            handleError(error);
        }
       
    }
    async updateImage (useriD,image,handleError){ 
        const _id = useriD;
        try{ 
            const imageData = {};
            if(!_id||typeof _id === undefined){ 
                handleError('Произошла ошибка при обработке пользователя')
            }
            if(image){ 
                imageData.image = image
            }else{
                handleError('Ошибка загрузки изображения')
            }
            await AuthService.UpdateImage(_id,imageData)
        }catch(e){ 
            console.log(e);
            handleError(e);
        }
    }


    // Subscribes
    getAllSubscribs = async(name, prcie)=>{ 
        try{ 
            const response = await SubscribesService.subscribe(name, prcie)
            console.log(response);
            if(Array.isArray(response)){ 
                return response;
            }else{ 
                return [response];
            }
        }catch(e){ 
            console.log(`error get quests ${e}`);
        };
    };


    // Quests
    getQuests = async () => {
        try{
           const response = await QuestService.quest();
           if(Array.isArray(response)){ 
            return response;
        }else{ 
            return [response];
        }
        }catch(e){
            console.log(e)
        }
    };
    async getStages(course_id) {
        try {
            const response = await QuestService.stages(course_id);
            if (Array.isArray(response)) {
                return response;
            } else { 
                return [response];
            }
        } catch (e) { 
            console.error(e);
            throw e;
        }
    }
    async getCourseCategory(){ 
        try{ 
            const response = await QuestService.courseCategory();
            if(Array.isArray(response)){ 
                return response
            }else{ 
                return [response]
            }
        }catch(e){ 
            console.log(e)
            throw e
        }
    }
    async getQuetsByStageId(stage_id,course_id){ 
        console.log(stage_id)
        try{ 
            const result = await QuestService.getQuestByStageId(stage_id,course_id);
            if(Array.isArray(result)){ 
                return result
            }else{ 
                return [result]
            }
        }catch(e){ 
            console.log(e)
        }   
    }
    async countCompleted(userId){ 
        try{ 
            const result = await QuestService.countCompletedUser(userId);
            if(Array.isArray(result)){ 
                return result
            }else{ 
                return [result]
            }
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }
    async countQuestForCourse(course_id,stage_id){ 
        try{ 
            const result = await QuestService.countQuestCourse(course_id,stage_id);
            if(Array.isArray(result)){ 
                return result;
            }else{ 
                return [result];
            };
        }catch(e){ 
            console.log(e);
            throw e;
        };
    };
    async getQuestInfo(quest_id){ 
        try{ 
            if(quest_id){ 
                const response = await QuestService.PostQuestInfo(quest_id);
                if(Array.isArray(response)){ 
                    return response;
                }else{ 
                    return [response];
                };
            };
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }
    async getAll(){ 
        try{ 
            const response = await QuestService.getAll()
            if(Array.isArray(response)){
                return response;
            }else{ 
                return [response];
            };
        }catch(e){ 
            console.log(e);
            throw e;
        }
    }
    async nextQuest(quest_id,course_id){ 
        try{ 
            const response = await QuestService.next(quest_id,course_id);
            if(Array.isArray(response)){ 
                return [response];
            }else{ 
                return response;
            };
        }catch(e){ 
            console.log(e);
        };
    };
    async prevQuest(quest_id,course_id){ 
        try{ 
            const response = await QuestService.prev(quest_id,course_id);
            if(Array.isArray(response)){ 
                return response;
            }else{ 
                return [response]
            }
        }catch(e){ 
            console.log(e);
        }
    }
    async lastQuest(course_id){ 
        try{ 
            const response = await QuestService.last(course_id);
            if(Array.isArray(response)){ 
                return response;
            }else{ 
                return [response];
            }
        }catch(e){ 
            console.log(e);
        }
    }
    async firstQuest(course_id){ 
        try{ 
            const response = await QuestService.first(course_id);
            if(Array.isArray(response)){ 
                return response;
            }else{ 
                return [response];
            }
        }catch(e){ 
            console.log(e);
        }
    }
    async findCompleted(quest_id,user_id){ 
        try{ 
            const response = await QuestService.findComplete(quest_id,user_id);
            if(Array.isArray(response)){ 
                return response;
            }else{ 
                return [response];
            }
        }catch(e){ 
            console.log(e)
        }
    }
    async questCode(title,course_id){ 
        console.log(title)
        try{ 
            const QuestTitle = title;
            const courseId = course_id;
            if(!QuestTitle){ 
                console.log('questTitle invalid');
            };
            if(!courseId){ 
                console.log('courseId invalid');
            };
            const result = await QuestService.questCode(QuestTitle,courseId);
            console.log(result)

            if(Array.isArray(result)){ 
                return result;
            }else{ 
                return [result];
            };
        }catch(e){ 
            console.log(e)
        }
    }
    async Completed(user_id,quest_id,stage_id,course_id){ 
        try{ 
            await QuestService.completed(user_id,quest_id,stage_id,course_id)
        }catch(e){ 
            console.log(e)
        }
    }
    async userStage(user_id){ 
        try{ 
            const result = await QuestService.userStage(user_id)
            if(Array.isArray(result)){ 
                return result
            }else{ 
                return [result]
            }
        }catch(e){ 
            console.log(e);
        }
    }
};