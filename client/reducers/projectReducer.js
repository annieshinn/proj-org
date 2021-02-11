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
  newProj: '',
  newProjDesc: '',
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
      console.log("MAKE_PROJECT running!");
      console.log('action payload: ', action.payload);

      document.getElementById('addProjectModal').style.display='flex';
      document.getElementById('addProject').style.display='none';

      return {
        ...state
      }
    }

    case types.CANCEL_PROJECT: {
      console.log("CANCEL_PROJECT running!");
      console.log('action payload: ', action.payload);

      document.getElementById('addProjectModal').style.display='none';
      document.getElementById('addProject').style.display='block';

      return {
        ...state
      }
    }

    case types.RENDER_PROJECT: {
      console.log("RENDER_PROJECT running!");
      console.log('action payload: ', action.payload);

      document.getElementById('addProjectModal').style.display='none';
      document.getElementById('addProject').style.display='block';

      return {
        ...state,
        newProj: '',
        newProjDesc: '',
      }
    }

    case types.SET_PROJECT_NAME: {
      console.log("set new proj running!");
      return {
        ...state,
        newProj: action.payload,
      };
    }

    case types.SET_PROJECT_DESC: {
      console.log("set new proj desc running!");
      return {
        ...state,
        newProjDesc: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default projectReducer;
