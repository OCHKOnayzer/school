import React from 'react'
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';
const CSSTHIS = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
            <span>
            CSS (Cascading Style Sheets) — это язык, используемый для описания внешнего вида документа, написанного на языке разметки, таком как HTML. CSS позволяет разделить структуру и стиль, делая код более чистым и управляемым. Пример CSS правил:
            <span style={{display:"flex"}}><code className={classes.codeConteiner}>body {`{`}</code>,<code className={classes.codeConteiner}>h1 {`{`}</code>,<code className={classes.codeConteiner}>p {`{`}</code></span>
            </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Правила CSS состоят из селектора и блока деклараций. Селектор указывает, к каким элементам HTML применяются стили, а блок деклараций содержит одну или несколько деклараций, разделённых точкой с запятой. Пример блока деклараций:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>h1 {`{ color: blue; font-size: 20px; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Декларации состоят из свойства и значения, разделённых двоеточием. Например, в декларации <code className={classes.codeConteiner}>color: blue;</code> — <code className={classes.codeConteiner}>color</code> это свойство, а <code className={classes.codeConteiner}>blue</code> — значение.
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>p {`{ margin: 0; padding: 0; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                CSS также поддерживает комментарии. Они начинаются с <code className={classes.codeConteiner}>/*</code> и заканчиваются <code className={classes.codeConteiner}>*/</code>. Комментарии помогают пояснять код или временно отключать части стилей.
                </span>
            </div>
        </div>
            <div className={classes.teory_demo}>
                <span><code className={classes.codeConteiner}>/* Так выглядит коментарий */</code></span>
            </div>
        </div>
    </div>
   
  )
}

export default CSSTHIS