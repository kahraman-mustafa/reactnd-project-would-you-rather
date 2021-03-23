export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

function signInAction({userName}){
    return {
        type: SIGN_IN,
        userId: userName
    }
}

function signOutAction(){
    return {
        type: SIGN_OUT
    }
}

export function handleSignIn({userName}){
    return (dispatch) => {
        //* Do side effects if exists
        return dispatch(signInAction({userName}));
    }
}

export function handleSignOut(){
    return (dispatch) => {
        //* Do side effects if exists
        return dispatch(signOutAction());
    }
}