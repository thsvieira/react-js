import React, { Component } from 'react';
import './style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      control: 'INICIAR'
    }
    this.timer = null;
    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);
  }

  start() {
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.control = 'INICIAR'
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.time += 0.1;
        this.setState(state);
      },100)
      state.control = 'PARAR'
    }
    this.setState(state)
  }

    clean() {
      if(this.timer !== null){
        clearInterval(this.timer);
        this.timer = null;
      }
      let state = this.state;
      state.time = 0
      state.control = 'INICIAR'
      this.setState(state);
    }

    render() {
      return (
        <div className='container'>
          <img src={require('./assets/cronometro.png')} alt='stopwatch' className='stopwatch' />
          <span className='timer'>{this.state.time.toFixed(1)}</span>
          <div className='buttonArea'>
            <span className='button' onClick={this.start} onChange={this.state.time}>{this.state.control}</span>
            <span className='button' onClick={this.clean} onChange={this.state.time}>LIMPAR</span>
          </div>
        </div>
      );
    }

  }

export default App;