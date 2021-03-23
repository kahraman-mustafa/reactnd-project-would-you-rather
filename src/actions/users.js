import { saveUser } from '../utils/api';
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_USER = "ADD_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsersAction(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}

function addUserAction(user){
  return {
    type: ADD_USER,
    user
  }
}

export function handleAddUser(name, avatarURL){
  return (dispatch) => {

    dispatch(showLoading());

    return saveUser({name, avatarURL})
        .then((user) => 
            dispatch(addUserAction(user))
        .then(() => 
            hideLoading())
        .catch(() => {
            alert('There was an error. Try again.')
        });
  }
}