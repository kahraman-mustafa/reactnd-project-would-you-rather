import { saveUser, getUsers } from '../utils/api';
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_USER = "ADD_USER";
export const FETCH_USERS = "FETCH_USERS";

function fetchUsersAction(users){
    return {
        type: FETCH_USERS,
        users
    }
}

export function handleFetchUsers(){
  return (dispatch) => {

    dispatch(showLoading());

    return getUsers()
      .then((users) => 
        dispatch(fetchUsersAction(users)))
      .then(() => 
        dispatch(hideLoading()))
      .catch(() => {
        alert('There was an error. Try again.')
      });
  }
}

function addUserAction(user){
  return {
    type: ADD_USER,
    user
  }
}

export function handleAddUser(userName, name){
  const avatarURL = "/img/person.svg";
  
  return (dispatch) => {

    dispatch(showLoading());

    return saveUser({userName, name, avatarURL})
        .then((user) => 
            dispatch(addUserAction(user)))
        .then(() => 
            hideLoading())
        .catch(() => {
            alert('There was an error. Try again.')
        });
  }
}