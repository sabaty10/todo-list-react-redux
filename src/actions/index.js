export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: text
    }
}

export const changeTodoStatus = (id) => {
    return {
        type: 'COMPLETE_TODO',
        payload: id
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}
export const editTodo = (text, id) => {
    return {
        type: 'EDIT_TODO',
        payload: {
            text: text,
            id: id
        }
    }
}