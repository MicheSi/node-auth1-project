import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = props => {
    return (
        <div className='registerForm'>
            <h2>Log In</h2>
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                     required
                     type="text"
                     name="username"
                     id="username"
                     placeholder="Enter Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                     required
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Enter Password" />
                </FormGroup>
                <Button color='info'>Log In</Button>
            </Form>
        </div>
    )
}

export default LoginForm;