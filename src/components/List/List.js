import React, { Component } from 'react';

import './List.css';

class List extends Component {
  state = {
    items: [1, 2, 3]
  }

  addItemHandler = () => {
    this.setState(prevState => {
      return {
        items: prevState.items.concat(prevState.items.length + 1)
      };
    });
  }

  removeItemHandler = clickedIndex => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item, index) => index !== clickedIndex)
      };
    });
  }

  render() {
    const listItems = this.state.items.map((item, index) => (
      <li
        key={index}
        className='list-item'
        onClick={() => this.removeItemHandler(index)}>{item}</li>
    ));

    return (
      <div>
        <button className='button' onClick={this.addItemHandler}>Add Item</button>
        <p>Click Item Number to Remove.</p>
        <ul className='list'>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default List;