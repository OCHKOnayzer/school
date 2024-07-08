import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const ERROR = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
    <TitleQuest title={title} quest_id={quest_id}/>
    <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
                <span>
                    Конфликт свойств в CSS возникает, когда у элемента есть несколько правил, определяющих одно и то же свойство. Это может привести к тому, что одно правило заменяет другое, и в результате применяется неожиданный стиль.
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>p {`{ color: blue; }`}</span></code><br/>
                <code className={classes.code_demo}><span>p {`{ color: red; }`}</span></code>
            </span>
            
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    В этом примере оба правила пытаются установить цвет текста для элементов <code className={classes.codeConteiner}>p</code>. Поскольку второе правило определено позже, оно заменяет первое, и цвет текста будет красным.
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>p.intro {`{ color: blue; }`}</span></code><br/>
                <code className={classes.code_demo}><span>p {`{ color: red; }`}</span></code>
            </span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    В этом примере элементам с классом <code className={classes.codeConteiner}>intro</code>, которые являются элементами <code className={classes.codeConteiner}>p</code>, будет присвоен синий цвет текста, в то время как остальные элементы <code className={classes.codeConteiner}>p</code> будут иметь красный цвет текста.
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    Браузеру нужно как-то решать, какими будут итоговые значения конфликтующих свойств. Конфликт разрешается максимум за три шага. Если на текущем шаге определиться не удалось, то выполняется следующий шаг.
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    <ol>
                        <li style={{marginBottom:"10px"}}>
                        1.Сравниваются приоритеты стилевых файлов, в которых находятся конфликтующие свойства. Например, авторские (то есть наши) стили приоритетнее браузерных.
                        </li>
                        <li style={{marginBottom:"10px"}}>
                        2.Сравнивается специфичность селекторов у CSS-правил с конфликтующими свойствами. Например, селектор по классу более специфичен, чем селектор по тегу.
                        </li>
                        <li>3.Побеждает то свойство, которое находится ниже в коде.</li>
                    </ol>
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    Каскад работает и внутри CSS-правил, поэтому в конфликт вступили «обычный» margin-bottom и аналогичный компонент составного свойства. «Обычное» свойство победило, так как находится ниже в коде:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <span style={{display:"block"}}>margin-left: 0;   /* из составного свойства */</span>
                <span style={{display:"block"}}>margin-top: 0;    /* из составного свойства */</span>
                <span style={{display:"block"}}>margin-right: 0;  /* из составного свойства */</span>
                <span style={{display:"block"}}><del>margin-bottom: 0;</del> /* из составного свойства */</span>
                <span style={{display:"block"}}>margin-bottom: 10px;</span>
            </span>
        </div>
    </div>
</div>
  )
}

export default ERROR











