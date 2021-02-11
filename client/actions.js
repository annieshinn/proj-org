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

export const makeProject = () => ({
  type: types.MAKE_PROJECT,
  payload: 'project modal opened',
});

export const cancelProject = () => ({
  type: types.CANCEL_PROJECT,
  payload: 'project modal closed',
});

export const renderProject = () => ({
  type: types.RENDER_PROJECT,
  payload: 'project rendered',
});

export const setNewProjName = (inputVal) => ({
  type: types.SET_PROJECT_NAME,
  payload: inputVal,
});

export const setNewProjDesc = (inputVal) => ({
  type: types.SET_PROJECT_DESC,
  payload: inputVal,
});

// })

// // add more action creators
// // export default connect(addCard, addMarket, setNewLocation, deleteCard)(App)