import * as actions from "./actions";

const initData = {
  products: [
    { pname: "Apple", price: 20 },
    { pname: "Orange", price: 40 },
    { pname: "Watermelon", price: 80 },
    { pname: "Grapes", price: 64 },
  ],
  cart: [],
  total: 0,
};

const productReducer = (state = initData, action) => {
  //action receives the object literal from dispatch
  console.log("ACTION", action);
  if (action.type === actions.PURCHASE) {
    //action is purchase---meaning when an option is selected -- that needs to be added to the cart
    //so here update the cart object inside the initData or the state of the reducer variable

    //...state returns the original state object using the spread operator
    //we are only updating the cart object with the payload. Hence the original contents of state are not changed
    //except for the cart object which is appended by the user selected product item and the total which is
    //appended with the selected item price

    //since action.payload.price is a string we are typecasting to integer value
    return {
      ...state,
      cart: [...state.cart, action.payload],
      total: state.total + parseInt(action.payload.price),
    };
  } else if (action.type === actions.DELETE) {
    return {
      ...state,
      cart: state.cart.filter((item, index) => index !== action.payload.index),
      total: state.total - action.payload.price,
      //filter is used wherein the index of the cart items not matching the clicked item will be retained in the cart array. Thus the index clicked is removed
      //from the cart
    };
  }

  return state;
};

export default productReducer;

/**
 The <Provider> component makes the redux store available to any nested components that need access
 to redux store
 */
