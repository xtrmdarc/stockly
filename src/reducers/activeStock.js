import { SET_ACTIVE_STOCK } from "../actions";


const activeStockReducer = (state = null, action) => {
  switch(action.type) {
    case SET_ACTIVE_STOCK: {
      return action.activeStock;
    }
    default: return state;
  }
};

export default activeStockReducer;
