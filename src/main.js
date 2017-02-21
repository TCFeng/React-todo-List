import React from 'react';
import ReactDOM from 'react-dom';

class Panel extends React.Component {
  constructor(){
    super();
    this.state = {
      //儲存資料為text, status
      data: [
      ]
    };
  }
  
  addTodoItem = (event) => {
   
    if(event.keyCode !== 13){
      return ;
    }
    
    event.preventDefault();


    let newItemState = {
      text : event.target.value,
      status : 'active',
    };

    this.state.data.push(newItemState);
    this.setState(this.state.data);
    event.target.value = '';
  }

  changeTodoItemStatus = (index) => {
    
    let currItem = this.state.data[index];
    if(currItem.status === 'active'){
      currItem.status = 'over';
    }else{  
      currItem.status = 'active';
    }

    this.setState(this.state.data);

  }

  removeTodoItem = (index) => {

    let currItem = this.state.data[index];
    this.state.data.splice(index,1);
    this.setState(this.state.data);
    
  }

  render () {
    return(
      <div>
        <TodoTitle/>
        <InputArea keyDownEnter={this.addTodoItem}/>
        <ShowListArea data={this.state.data} changeStatus={this.changeTodoItemStatus} removeTodoItem={this.removeTodoItem}/>
      </div>
    )
  }
}

class InputArea extends React.Component {
  render (){
    return(
      <div>
          <header>
            <input placeholder="輸入要做的事~" onKeyDown={this.props.keyDownEnter}/>
          </header>
      </div>
    )
  }
};

class ShowListArea extends React.Component {
  render (){

    var todoItems = this.props.data.map((todoItem, key) => {
      return <TodoItem key = {key} index = {key} status={todoItem.status} changeTodoItemStatus={this.props.changeStatus} removeTodoItem = {this.props.removeTodoItem} >{todoItem.text}</TodoItem>}
    );

    return(
      <div>
        <table><tbody>{todoItems}</tbody></table>
     </div>
    )
  }
};

class TodoItem extends React.Component {

  render () {

    const {status, changeTodoItemStatus, removeTodoItem,index, children} = this.props;

    return (
      <tr>
        <td><span className={status} onClick={() => changeTodoItemStatus(index)}>{children.toString()}</span></td>
        <td><button onClick={() => removeTodoItem(index)}> X </button></td>
      </tr>
      
    )
  }

}

const TodoTitle = () => (
    <div>Todo List</div>
);

ReactDOM.render(<Panel />, document.getElementById('app'));