import React,{useState} from 'react'

export const EditTodoform = ({editTask,task}) => {
    const[value,setvalue]=useState(task.task)

    const handleSubmit = (e) =>{
        e.preventDefault();
       editTask(value,task.id)
        setvalue("");
    }

  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input 
        type='text' 
        value={value}
        className='todo-input' 
        placeholder='Update Task'
        onChange={(e)=> setvalue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
