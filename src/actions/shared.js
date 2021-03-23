import { getInitialData } from "../utils/api.js";
import { receiveUsers } from "./users.js";
import { receiveQuestions } from "./questions.js";
import { receiveAnswers } from "./answers.js";
import { showLoading, hideLoading } from "react-redux-loading"

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions, answers}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(receiveAnswers(answers));
                dispatch(hideLoading());
            });
    }
}