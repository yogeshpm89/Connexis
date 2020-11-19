import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers, saveOrUpdateUser, selectUser, updateSelectedUserData } from '../../redux/actions/UserAction';
import './UserHome.css';

function Userhome(props) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const userList = user ? user.list : [];
    const selectedUser = user ? user.selectedUser : null;

    useEffect(() => {
        dispatch(loadUsers())
    }, []);

    const onUserSelect = (e) => {
        const userId = e.target.value;
        dispatch(selectUser(userId));
    }

    const onFormChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        if (id === "email") {
            selectedUser[id] = value;
        } else if (id === "company") {
            selectedUser["company"]["name"] = value;
        }
        dispatch(updateSelectedUserData(selectedUser));
    }

    const onSave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(saveOrUpdateUser(selectedUser));
    }

    return (
        <div className="user-home">
            <div className="user-list">
                <label htmlFor="email">Users</label>
                <select onChange={onUserSelect}>
                    {userList.map(user => {
                        return <option value={user.id} key={user.id}>{user.name}</option>
                    })}
                </select>
            </div>
            {selectedUser && <div className="user-form">
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input id="email" onChange={onFormChange} type="text" name="email" value={selectedUser.email}></input>
                    </div>

                    <div>
                        <label htmlFor="company">Company</label>
                        <input id="company" onChange={onFormChange} type="text" name="company" value={selectedUser.company.name}></input>
                    </div>

                    <button className="save" type="submit" onClick={onSave}>Save</button>
                </div>}
        </div>
    )
}

Userhome.propTypes = {
    
}

export default Userhome
