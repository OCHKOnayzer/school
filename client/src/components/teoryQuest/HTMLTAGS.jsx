import React from 'react'
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';
const HTMLTAGS = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
            <span>
            Язык HTML отвечает за структуру и содержание страницы. Он состоит из тегов, а тег состоит из имени, заключённого между знаками «меньше» и «больше».Пример тегов:
            <span style={{display:"flex"}}><code className={classes.codeConteiner}>&lt;h1&gt;</code>,<code className={classes.codeConteiner}>&lt;p&gt;</code>,<code className={classes.codeConteiner}>&lt;a&gt;</code></span>
            </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Теги бывают парными и одиночными. Например, тег &lt;link&gt; — одиночный:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>&lt;<code className={classes.code_demo}><span>link</span></code> rel="stylesheet" href="style.css"&gt;</span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Парные теги могут содержать текст и другие теги. У парных тегов, в отличие от одиночных, есть вторая половинка — закрывающий тег. В закрывающих тегах перед именем ставится символ <code className={classes.codeConteiner}>/</code>(«слэш»):
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>&lt;h1&gt;Текст заголовка<code className={classes.code_demo}><span>&lt;/h1&gt;</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Ещё одна полезная вещь — это комментарии. Код, заключённый между символами &lt;!-- и --&gt;, работать не будет. Если эти символы удалить, то код заработает, это называется «раскомментировать». С помощью комментариев обычно временно отключают какой-то код или оставляют подсказки и разъяснения.
                </span>
            </div>
        </div>
            <div className={classes.teory_demo}>
                <span>&lt;!-- &lt;p&gt; Текст &lt;/p&gt; --&gt;</span>
            </div>
        </div>
    </div>
   
  )
}

export default HTMLTAGS