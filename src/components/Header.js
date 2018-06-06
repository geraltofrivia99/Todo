import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions'

class Header extends Component {
 
  handleSubmit =(e)=> {
    if (this.refs.taskinput !== ''){
      e.preventDefault()
      let task = {
        text: this.refs.taskinput.value,
        description: this.refs.descrinput.value,
        deadline: this.refs.deadlineinput.value,
        important: Number(this.refs.important.value)
      }
      console.log(typeof (task.important));
      this.refs.taskinput.value = ''
      this.refs.descrinput.value = ''
      this.refs.deadlineinput.value = ''
      return this.props.addTask(task)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Task Name</label>
            <input type="text" ref='taskinput' className="form-control" placeholder='Toodo' />
            <label>Description</label>
            <input type="text" ref='descrinput' className="form-control"  placeholder='Description'/>
            <label>Deadline</label>
            <input type="text" ref='deadlineinput'
             className="form-control" placeholder='y.m.d h:m' />
             <label>Importance</label>
             <select className="custom-select" ref='important'>
              <option value="1">default</option>
              <option value="2">important</option>
              <option value="3">very important</option>
            </select>
          </div>
          <button type='submit' className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = {
  addTask
}

export default connect(null, mapDispatchToProps)(Header)
