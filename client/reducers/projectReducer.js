/**
 * ************************************
 *
 * @module  projectReducer
 * @author
 * @date
 * @description reducer for project data
 *      - handles all CRUD actions related to projects
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

const initialState = {
  projects: [],
};//{
//   totalMarkets: 0,
//   totalCards: 0,
//   marketList: [],
//   lastMarketId: 10000,
//   newLocation: '',
// };

const projectReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.GET_DATA: {
      // increment lastMarketId and totalMarkets counters
      console.log("GET_DATA running!");
      console.log('action payload: ', action.payload);

      return {
        ...state,
        projects: action.payload,
      }
    }

    case types.MAKE_PROJECT: {
      // increment lastMarketId and totalMarkets counters
      console.log("MAKE_PROJECT running!");
      console.log('action payload: ', action.payload);

      return {
        ...state
      }
    }

    default: {
      return state;
    }
  }
};

export default projectReducer;
