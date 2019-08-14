import React, { Component } from 'react';
import {Transition} from 'react-transition-group';

import './index.css'
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
  
  toggleBoxHandler = () => {
    this.setState(prevState => {
      return {
        isBoxShown: !prevState.isBoxShown
      };
    });
  }

  render() {
    let backdrop = null;
    if (this.state.isModalShown) {
      backdrop = <Backdrop show />;
    }
    return (
      <div className='app'>
        <h1>React Animations</h1>

        <button
          className='button'
          onClick={this.toggleBoxHandler}
        >
          {this.state.isBoxShown ? 'Hide' : 'Show'} Box
        </button>
        <Transition
          in={this.state.isBoxShown}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
        {state => {
          let boxClasses = ['box'];
          if (state === 'entering' || state === 'exiting') {
            boxClasses = ['box', 'box--animate']
          }
          return (
            <div className={boxClasses.join(' ')}></div>
          );
        }}
        </Transition>

        <button
          className='button'
          onClick={this.showModalHandler}
        >Open Modal</button>
        <Modal
          show={this.state.isModalShown}
          closeModalHandler={this.closeModalHandler}
        />
        {backdrop}

        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
