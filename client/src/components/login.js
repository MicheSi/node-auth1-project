import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

axios.defaults.withCredentials = true;

const LoginForm = props => {
    const [user, setUser] = useState({username: '', password: ''});
    const history = useHistory();

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const login = e => {
        e.preventDefault();
        setUser({...user})
        AxiosWithAuth()
            .post('/auth/login', user)
            .then(res => {
                console.log(res.data, user)
                localStorage.setItem('token', res.data.token)
                history.push('/users');
                setUser({username: '', password: ''})
            })
            .catch(err => console.log('cannot log in', err))
    }

    return (
        <div className='registerForm'>
            <h2>Log In</h2>
            <Form onSubmit={login}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                     required
                     type="text"
                     name="username"
                     id="username"
                     placeholder="Enter Username"
                     value={user.username}
                     onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                     required
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Enter Password"
                     value={user.password}
                     onChange={handleChange} />
                </FormGroup>
                <Button color='info'>Log In</Button>
            </Form>
        </div>
    )
}

export default LoginForm;