import React, { Component } from 'react';

import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    isModalShown: false,
    isBoxShown: false
  }

  showModalHandler = () => {
    this.setState({ isModalShown: true });
  }

  closeModalHandler = () => {
    this.setState({ isModalShown: false });
  }

  render() {
    return (
      <div className='app'>
        <h1>React Animations</h1>
        <button className='button'>{this.state.isBoxShown ? 'Hide' : 'Show'} Box</button>
        <div></div>
        <button
          className='button'
          onClick={this.showModalHandler}
        >Open Modal</button>
        
        <Modal
          show={this.state.isModalShown}
          closeModalHandler={this.closeModalHandler}
        />
        <Backdrop
          show={this.state.isModalShown}
        />

        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
