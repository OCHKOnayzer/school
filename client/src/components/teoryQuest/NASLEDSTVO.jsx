import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const NENASLEDSTVO = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
    <TitleQuest title={title} quest_id={quest_id}/>
    <div className={classes.teory__content}>
    <div className={classes.teory_info}>
        <div>
        <span>
        Наследование в CSS позволяет дочерним элементам автоматически получать значения свойств от их родительских элементов. Это помогает упростить стилизацию и сделать код более читаемым и управляемым. Наследуемые свойства включают такие аспекты, как шрифты, цвета и отступы. Рассмотрим некоторые из них:
        <span style={{display:"flex"}}><code className={classes.codeConteiner}>color</code>,<code className={classes.codeConteiner}>font-family</code>,<code className={classes.codeConteiner}>line-height</code></span>
        </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Свойство <code className={classes.codeConteiner}>color</code> задает цвет текста и наследуется дочерними элементами. Например, если задать цвет текста для элемента <code className={classes.codeConteiner}>body</code>, все дочерние элементы автоматически унаследуют этот цвет:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>body {`{ color: darkblue; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>p {`{ color: inherit; } /* Унаследовать цвет родителя */`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Свойство <code className={classes.codeConteiner}>font-family</code> задает семейство шрифтов и также наследуется дочерними элементами. Например, если задать семейство шрифтов для элемента <code className={classes.codeConteiner}>div</code>, все дочерние элементы внутри этого <code className={classes.codeConteiner}>div</code> унаследуют это значение:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ font-family: Arial, sans-serif; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>span {`{ font-family: inherit; } /* Унаследовать шрифт родителя */`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Свойство <code className={classes.codeConteiner}>line-height</code> определяет высоту строки текста и также наследуется дочерними элементами. Это свойство помогает управлять интерлиньяжем текста в элементах:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>body {`{ line-height: 1.6; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>p {`{ line-height: inherit; } /* Унаследовать высоту строки родителя */`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Свойство <code className={classes.codeConteiner}>font-size</code> задает размер текста и также может наследоваться дочерними элементами. Например, если задать размер текста для элемента <code className={classes.codeConteiner}>div</code>, все дочерние элементы внутри этого <code className={classes.codeConteiner}>div</code> унаследуют этот размер:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ font-size: 18px; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>span {`{ font-size: inherit; } /* Унаследовать размер текста родителя */`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Не все свойства наследуются автоматически. Чтобы принудительно наследовать значение, можно использовать ключевое слово <code className={classes.codeConteiner}>inherit</code>. Это особенно полезно для свойств, которые по умолчанию не наследуются, таких как <code className={classes.codeConteiner}>margin</code> и <code className={classes.codeConteiner}>padding</code>. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ margin: 20px; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>p {`{ margin: inherit; } /* Унаследовать отступ родителя */`}</span></code></span>
    </div>
    </div>
</div>
  )
}

export default NENASLEDSTVO