import React from 'react';

import List from './List';

class Form extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      item: '',
      itemArr: [],

    };
    this.removeItemArr = this.removeItemArr.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event){
    this.setState({item: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      item: '',
      itemArr: [...this.state.itemArr, this.state.item ]
    })

  }

  // removeItemArr(name, i){
  //   let itemArr = this.state.itemArr.slice();
  //   itemArr.splice(i, 1);
  //   this.setState({
  //       itemArr
  //   });
  // }

  removeItem(name){
    this.setState({
        todo: this.state.todo.filter(el => el !== name)
    })
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

            <input type="text" minLength={5} maxLength={200} value={this.state.item} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <List itemArr={this.state.itemArr} removeItemArr={this.removeItemArr}/>

      </div>
    );
  }
}

class TodoList extends React.Component {

    removeItem(item, i) {
        this.props.removeItemArr(item, i);
    }

    render() {
        return(
            <ul>
                { this.props.itemArr.map((todo,i) => {
                    return <li onClick={() => { this.removeItem(todo, i)}} key={i}>{ todo }</li>
                })}
            </ul>
        );
    }
}


export default Form;
