import React from 'react'
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const CHILDETAGS = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
      <TitleQuest title={title} quest_id={quest_id}/>
      <div className={classes.teory__content}>
       <div className={classes.teory_info}>
        <div>
            <span>
            Однажды в волшебном мире HTML-тегов жили разные существа. Каждый из них был уникален и имел свои обязанности. Они обитали в огромном Древе Документа, и у каждого был свой домик — тег.
            </span>
        </div>
       </div>
       <div className={classes.teory_info}>
        <div>
            <span>
            В уютных домиках <code className={classes.codeConteiner}>&lt;ul&gt;</code> и <code className={classes.codeConteiner}>&lt;ol&gt;</code>  жили дружные семьи тегов <code className={classes.codeConteiner}>&lt;li&gt;</code>, которые любили всё упорядочивать и нумеровать.
            </span>
        </div>
       </div>
       <div className={classes.teory_info}>
        <div>
            <span>Таким образом мы переходим к вложенным тегам! Что такое вложенные теги?</span>
        </div>
       </div>
       <div className={classes.teory_info}>
        <div>
            <span>
                Вложенными тегиами называют теги, которые находятся внутри других тегов, такая структура позволяет создавать сложные и многоуровневые элементы веб-страницы. 
            </span>
        </div>
       </div>
       <div className={classes.teory_info}>
        <div>
            <span>
              Например, можно вкладывать заголовки, абзацы, списки и другие элементы внутрь контейнеров, таких как <code className={classes.codeConteiner}>&lt;div&gt;</code>, чтобы организовать контент.
            </span>
        </div>
       </div>
       <div className={classes.teory_demo}>
        <span>
           <code style={{display:"block"}}> &lt;ul&gt;</code>
                <code  style={{marginLeft:"12px"}}>&lt;li&gt;</code>
                   <span style={{marginLeft:"12px"}}>Элемент списка</span>
                <code style={{marginLeft:"12px"}}>&lt;/li&gt;</code>
           <code style={{display:"block"}}>&lt;/ul&gt;</code> 
        </span>
       </div>
       <div className={classes.teory_info}>
        <div>
            <span>
            У вложенных тегов всегда нужно следить за правильным порядком закрытия. Вложенный тег не может закрываться позже родительского:
            </span>
        </div>
       </div>
       <div className={classes.teory_demo}>
        <span>
            <code>&lt;ul&gt;</code><code><span style={{color:"#69b253"}}>&lt;li&gt;</span>Элемент списка<span style={{color:"#69b253"}}>&lt;/li&gt;</span>&lt;/ul&gt;&lt;!-- Хорошо --&gt;</code>
        </span>
        <span>
            <code>&lt;ul&gt;</code><code><span style={{color:"#f05a28"}}>&lt;li&gt;</span>Элемент списка&lt;/ul&gt;&lt;<span style={{color:"#f05a28"}}>&lt;/li&gt;</span>!-- Плохо --&gt;</code>
        </span>
       </div>
       <div className={classes.teory_info}>
                <div>
                    <span>
                    И ещё, не все теги можно вкладывать в другие теги, например тег <code className={classes.codeConteiner}>&lt;h1&gt;</code> нельзя вкладывать в <code className={classes.codeConteiner}>&lt;p&gt;</code>. Эти правила вложенности для каждого тега вы узнаете постепенно, по ходу изучения HTML.
                    </span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default CHILDETAGS