import {time, randomId} from '../utils'

const initialState = [
    {
        id: 1,
        text: 'Task 1',
        description: 'first task',
        Date: '2018-06-05 12:33',
        edit: false,
        complited: true,
        important: 1,
        deadline: '2018-06-06 12:26',
        done: '',
        missed: ''
    },
    {
        id: 2,
        text: 'Task 2',
        description: 'second task',
        Date: '2018-06-05 12:25',
        edit: false,
        complited: true,
        important: 2,
        deadline: '2018-06-07 12:26',
        done: '', 
        missed: ''
    }
]

export default (state=initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id === action.id)
                ? {...todo, edit: !todo.edit}
                : todo
            )
        case 'CHANGE_VALUE':
            return state.map(todo => 
                (todo.id === action.id)
                ? {...todo, text: action.text}
                : todo
            )
        case 'DESCRIPTION_VALUE':
            return state.map(todo => 
                (todo.id === action.id)
                ? {...todo, description: action.text}
                : todo
            )
        case 'DATA_CHANGE':
            return state.map(todo => 
                (todo.id === action.id)
                ? {...todo, Date: 'now'}
                : todo
            )
        case 'CHANGE_COMPLIT':
            const compliteDate = time()
            const complited = (new Date(compliteDate).getTime() > new Date(action.deadline))
            return state.map(todo => 
                (todo.id === action.id)
                ? {...todo, complited: !todo.complited, done: compliteDate, missed: complited}
                : todo
            )
        case 'ADD_TASK': 
            return [
                ...state, {
                    id: randomId(), text: action.task.text,
                    description: action.task.description,
                    Date: time(),
                    edit: false,
                    complited: true,
                    important: action.task.important,
                    deadline: action.task.deadline
                }
            ]
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.id)
        case 'LOAD_TODO':
        default:
            return state
    }
}