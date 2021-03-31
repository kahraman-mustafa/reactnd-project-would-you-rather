export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

function signInAction(id, name){
    return {
        type: SIGN_IN,
        id,
        name
    }
}

function signOutAction(){
    return {
        type: SIGN_OUT
    }
}

export function handleSignIn(id, name){
    return (dispatch) => {
        //* Do side effects if exists
        return dispatch(signInAction(id, name));
    }
}

export function handleSignOut(){
    return (dispatch) => {
        //* Do side effects if exists
        return dispatch(signOutAction());
    }
}