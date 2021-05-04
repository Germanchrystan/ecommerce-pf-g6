import { GET_ALL_PRODUCTS } from "../constants";

const initialState = {
  allProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
