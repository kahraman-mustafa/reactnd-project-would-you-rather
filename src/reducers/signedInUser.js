import { SIGN_IN, SIGN_OUT } from "../actions/signedInUser"

export default function signedInUserReducer(state = {id: null, name: null}, action){
    switch(action.type){
        case SIGN_IN:
            const {id, name} = action;
            
            return {
                ...state,
                id,
                name
            }
        case SIGN_OUT:
            return {
                ...state,
                id: null,
                name: null
            }
        default:
            return state;
    }
}