import React from 'react';
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const PARAGRAPH = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
       <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Основную структуру текста создают с помощью заголовков, а более мелкую выстраивают с помощью параграфов (или абзацев). Для разметки параграфов предназначен тег <code className={classes.codeConteiner}>&lt;p&gt;</code> (от английского «paragraph»).
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    По умолчанию абзацы начинаются с новой строки и отделяются от остального контента отступами сверху и снизу. Так что, если нужно отделить один блок текста от другого, верным решением будет заключить их в теги <code className={classes.codeConteiner}>&lt;p&gt;</code>
                    </span>
                </div>
            </div>
            <div className={classes.teory_demo}>
                <span>
                    <span style={{display:"block"}}><code>&lt;p&gt;</code>Абзац про то, как я решил стать верстальщиком<code>&lt;/p&gt;</code></span>
                    <span style={{display:"block"}}><code>&lt;p&gt;</code>Абзац про моего инструктора<code>&lt;/p&gt;</code></span>
                    <span style={{display:"block"}}><code>&lt;p&gt;</code>Абзац про мой дневничок<code>&lt;/p&gt;</code></span>
                </span>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Параграфы в HTML — это всего лишь неразрывная последовательность фразовых элементов, то есть чисто структурная, а не смысловая сущность. Параграфы существуют даже без тега <code className={classes.codeConteiner}>&lt;p&gt;</code>
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    А тег <code className={classes.codeConteiner}>&lt;p&gt;</code> позволяет лишь явно выделять параграфы, группируя элементы с фразовым типом содержимого. И это могут быть не только блоки текста, а, например, изображения, ссылки или поля ввода.
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Не все теги могут быть включены в <code className={classes.codeConteiner}>&lt;p&gt;</code>. Например, внутри абзаца не могут располагаться крупные структурные теги, заголовки, формы, списки, таблицы. Когда браузер встречает неподходящий тег внутри <code className={classes.codeConteiner}>&lt;p&gt;</code>, он «выбрасывает» этот тег из <code className={classes.codeConteiner}>&lt;p&gt;</code>.
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PARAGRAPH