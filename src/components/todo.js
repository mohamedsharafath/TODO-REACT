import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task,toggleComplete,editTodo,deletetodo}) => {
  return (
    <div className='Todo' >
        <p onClick={()=> toggleComplete(task.id)} 
        className={`${task.completed ? 'completed' : ""}`}>
            {task.task}</p>
        <div className='icons'>
            <FontAwesomeIcon icon={faPenToSquare} style={{marginRight:0,}} onClick={()=>editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=>deletetodo(task.id)} style={{marginLeft:10,}}/>
            
        </div>
    </div>
  )
}
