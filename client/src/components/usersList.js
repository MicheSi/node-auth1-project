import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import {Button} from 'reactstrap';
import Users from './users';

const UsersList = props => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        AxiosWithAuth()
        .get('/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
        .catch(err => {
            console.log('cannot get users list', err)
        })
    }, [])

    const logout = e => {
        e.preventDefault();
        localStorage.clear();
        window.location.href='/login'
    }

    return (
        <div className='userList'>
            <Button onClick={logout}>Log out</Button>
            {users.map(user => (
                <Users
                 key={user.id}
                 username={user.username}
                 password={user.password}
                />
            ))}
        </div>
    )
}

export default UsersList;