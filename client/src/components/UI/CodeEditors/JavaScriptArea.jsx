import React, {useState , useCallback}from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const JavaScriptArea = (props) => {
    return (
        <CodeMirror {...props} extensions={[javascript({ jsx: true })]} />
    );
}

export default JavaScriptArea