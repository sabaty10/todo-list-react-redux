import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../actions";
import "../styles/make-todo.css";

const MakeTodo = ({ text, setText, newTodoButton, setNewTodoButton, editFlag, setChooseStatusButton }) => {
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todoList)

    const setOptionType = (e) => {
        setChooseStatusButton(e.target.value);
    }


    const setNewTodo = (e) => {
        //new todo
        if (!newTodoButton) {
            setText(e.target.value)
            console.log(text);
        } else {//edit todo
            setText(e.target.value)
            dispatch(editTodo(e.target.value, editFlag));
        }
        console.log(todoList);
    }
    return (
        <div className="make-to-do-container">
            <input
                placeholder="Make a new Note..."
                value={text}
                onChange={(e) => setNewTodo(e)}
                className="todo-input"
            >
            </input>

            {
                newTodoButton ? <button
                    className="edit-todo"
                    onClick={() => {
                        // dispatch(editTodo(text, editFlag));
                        setText("");
                        setNewTodoButton(!newTodoButton)
                    }}>

                    <i className="rotate chevron circle down icon big"></i>
                </button>
                    :
                    <button
                        className="create-todo"
                        onClick={() => {
                            if (!text) {
                                return alert("Todo cannot be empty");
                            } else
                                dispatch(addTodo(text));
                            setText("");
                        }}>
                        <i className="rotate chevron circle right icon big"></i>
                    </button>
            }
            {todoList.length !== 0 ? <select className="select-button" defaultValue='All' onChange={setOptionType} id="todo-status" name="todo-status">
                <option value='All'>All</option>
                <option value='Done'>Done</option>
                {/* <option value=''>Deleted</option> */}
            </select>
                :
                null}

        </div >
    );
};



export default MakeTodo;
