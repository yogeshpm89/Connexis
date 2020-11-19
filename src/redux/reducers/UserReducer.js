import * as _ from 'lodash';
import { SET_USERS, SET_SELECTED_USER_ID, SET_SELECTED_USER, UPDATE_SELECTED_USER } from '../constants/UserConst';

const initialState = {
    list: [],
    selectedUserId: null,
    selectedUser: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                list: _.cloneDeep(action.payload)
            }
        case SET_SELECTED_USER_ID: 
            return {
                ...state,
                selectedUserId: action.payload
            }
        case SET_SELECTED_USER: 
            return {
                ...state,
                selectedUser: action.payload
            }
        case UPDATE_SELECTED_USER: {
            return {
                ...state,
                selectedUser: _.cloneDeep(action.payload)
            }
        }
        default:
            return state;
    }
}