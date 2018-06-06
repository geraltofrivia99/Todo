import {combineReducers} from 'redux'
import todos from './todolist'
import filter from './filter'

export default combineReducers({
  todos,
  filter
})