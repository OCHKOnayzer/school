import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const SELECTORSTAGS = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
    <TitleQuest title={title} quest_id={quest_id}/>
    <div className={classes.teory__content}>
    <div className={classes.teory_info}>
        <div>
        <span>
        В CSS селекторы используются для выбора элементов HTML, к которым применяются стили. Селекторы по тегам и по классам являются одними из наиболее часто используемых типов селекторов. Рассмотрим, как они работают и какие преимущества предоставляют.
        <span style={{display:"flex"}}><code className={classes.codeConteiner}>селекторы по тегам</code>,<code className={classes.codeConteiner}>селекторы по классам</code></span>
        </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Селекторы по тегам выбирают все элементы определенного типа. Они применяются ко всем элементам, использующим заданный тег. Например, чтобы задать стиль для всех абзацев <code className={classes.codeConteiner}>{`<p>`}</code> на странице, можно использовать селектор <code className={classes.codeConteiner}>p</code>:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span>
            <code className={classes.code_demo}><span>p {`{ color: blue; font-size: 16px; }`}</span></code>
        </span>
        
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
                Этот код изменит цвет текста на синий и установит размер шрифта 16 пикселей для всех элементов <code className={classes.codeConteiner}>{`<p>`}</code> на странице.
            </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Селекторы по классам выбирают все элементы, которым присвоен определенный класс. Классы задаются с помощью атрибута <code className={classes.codeConteiner}>class</code> и позволяют применять стили к определенным элементам, независимо от их типа. Например, чтобы задать стиль для всех элементов с классом <code className={classes.codeConteiner}>.highlight</code>, можно использовать следующий селектор:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span>
            <code className={classes.code_demo}><span>.highlight {`{ background-color: yellow; font-weight: bold; }`}</span></code>
        </span>
    </div>
    <div className={classes.teory_info}>
        <div>
        <span>
            Этот код изменит фоновый цвет на желтый и сделает текст жирным для всех элементов, имеющих класс <code className={classes.codeConteiner}>.highlight</code>.
        </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Селекторы по тегам полезны, когда нужно применить стили ко всем элементам определенного типа на странице. Это может быть полезно для глобальных стилей, таких как стилизация всех заголовков или абзацев.
            </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Селекторы по классам позволяют более точно настраивать стилизацию и применять их к определенным элементам. Это особенно полезно, когда нужно стилизовать группы элементов, которые могут быть разного типа, но должны выглядеть одинаково.
            </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Комбинирование селекторов по тегам и классам позволяет создавать мощные и гибкие правила CSS. Например, чтобы применить стили только к элементам <code className={classes.codeConteiner}>{`<p>`}</code> с классом <code className={classes.codeConteiner}>.highlight</code>, можно использовать следующий комбинированный селектор:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span>
            <code className={classes.code_demo}><span>p.highlight {`{ color: red; }`}</span></code>
        </span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
                Этот код изменит цвет текста на красный только для тех элементов <code className={classes.codeConteiner}>{`<p>`}</code>, которые имеют класс <code className={classes.codeConteiner}>.highlight</code>.
            </span>
        </div>
    </div>
    </div>
</div>
  )
}

export default SELECTORSTAGS