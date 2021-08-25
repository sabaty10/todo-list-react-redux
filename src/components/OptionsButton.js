import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { changeTodoStatus, deleteTodo, editTodo } from '../actions';


const OptionsButton = ({ todoList, id, setOptionsButton, optionsButton, setText, newTodoButton, setNewTodoButton, setEditFlag }) => {
    const dispatch = useDispatch();

    const currentTodo = () => {
        setText(todoList.filter((todo) => todo.id === id)[0].text);
    }
    return (

        <div className='buttons'>
            {/* close options */}
            <button
                title="Close Options"
                className="close-button"
                onClick={() => setOptionsButton(!optionsButton)}>
                X
            </button>
            {/* edit-button */}
            <button
                title="edit-button"
                className="edit-button"
                onClick={() => { currentTodo(); setNewTodoButton(!newTodoButton); setEditFlag(id) }}>
                <i className="edit icon"></i>
            </button>
            {/* Done / Cancel Todo */}
            <button
                title={todoList.find((todo) => {
                    return (
                        todo.id === id)
                }).status ? 'Cancel' : "Done"}
                onClick={() => dispatch(changeTodoStatus(id))}
                className="button positive ui ">
                {todoList.find((todo) => {
                    return (
                        todo.id === id)
                }).status ? 'Cancel' : 'Done'}
            </button>
            {/* Delete Todo */}
            <button
                title="Delete Todo"
                onClick={() => dispatch(deleteTodo(id))}
                className="button negative ui "
            >Delete
            </button>
        </div >

    )
}
const mapStateToProps = (state) => {
    return { todoList: state.todoList }

}
export default connect(mapStateToProps)(OptionsButton);