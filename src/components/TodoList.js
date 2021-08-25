import React, { useState, useEffect } from 'react';
import '../styles/todo-list.css';
import { useSelector } from 'react-redux';
import OptionsButton from './OptionsButton';

const TodoList = ({ id, setText, newTodoButton, setNewTodoButton, setEditFlag }) => {
    const todoList = useSelector(state => state.todoList);
    const [todoStatus, setTodoStatus] = useState('');
    const [optionsButton, setOptionsButton] = useState(false);

    useEffect(() => {
        if (todoList.find((todo) => {
            return (
                todo.id === id);
        }).status) {
            setTodoStatus('complete');
        } else {
            setTodoStatus('');
        }
        setOptionsButton(false);
    }, [todoList]);
    return (
        <div key={id} className={`todo-list-container ${todoStatus}`}>
            {console.log("!", todoStatus)}
            <p>{todoList.find((todo) => {
                return (
                    todo.id === id);
            }).text}
            </p>

            {optionsButton ?
                <OptionsButton
                    setText={setText}
                    id={id}
                    setOptionsButton={setOptionsButton}
                    optionsButton={optionsButton}
                    newTodoButton={newTodoButton}
                    setNewTodoButton={setNewTodoButton}
                    setEditFlag={setEditFlag} />
                :
                <button className="more-options" onClick={() => setOptionsButton(!optionsButton)}> <i className="cog icon "></i> </button>}
        </div >
    )
}

export default TodoList;
