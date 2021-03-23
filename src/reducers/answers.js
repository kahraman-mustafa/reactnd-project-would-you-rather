import { ADD_ANSWER, RECEIVE_ANSWERS } from "../actions/answers";

export default function answersReducer(state = {}, action){
  switch(action.type){
    case RECEIVE_ANSWERS:
      return state;
    case ADD_ANSWER:
      const { answer } = action;
      return {
        ...state,
        [answer.id]: answer
      };
    default:
      return state;
  }
}