import React, { useState, useRef } from 'react';
import MakeTodo from './MakeTodo';
import TodoList from './TodoList'
import { useSelector } from 'react-redux';
import '../styles/resetDefaultStyle.css';
import '../styles/app.css';

const App = () => {
    const todoList = useSelector(state => state.todoList)
    const [text, setText] = useState("");
    const [newTodoButton, setNewTodoButton] = useState(false)
    const [editFlag, setEditFlag] = useState(null)
    const [chooseStatusButton, setChooseStatusButton] = useState('All')
    // const inputEl = useRef();

    return (
        <div className="app-container">
            <h1>My Todo List</h1>
            <MakeTodo
                text={text}
                setText={setText}
                newTodoButton={newTodoButton}
                setNewTodoButton={setNewTodoButton}
                editFlag={editFlag}
                setChooseStatusButton={setChooseStatusButton} />
            {todoList ? todoList.filter((todo) => {
                if (chooseStatusButton === 'Done') {
                    return (
                        todo.status === true
                    )
                } else {
                    return (todo)
                }
            }).map((todo) => {
                // { console.log(todoList.status) }
                return (
                    <TodoList
                        id={todo.id}
                        state={todo.state}
                        setText={setText}
                        newTodoButton={newTodoButton}
                        setNewTodoButton={setNewTodoButton}
                        setEditFlag={setEditFlag} />

                )
            }) : null}
        </div >
    )
}

export default App;