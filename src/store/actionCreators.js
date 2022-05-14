import { INCREMENT, DECREMENT, RESET, CHANGE } from "./types";

export const decrementAction = () => ({ type: DECREMENT });
export const resetAction = () => ({ type: RESET });
export const incrementAction = () => ({ type: INCREMENT });

export const changeAction = (num = 0) => ({ type: CHANGE, payload: num });