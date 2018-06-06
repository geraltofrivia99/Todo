// import moment from 'moment'


export const LoadTodo = (tasks) => dispatch => {
    localStorage.setItem('tasks', tasks)
    dispatch({
        type: 'LOAD_TODO',
        tasks
    })
}

export const toggleTodo = (id) => dispatch => {
    dispatch({
        type: 'TOGGLE_TODO',
        id
    })  
}

export const handleChange = (text, id) => dispatch => {
    dispatch({
        type: 'CHANGE_VALUE',
        text, 
        id
    })
}
export const descrChange = (text, id) => dispatch => {
    dispatch({
        type: 'DESCRIPTION_VALUE',
        text, 
        id
    })
}

export const dataChange = (id) => dispatch => {
    dispatch({
        type: 'DATA_CHANGE',
        id
    })  
}
export const changeComplit = (id,deadline) => dispatch => {
    dispatch({
        type: 'CHANGE_COMPLIT',
        id,
        deadline
    })  
}

export const addTask = (task) => dispatch => {
    dispatch({
        type: 'ADD_TASK',
        task
    })
}
export const deleteTask = (id) => dispatch => {
    dispatch({
        type: 'DELETE_TASK',
        id
    })  
}
export const setVisability = (filter) => dispatch => {
    dispatch({
        type: 'SET_VISABILITY',
        filter
    })
}