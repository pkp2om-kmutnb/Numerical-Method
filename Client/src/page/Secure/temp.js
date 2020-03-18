import React from 'react';
import Login from './login';
import Home from '../info/Home';
import Cookies from 'universal-cookie';
import databases from '../Secure/databases';
const cookies = new Cookies();
class login extends databases {
    render() {
        return (
            <div >
                {this.renderAuthen(cookies.get('username'))? <Home/>: <Login/>}
            </div>
        )
    }
}

export default login;