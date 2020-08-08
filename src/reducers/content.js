import { TOGGLE_DISPLAY_MAIN } from "../actions";


const contentReducer = (state = true, action) => {
  switch(action.type) {
    case TOGGLE_DISPLAY_MAIN: {
      return action.status;
    }
    default: return state;
  }
}

export default contentReducer;