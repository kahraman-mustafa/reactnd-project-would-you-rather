import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestionsAction(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestionAction(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const {signedInUser} = getState();

        dispatch(showLoading());

        return saveQuestion({
                author: signedInUser, 
                optionOneText, 
                optionTwoText
            }).then((question) => 
                dispatch(addQuestionAction(question)))
            .then(() => 
                hideLoading())
            .catch(() => {
                alert('There was an error. Try again.')
            });
    }
}