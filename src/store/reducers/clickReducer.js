import { CLICK_UPDATE_VALUE } from "../constants/click";

const initialState = {
  newValue: ""
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
      break;
  }
};
