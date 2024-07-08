import React, { useCallback, useState,useEffect,useContext} from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html';
const HtmlArea = (props) => {
  return (
    <CodeMirror {...props} extensions={[html({jsx:true})]}/>
  )
}

export default HtmlArea