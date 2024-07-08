import React from 'react';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

// Создание темы
const whiteTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#1f1f1f',//основной цвет
    backgroundImage: '',
    foreground: '',
    caret: '5d00ff',//Маркер строки
    selection: '#0c437755',//Выделение
    selectionMatch: '#036dd626',
    lineHighlight: '#8a91991a',
    gutterBorder: '1px solid #ffffff',
    gutterBackground: '#1f1f1f',//левая часть
    gutterForeground: '#8a919966',//color left part
  },
 tags: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#5c6166' },
    { tag: t.operator, color: '#5c6166' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
});
export { whiteTheme };
