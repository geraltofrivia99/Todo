import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';

 class DateInput extends Component {
     

  render() {
    return (
      <div>
        <span >
          {this.props.dl ? <span>Deadline: {this.props.dl}</span> : 
          'Without deadline'
          }
          {this.props.compl && <span> missed</span>}
        </span>
      </div>
    )
  }
}
export default DateInput
