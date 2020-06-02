import React from 'react';

import List from './List';

class Form extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      item: '',
      itemArr: []

    };

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
      itemArr: [this.state.item, ...this.state.itemArr ]
    })

  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

            <input type="text" minLength={5} maxLength={200} value={this.state.item} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <List itemArr={this.state.itemArr}/>

      </div>
    );
  }
}

export default Form;
