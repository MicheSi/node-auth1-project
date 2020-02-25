import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
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

    return (
        <div className='userList'>
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