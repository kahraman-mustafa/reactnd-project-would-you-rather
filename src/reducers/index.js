import { combineReducers } from "redux";
import usersReducer from "./users.js";
import questionsReducer from "./questions.js";
import answersReducer from "./answers.js";
import signedInUserReducer from "./signedInUser.js";
import {loadingBarReducer} from "react-redux-loading"

export default combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    answers: answersReducer,
    signedInUser: signedInUserReducer,
    loadingBar: loadingBarReducer
})