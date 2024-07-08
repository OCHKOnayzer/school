import React from 'react'
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';
const TAGATTRIBUTE = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
       <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    В далёком волшебном королевстве HTML, помимо удивительных существ, известных как теги, существовали таинственные магические амулеты, которые назывались атрибутами. Эти амулеты придавали тегам особые силы и способности, делая их ещё более могущественными и полезными.
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    В королевстве жил добрый мастер <code className={classes.codeConteiner}>&lt;a&gt;</code>, который создавал волшебные порталы, позволяющие путешествовать по всему Интернету.
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Но чтобы активировать эти порталы, ему нужен был амулет href. Этот амулет содержал магическую ссылку на другое место, и стоило только вписать его значение, портал начинал светиться и переносить путников в далекие земли.
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                        Вообщем кто еще не понял сегодня мы поговорим о такой вещи как атрибут
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Как мы уже знаем, существуют не только парные, но и одиночные теги. Им не нужна вторая половинка, они прекрасно себя чувствуют единолично. Например тег <code className={classes.codeConteiner}>&lt;img&gt;</code>позволяет добавить картинку в разметку. Его мы и используем.
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Сам по себе <code>&lt;img&gt;</code> не имеет смысла. Чтобы этот тег был действительно нам полезен, необходимо написать внутри него адрес, ведущий к картинке. Делается это с помощью атрибута src:
                    </span>
                </div>
            </div>
            <div className={classes.teory_demo}>
               <span>
                    <code>&lt;img src="image.jpg"&gt;</code>
               </span>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Значение атрибута указывается с помощью знака равно и заключается в кавычки. У тега может быть несколько атрибутов. В этом случае они пишутся через пробел:
                    </span>
                </div>
            </div>
            <div className={classes.teory_demo}>
                <span>
                    &lt;тег атрибут1="значение1" атрибут2="значение2"&gt;
                </span>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Например, картинке при желании можно задать размеры:
                    </span>
                </div>
            </div>
            <div className={classes.teory_demo}>
                <span>
                    <code>&lt;img src="image.png" width="200" height="100"&gt;</code>
                </span>
            </div>
        </div>
    </div>
  )
}

export default TAGATTRIBUTE