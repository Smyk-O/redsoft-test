import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import { connect } from 'react-redux';
import { putProductInCart, delProductInCart } from './redux/cart-reducers';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  componentDidMount() {
    if (sessionStorage.getItem('cart')) {
      let cartData = JSON.parse(sessionStorage.getItem('cart'));
      cartData.map((i) => this.props.putProductInCart(i));
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <ProductShowcase
          cart={this.props.cart.cart}
          product={this.props.product.groupOfProducts[0]}
          putProductInCart={this.props.putProductInCart}
          delProductInCart={this.props.delProductInCart}
        />
        <Footer contact={this.props.contact} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    putProductInCart: bindActionCreators(putProductInCart, dispatch),
    delProductInCart: bindActionCreators(delProductInCart, dispatch),
  };
};

const WrappedAppComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export default WrappedAppComponent;
