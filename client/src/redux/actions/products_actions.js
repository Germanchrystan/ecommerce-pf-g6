import Axios from "axios";
import {GET_ALL_PRODUCTS} from "../constants";

const { REACT_APP_API } = process.env;

export function getAllProducts() {
  return function (dispatch) {
    return Axios.get(`${REACT_APP_API}/products/`)
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      })

      .catch((error) => console.log(error));
  };
}
