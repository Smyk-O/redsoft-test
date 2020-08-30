import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import store from './redux/store';

function App({state}) {
  console.log(state)
  return (
      <div className="app">
        <Header></Header>
        <main></main>
        <Footer contact={state.contact}></Footer>
      </div>
  );
}

function mainApp(props) {
  return <App state={store.getState()}></App>
}

export default mainApp;
