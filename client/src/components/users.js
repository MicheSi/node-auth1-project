import React from 'react';

const Users = props => {
    return (
        <div className='user'>
            <h2>Username: {props.username}</h2>
            <p>Password: {props.password}</p>
        </div>
    )
}

export default Users;