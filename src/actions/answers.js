import { saveAnswer } from '../utils/api';
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_ANSWER = "ADD_ANSWER";
export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";

export function receiveAnswersAction(answers){
    return {
        type: RECEIVE_ANSWERS,
        answers
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
            userId: signedInUser.userId, 
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