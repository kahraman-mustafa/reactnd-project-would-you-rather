import { getInitialData } from "../utils/api.js";
import { handleFetchUsers } from "./users.js";
import { handleFetchQuestions } from "./questions.js";
import { handleFetchAnswers } from "./answers.js";
import { showLoading, hideLoading } from "react-redux-loading"

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions, answers}) => {
                dispatch(handleFetchUsers(users));
                dispatch(handleFetchQuestions(questions));
                dispatch(handleFetchAnswers(answers));
                dispatch(hideLoading());
            });
    }
}