import { ADD_QUESTION, FETCH_QUESTIONS } from "../actions/questions";

export default function questionsReducer(state = {}, action) {
  switch(action.type){
    case FETCH_QUESTIONS:
      const { questions } = action;
      return {
        ...state,
        ...questions
      };

    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question
      };
      
    default:
      return state;
  }
}