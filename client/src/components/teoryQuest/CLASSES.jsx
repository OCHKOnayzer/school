

import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const CLASSES = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
    <TitleQuest title={title} quest_id={quest_id}/>
    <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
                <span>
                    Множественные классы в CSS позволяют применять несколько классов к одному элементу, что упрощает организацию стилей и повторное использование кода. Когда у элемента применяется несколько классов, стили из всех этих классов применяются к элементу.
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>div {`{ color: blue; }`}</span></code><br/>
                <code className={classes.code_demo}><span>.highlight {`{ background-color: yellow; }`}</span></code>
            </span>
            
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    В этом примере у элемента <code className={classes.codeConteiner}>div</code> применяются два класса: <code className={classes.codeConteiner}>div</code> и <code className={classes.codeConteiner}>highlight</code>. Стили из обоих классов будут применены к элементу.
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>div.large {`{ font-size: 24px; }`}</span></code><br/>
                <code className={classes.code_demo}><span>.highlight {`{ background-color: yellow; }`}</span></code>
            </span>
            
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    В этом примере элементам с классом <code className={classes.codeConteiner}>large</code>, которые являются элементами <code className={classes.codeConteiner}>div</code>, будет присвоен размер шрифта 24 пикселя, а также они получат желтый фон от класса <code className={classes.codeConteiner}>highlight</code>.
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    Почему код лучше организовать именно так? Мы уже знаем, как работает каскад в CSS, поэтому ответить будет легко.
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    Использование нескольких классов в разметке помогает явно указать, какие стили будут смешиваться с помощью каскада. И, конечно, эти стили удобнее всего разместить в коде рядом друг с другом.
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Использование однотипных селекторов (например, по классам) позволяет использовать самый простой механизм разрешения конфликтов — по порядку в коде. Размещаем частные CSS-правила после общего, и всё что нужно точно переопределится.
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                А теперь уже с полным пониманием происходящего давайте улучшим блок навыков: сделаем шкалу с высоким процентом зелёной. Для этого в разметку добавим ещё один класс, а в стили — CSS-правило для этого класса, причём после общего CSS-правила.
                </span>
            </div>
        </div>
    </div>
</div>
  )
}

export default CLASSES


