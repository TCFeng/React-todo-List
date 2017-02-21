import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Show from '../components/Show'
import Btn from '../components/Btn'

import * as counterAction from '../actions/counterAction';

class Panel extends React.Component {
  constructor(){
    super();
  }

  render(){

    const { number, actions } = this.props;

    return (
      <div>
        <Show number={number} />
        <Btn handleClick={actions.incrementAction} />
      </div>
    ); 
  }

}

const mapStateToProps = (state) => {
    return{
        number : state.counterReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
          actions : bindActionCreators(counterAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);



