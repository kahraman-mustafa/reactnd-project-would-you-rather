import { saveQuestion, getQuestions } from '../utils/api';
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_QUESTION = "ADD_QUESTION";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";

function fetchQuestionsAction(questions){
    return {
        type: FETCH_QUESTIONS,
        questions
    }
}

export function handleFetchQuestions() {
    return (dispatch) => {

        dispatch(showLoading());

        return getQuestions()
            .then((questions) =>
                dispatch(fetchQuestionsAction(questions)))
            .then(() =>
                dispatch(hideLoading()))
            .catch(() => {
                alert('There was an error. Try again.')
            });
    }
}

function addQuestionAction(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion({optionOneText, optionTwoText}){
    return (dispatch, getState) => {
        const {signedInUser} = getState();

        dispatch(showLoading());

        return saveQuestion({
                author: signedInUser.id, 
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