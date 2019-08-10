import React, { Component } from 'react';

import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    isModalShown: false
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

        <Modal 
          show={this.state.isModalShown}
          closeModalHandler={this.closeModalHandler}
        />
        <Backdrop 
          show={this.state.isModalShown}
        />
        <button
          className='button'
          onClick={this.showModalHandler}
        >Open Modal</button>

        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
