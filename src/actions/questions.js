import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_QUESTION = "ADD_QUESTION";

function addQuestionAction(answer){
    return {
        type: ADD_QUESTION,
        answer
    }
}

export function handleAddQuestion(){
    return (dispatch, getState) => {
        const {signedInUser} = getState();

        dispatch(showLoading());

        return saveQuestion({author, optionOne, optionTwo})
            .then(() => 
                )
            .then(() => 
                hideLoading());
    }
}