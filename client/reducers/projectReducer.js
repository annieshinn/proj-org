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
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const projectReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.ADD_MARKET: {
      // increment lastMarketId and totalMarkets counters
      console.log("add market running!");

      // create the new market object from provided data
      const newMarket = {
        marketId: state.lastMarketId + 1,
        location: state.newLocation,
        cards: 0,
      };

      console.log("new market", newMarket);

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);

      console.log("marketlist: ", marketList);

      // return updated state
      return {
        ...state,
        totalMarkets: state.totalMarkets + 1,
        marketList: marketList,
        lastMarketId: state.lastMarketId + 1,
      };
    }

    default: {
      return state;
    }
  }
};

export default projectReducer;
