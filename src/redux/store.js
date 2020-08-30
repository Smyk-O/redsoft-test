import { createStore, combineReducers, applyMiddleware,  } from 'redux';
import menuReducer from './menu-reducers';
import contactReducer from './contact-reducers';


let reducers = combineReducers({
  menu: menuReducer,
  contact: contactReducer
});

const store = createStore(
  reducers
);

export default store;
