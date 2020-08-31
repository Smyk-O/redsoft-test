import { createStore, combineReducers, applyMiddleware,  } from 'redux';
import menuReducer from './menu-reducers';
import contactReducer from './contact-reducers';
import productReducer from './product-reducers';
import cartReducer from './cart-reducers';

let reducers = combineReducers({
  menu: menuReducer,
  contact: contactReducer,
  product: productReducer,
  cart: cartReducer
  });

const store = createStore(
  reducers
);

export default store;
