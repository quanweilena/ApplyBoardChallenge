import { DO_LOGIN } from '../constants';

export function doLogin( name ) {
   var userName = name || "";
   var characters = userName.replace(/\s+/g,"").length;		// Count the length of user's name, space doesn't count
  return {
    type: DO_LOGIN,
    name: name,
    length: characters
  };
}