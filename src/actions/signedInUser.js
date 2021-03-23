/**
 * @author Mustafa KAHRAMn
 * No API or database call for signing in
 * Hence, there is no import
 */

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

function signInAction({userId}){
    return {
        type: SIGN_IN,
        userId
    }
}

function signOutAction(){
    return {
        type: SIGN_OUT
    }
}

export function handleSignIn({userId}){
    return (dispatch) => {
        //* Do side effects if exists
        return dispatch(signInAction({userId}));
    }
}

export function handleSignOut(){
    return (dispatch) => {
        //* Do side effects if exists
        return dispatch(signOutAction());
    }
}