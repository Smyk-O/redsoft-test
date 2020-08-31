import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import menuReducer from './menu-reducers';
import contactReducer from './contact-reducers';
import productReducer from './product-reducers';
import cartReducer from './cart-reducers';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  menu: menuReducer,
  contact: contactReducer,
  product: productReducer,
  cart: cartReducer
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  sessionStorage["cart"] = JSON.stringify(store.getState().cart.cart)
})

window.__store__ = store;

export default store;
