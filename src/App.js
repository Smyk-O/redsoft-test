import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
      
import store from './redux/store';

function App({state}) {
  return (
      <div className="app">
        <Header />
        <ProductShowcase cart={state.cart.card} product={state.product.groupOfProducts[0]} />
        <Footer contact={state.contact} />
      </div>
  );
}

function MainApp(props) {
  return <App state={store.getState()}></App>
}

export default MainApp;
