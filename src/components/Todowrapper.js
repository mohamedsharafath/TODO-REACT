import React,{useState} from 'react'
import { Todoform } from './todoform'
import { Todo } from './todo';
import { v4 as uuidv4 } from 'uuid'
import { EditTodoform } from './EditTodoform';
uuidv4();

export const Todowrapper = () => {
    const[todos,setTodos]=useState([])

    const addTodo = (todo) =>{
        setTodos([...todos,{id :uuidv4(),task: todo,completed: false,isEditing: false}])
        console.log(todos);
    }
    const toggleComplete = id =>{
            setTodos(todos.map(todo => todo.id===id ? {...todo,completed:!todo.completed} : todo))
    }
    const deletetodo = id =>{
        setTodos(todos.filter(todo=> todo.id!==id))
    }
    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id===id ?{...todo,isEditing:!todo.isEditing} : todo ))
    }
    const editTask = (task,id) => {
            setTodos(todos.map(todo => todo.id===id ? {...todo,task,isEditing:!todo.isEditing} : todo))
    }
  return (
    <div className='Todowrapper'>
        <h1>Get Things Done</h1>
        <Todoform addTodo={addTodo}/>
        {todos.map((todo,index) => (
            todo.isEditing ? (
                <EditTodoform editTask={editTask} task={todo}/>
            ) : (
             <Todo task={todo} key={index} toggleComplete={toggleComplete} deletetodo={deletetodo} editTodo={editTodo}/>)
            
        ))}
    </div>
  )
}
