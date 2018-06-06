import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css'
import Header from './Header'
import TodoList from './todoList'
import Footer from './footer'

import {LoadTodo} from '../actions'

class App extends Component {

  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <br/>
          <Header />
          <br/>
          <Footer />
          </div>
          <div className="col-md-8">
          <br/>
          <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  LoadTodo
}

export default connect(null, mapDispatchToProps)(App);
