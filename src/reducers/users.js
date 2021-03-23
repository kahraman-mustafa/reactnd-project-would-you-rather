import { ADD_USER, FETCH_USERS } from "../actions/users";

export default function usersReducer(state = {}, action){

  switch(action.type){
    case FETCH_USERS:
      const { users } = action;
      return {
        ...state,
        ...users
      }

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