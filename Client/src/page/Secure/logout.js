import React from 'react';
import Cookies from 'universal-cookie';
import Login from './login';

const cookies = new Cookies();

class login extends React.Component {
    
    render() {
        return (
            <div >
                {cookies.set('username', '', { path: '/' })}
                {<Login/>}
            </div>
        )
    }
}

export default login;