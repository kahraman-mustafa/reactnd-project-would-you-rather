import { saveAnswer, getAnswers } from '../utils/api';
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_ANSWER = "ADD_ANSWER";
export const FETCH_ANSWERS = "FETCH_ANSWERS";

function fetchAnswersAction(answers){
    return {
        type: FETCH_ANSWERS,
        answers
    }
}

export function handleFetchAnswers(){
  return (dispatch) => {

    dispatch(showLoading());

    return getAnswers()
      .then((answers) => 
        dispatch(fetchAnswersAction(answers)))
      .then(() => 
        dispatch(hideLoading()))
      .catch(() => {
        alert('There was an error. Try again.')
      });
  }
}

function addAnswerAction(answer){
  return {
    type: ADD_ANSWER,
    answer
  }
}

export function handleAddAnswer(questionId, vote){
  return (dispatch, getState) => {
    const {signedInUser} = getState();

    dispatch(showLoading());

    return saveAnswer({
            userId: signedInUser.id, 
            questionId, 
            vote
        }).then((answer) => 
            dispatch(addAnswerAction(answer)))
        .then(() => 
            hideLoading())
        .catch(() => {
            alert('There was an error. Try again.')
        });
  }
}