import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from './store/slices/UserSlice';

const Display = () => {
    const usersData = useSelector(state => state.users)
    const dispatch = useDispatch()
    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }
    return (
        <div>
            {usersData.map((user, id) => {
                return <li key={id}>{user} <button onClick={()=> deleteUser(id)}>Delete</button></li>
            })}
        </div>
    );
};

export default Display;