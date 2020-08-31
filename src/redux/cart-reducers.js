import { productAPI } from '../api/api';

const SET_PRODUCT_IN_CART = 'SET_PRODUCT_IN_CART';
const DEL_PRODUCT_IN_CART = 'DEL_PRODUCT_IN_CART';


let initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_IN_CART: {
      return {
        ...state,
        cart: [...state.cart, action.article],
      };
    }
    case DEL_PRODUCT_IN_CART: {
      let NewCart = [...state.cart.filter(i => i !== action.article)];
      return {
        ...state,
        cart: NewCart
      };
    }
    default:
      return state;
  }
};

const setProductInCart = (article) => {
  return {
    type: SET_PRODUCT_IN_CART,
    article,
  };
};

const deletedProductInCart = (article) => {
  return {
    type: DEL_PRODUCT_IN_CART,
    article,
  };
};

export const putProductInCart = (article) => async (dispatch) => {
  const response = await productAPI.addToCart();
  if (response) {
    dispatch(setProductInCart(article));
  }
};

export const delProductInCart = (article) => async (dispatch) => {
  const response = await productAPI.addToCart();
  if (response) {
    dispatch(deletedProductInCart(article));
  }
};

export default productReducer;
