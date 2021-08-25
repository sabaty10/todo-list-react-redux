import { combineReducers } from 'redux';

let id = 0;
const todoList = (todoList = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todoList, { id: id++, text: action.payload, status: false }]

        case 'COMPLETE_TODO':
            todoList.forEach(todo => {
                if (todo.id === action.payload) {
                    todo.status = !todo.status
                }
            });
            console.log(todoList);
            return [...todoList];

        case 'DELETE_TODO':
            return todoList.filter((todo) => {
                return todo.id !== action.payload
            });

        case 'EDIT_TODO':
            todoList.forEach(todo => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
            });
            return [...todoList];
        default:
            return [...todoList]
    }
}

const allReducers = combineReducers({
    todoList: todoList
});

export default allReducers;