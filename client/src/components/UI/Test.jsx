import React from 'react'
import DynamicCompletedComponent from '../TrueQuest/DynamicCompletedComponent'

const Test = (course_id,quest_title,frameContent) => {
  return (
    <DynamicCompletedComponent course_id={course_id} quest_title={quest_title} frameContent={frameContent}/>
  )
}

export default Test