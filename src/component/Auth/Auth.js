import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import { updateUser } from './../../ducks/reducer'

export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    addNewUser = () => {
        const { username, password } = this.state;
        axios.post('/api/register', { username, password })
            .then(window.location = '/#/dashboard')
    }

    loginUser = () => {
        const { username, password } = this.state;
        axios.post('/api/login',  { username, password })
            .then(window.location = '/#/dashboard')
    }

    render() {
        return (
            <div>
                <div><label> Username: <input value={this.state.username} onChange={this.handleUsernameChange} /></label></div>
                <div><label> Password: <input value={this.state.password} onChange={this.handlePasswordChange} type='password' /></label></div>
                <div><button onClick={() => this.loginUser()}>Login</button><button onClick={() => this.addNewUser()}>Register</button></div>
            </div>
        )
    }
}

connect(null, { updateUser })