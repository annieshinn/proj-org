/**
 * ************************************
 *
 * @module  task reducer
 * @author
 * @date
 * @description reducer for task data
 *      - handles all CRUD actions related to tasks
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

const initialState = {
  newTask: '',
  newTaskDesc: '',
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.MAKE_TASK: {
      console.log("MAKE_TASK running!");
      console.log('action payload: ', action.payload);

      document.querySelector('.' + action.payload + '#addTaskModal').style.display='flex';
      // document.querySelector('.' + action.payload + '#addTask').style.display='none';

      return {
        ...state
      }
    }

    case types.CANCEL_TASK: {
      console.log("CANCEL_TASK running!");
      console.log('action payload: ', action.payload);

      document.querySelector('.' + action.payload + '#addTaskModal').style.display='none';

      return {
        ...state,
      }
    }

    case types.RENDER_TASK: {
      console.log("RENDER_TASK running!");
      console.log('action payload: ', action.payload);

      document.querySelector('.' + action.payload + '#addTaskModal').style.display='none';

      return {
        ...state,
      }
    }

    case types.SET_TASK_NAME: {
      console.log("set new task name running!");
      return {
        ...state,
        newTask: action.payload,
      };
    }

    case types.SET_TASK_DESC: {
      console.log("set new task desc running!");
      return {
        ...state,
        newTaskDesc: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}


export default taskReducer;
