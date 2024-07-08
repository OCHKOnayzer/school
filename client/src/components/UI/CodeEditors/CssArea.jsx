import React, { useCallback, useState } from 'react'
import CodeMirror,{oneDarkTheme} from '@uiw/react-codemirror'
import {css} from '@codemirror/lang-css'

const CssArea = (props) => {
   
  return (
    <CodeMirror {...props}  extensions={[css({jsx:true})]}/>
  )
}

export default CssArea