import React, { Component } from 'react';
import Routes from './routes';
import { Footer, Header } from './components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div id='app' className='container-content-wrapper'>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
