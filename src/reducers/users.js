import { ADD_USER, RECEIVE_USERS } from "../actions/users";

export default function usersReducer(state = {}, action){
  switch(action.type){
    case ADD_USER:
      const { user } = action;
      return {
        ...state,
        [user.id]: user
      };
    default:
      return state;
  }
}