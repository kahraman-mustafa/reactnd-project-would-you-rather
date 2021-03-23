import { ADD_QUESTION } from "../actions/questions";

export default function questionsReducer(state = {}, action) {
  switch(action.type){
    case ADD_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: question
      };
    default:
      return state;
  }
}