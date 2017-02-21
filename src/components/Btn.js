import React from 'react';


class Btn extends React.Component {
  render(){
    return(<button onClick={this.props.handleClick}> Click Me </button>);    
  };
}

export default Btn;