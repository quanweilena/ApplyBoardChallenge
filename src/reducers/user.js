import { DO_LOGIN } from '../constants';

export default function user(state = {}, action) {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        name: action.name,
        length: action.length,
      };
    default:
      return state;
  }
}