import { getUser, getUsers, updateUser } from "../../services/UserService"
import {SET_SELECTED_USER, SET_SELECTED_USER_ID, SET_USERS, UPDATE_SELECTED_USER } from '../constants/UserConst';

export const loadUsers = () => async (dispach) => {
    const userList = await getUsers();
    dispach({
        type: SET_USERS,
        payload: userList
    })
}


export const selectUser = (userId) => async (dispach) => {
    dispach({
        type: SET_SELECTED_USER,
        payload: null
    })
    const user = await getUser(userId);
    dispach({
        type: SET_SELECTED_USER,
        payload: user
    })
}

export const updateSelectedUserData = (user) => async (dispach) => {
    dispach({
        type: UPDATE_SELECTED_USER,
        payload: user
    })
}


export const saveOrUpdateUser = (user) => async (dispach) => {
    const response = await updateUser(user);
    console.log(response);
    dispach(updateSelectedUserData(response));
}
