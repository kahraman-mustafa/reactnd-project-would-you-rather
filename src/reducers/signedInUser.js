import { SIGN_IN, SIGN_OUT } from "../actions/signedInUser"

export default function signedInUserReducer(state = {userId: null}, action){
    switch(action.type){
        case SIGN_IN:
            const {userId} = action;
            
            return {
                ...state,
                userId
            }
        case SIGN_OUT:
            return {
                ...state,
                userId: null
            }
        default:
            return state;
    }
}