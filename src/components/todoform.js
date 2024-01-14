import React,{useState} from 'react'

export const Todoform = ({addTodo}) => {
    const[value,setvalue]=useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(value);
        setvalue("");
    }

  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input 
        type='text' 
        value={value}
        className='todo-input' 
        placeholder='What is the task today?'
        onChange={(e)=> setvalue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
