import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    handleChange, dataChange, descrChange,
    changeComplit, deleteTask, toggleTodo
} from '../actions'
import DateInput from './dateinput'

class Todo extends Component {
    render() {
        return (
            <div className={!this.props.complited ? 'card text-center border border-success' : 'card text-center'}>
            <div className="card-header">
                {this.props.complited && <span>Not complited</span>}
                {!this.props.complited && <span> Done: {this.props.done}</span>}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                {this.props.edit &&
                    <input type='text'className='editor'
                        value={this.props.text}
                        onChange={(e) =>
                            this.props.handleChange(e.target.value, this.props.id)}
                    />}
                    {!this.props.edit && this.props.text}
                    {this.props.important === 2 && <span className='imp'>Important</span>}
                    {this.props.important === 3 && <span className='vimp'>Very Important</span>}
                </h5>
                <p className="card-text">
                    {this.props.edit &&
                        <input type='text'className='editor'
                            value={this.props.description}
                            onChange={(e) =>
                                this.props.descrChange(e.target.value, this.props.id)}
                        />}
                    {!this.props.edit && this.props.description}
                </p>
                <p><span>Date of creation: </span>{this.props.Date}</p>
                <div className='group'>
                    <button className='btn btn-success' disabled={!this.props.complited} onClick={() =>
                        this.props.changeComplit(this.props.id, this.props.deadline)}><i className="far fa-check-circle"></i></button>
                    <button className={this.props.edit ? 'btn btn-success' : 'btn btn-light'}
                        onClick={() =>
                            this.props.toggleTodo(this.props.id)}>
                        {this.props.edit ? 'Save' : <i className="fas fa-pencil-alt"></i>}
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.deleteTask(this.props.id)}><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
            <div className={this.props.missed ? 'card-footer text-muted bg-danger' : 'card-footer text-muted'}>
                
                <DateInput 
                 compl= {this.props.missed}
                 dl={this.props.deadline}
                />
            </div>
        </div>
        );
    }
}



const mapDispatchToProps = {
    handleChange, descrChange,
    dataChange, toggleTodo,
    changeComplit, deleteTask
}

export default connect(null, mapDispatchToProps)(Todo);