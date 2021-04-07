import { SIGN_IN, SIGN_OUT } from "../actions/signedInUser"

export default function signedInUserReducer(state = {id: null, name: null, avatarURL: null}, action){
    switch(action.type){
        case SIGN_IN:
            const {id, name, avatarURL} = action;
            
            return {
                ...state,
                id,
                name,
                avatarURL
            }
        case SIGN_OUT:
            return {
                ...state,
                id: null,
                name: null,
                avatarURL: null
            }
        default:
            return state;
    }
}