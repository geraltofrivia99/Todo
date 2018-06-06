import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setVisability} from '../actions'

class Footer extends Component {
    state = {  }
    render() {
        const {setVisability, filter} = this.props
        return (
            <div className='container'>
                <div className="row">
                    <ul className="list-group">
                        <li onClick={()=>
                        setVisability('SHOW_ALL')} className={filter==='SHOW_ALL' ? 'list-group-item active' : 'list-group-item'} >
                        All</li>
                        <li onClick={()=>
                        setVisability('SHOW_DEFAULT')} className={filter==='SHOW_DEFAULT' ? 'list-group-item active' : 'list-group-item'}>
                        Default</li>
                        <li onClick={()=>
                        setVisability('SHOW_IMPORTANT')} className={filter==='SHOW_IMPORTANT' ? 'list-group-item active' : 'list-group-item'}>
                        Important</li>
                        <li onClick={()=>
                        setVisability('SHOW_VERY_IMPORTANT')} className={filter==='SHOW_VERY_IMPORTANT' ? 'list-group-item active' : 'list-group-item'}>
                        Very Important</li>
                    </ul>
                    
                </div>
            </div>
            
        );
    }
}
const mapStateToProps=(state)=>({
    filter: state.filter
})
const mapDispatchToProps = {
    setVisability
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
