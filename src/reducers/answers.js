import { ADD_ANSWER, FETCH_ANSWERS } from "../actions/answers";

export default function answersReducer(state = {}, action){
  
  switch(action.type){

    case FETCH_ANSWERS:
      const {answers} = action;
      return {
        ...state,
        ...answers
      };

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