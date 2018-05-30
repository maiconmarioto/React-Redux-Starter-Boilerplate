import { CLICK_UPDATE_VALUE } from "../constants/click";

export const clickButton = newValue => ({
  type: CLICK_UPDATE_VALUE,
  newValue
});
