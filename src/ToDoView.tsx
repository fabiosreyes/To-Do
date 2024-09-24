import React, { useState } from 'react';
import data from './data';

interface ToDoItem {
   id: number;
   text: string;
   completed: boolean;
}

const ToDoView: React.FC = () => {
    const [todos, setTodos] = useState<ToDoItem[]>(data.todos)
    const [newToDoText, setNewTodoText] = useState<string>('');
    
    //Create To Do
    const addTodo = () => {
        const addToDo: ToDoItem = {
            id: todos.length + 1,
            text: newToDoText,
            completed: false
        };
        setTodos([...todos, addToDo]);
        setNewTodoText('');
    }

    //Delete To Do
    const removeToDo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    //Edit To Do
    const editToDo = (text: string, id: number) => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                alert(todo.id)
                return {...todo, text: text}
            }
            return todo;
        }))
    }

    
    return (
        <> 
            <input 
                type="text"
                onKeyDown={(e) => {
                    if(e.key === 'Enter' && e.currentTarget.value){
                        addTodo();
                        e.currentTarget.value = '';
                    }
                }}
                value={newToDoText}
                placeholder={"add new to-do"}
                onChange={(e) => {
                    setNewTodoText(e.currentTarget.value);
                }}
            />
            <button onClick={() => {addTodo()}}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input 
                            value={todo.text} 
                            placeholder={todo.text}
                            onChange={(e) => editToDo(e.target.value)}
                        />
                        <button onClick={() => removeToDo(todo.id)}>Delete</button>
                        <button onClick={() => editToDo(todo.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToDoView;