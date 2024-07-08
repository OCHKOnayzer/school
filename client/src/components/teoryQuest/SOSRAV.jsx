import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const SOSRAV = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
            <span>
            В CSS составные свойства позволяют задавать несколько значений для различных под-свойств в одной строке. Это упрощает код и делает его более компактным. Рассмотрим некоторые из часто используемых составных свойств:
            <span style={{display:"flex"}}><code className={classes.codeConteiner}>margin</code>,<code className={classes.codeConteiner}>padding</code>,<code className={classes.codeConteiner}>border</code>,<code className={classes.codeConteiner}>background</code>,<code className={classes.codeConteiner}>font</code></span>
            </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Свойство <code className={classes.codeConteiner}>margin</code> позволяет задавать внешние отступы для всех четырех сторон элемента в одной строке. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>div {`{ margin: 10px 20px 30px 40px; }`}</span></code> {/* верх, правый, низ, левый */}<br/>
                <code className={classes.code_demo}><span>p {`{ margin: 10px 20px; }`}</span></code> {/* верх/низ, правый/левый */}
            </span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Свойство <code className={classes.codeConteiner}>padding</code> позволяет задавать внутренние отступы для всех четырех сторон элемента аналогичным образом. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>div {`{ padding: 5px 10px 15px 20px; }`}</span></code> {/* верх, правый, низ, левый */}<br/>
                <code className={classes.code_demo}><span>p {`{ padding: 5px 10px; }`}</span></code> {/* верх/низ, правый/левый */}
            </span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Свойство <code className={classes.codeConteiner}>border</code> позволяет задавать ширину, стиль и цвет границы элемента в одной строке. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>div {`{ border: 2px solid black; }`}</span></code><br/>
                <code className={classes.code_demo}><span>p {`{ border: 1px dashed gray; }`}</span></code>
            </span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Свойство <code className={classes.codeConteiner}>background</code> позволяет задавать фоновый цвет, изображение, позицию, повтор и другие свойства фона в одной строке. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>div {`{ background: url('image.jpg') no-repeat center center / cover; }`}</span></code><br/>
                <code className={classes.code_demo}><span>p {`{ background: #ffcc00; }`}</span></code>
            </span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Свойство <code className={classes.codeConteiner}>font</code> позволяет задавать семейство шрифтов, размер, стиль и высоту строки в одной строке. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>div {`{ font: italic bold 16px/1.5 Arial, sans-serif; }`}</span></code><br/>
                <code className={classes.code_demo}><span>p {`{ font: 14px 'Times New Roman', serif; }`}</span></code>
            </span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Использование составных свойств позволяет сократить объем кода и сделать его более читаемым, особенно при задании нескольких под-свойств для одного элемента. Кроме того, это упрощает внесение изменений, так как все связанные под-свойства собраны в одном месте.
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SOSRAV