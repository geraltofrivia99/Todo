import React, { Component } from 'react'
import {connect} from 'react-redux'
import Todo from './todo'
// import {} from '../actions'


class TodoList extends Component {
    
    
  render() {
      const {todos, filter} = this.props
      const filtered = todos.filter(todo=> {
            if (filter === 'SHOW_DEFAULT') {
                return todo.important === 1
            }
          if (filter === 'SHOW_IMPORTANT') {
              return todo.important === 2
          }
          if (filter === 'SHOW_VERY_IMPORTANT') {
            return todo.important === 3
        }
        return true
      })
      
    return (
      <div className='container'>
        <div className="row">
            {filtered.map(todo => (
                <Todo 
                    key={todo.id}
                    {...todo}
                />
            ))}
        </div> 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    filter: state.filter
})
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
