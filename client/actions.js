import { connect } from "react-redux";
/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from "./constants/actionTypes";

export const getData = (data) => ({
  type: types.GET_DATA,
  payload: data,
});

// export const setNewLocation = (inputVal) => ({
//   type: types.SET_NEW_LOCATION,
//   payload: inputVal
// });

// export const addCard = (marketId) => ({
//   type: types.ADD_CARD,
//   payload: marketId
// });

// export const deleteCard = (marketId) => ({
//   type: types.DELETE_CARD,
//   payload: marketId
// })

// // add more action creators
// // export default connect(addCard, addMarket, setNewLocation, deleteCard)(App)