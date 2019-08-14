import React, { Component } from 'react';

import {TransitionGroup, CSSTransition} from 'react-transition-group';
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
      <CSSTransition
        key={index}
        classNames="fade"
        timeout={400}>
        <li
          className='list-item'
          onClick={() => this.removeItemHandler(index)}>{item}</li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className='button' onClick={this.addItemHandler}>Add Item</button>
        <p>Click Item Number to Remove.</p>
        <TransitionGroup component="ul" className='list'>
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;