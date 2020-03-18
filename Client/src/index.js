
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';

import Home from './page/info/Home';

import onepoint from './page/root/onepoint';
import secant from './page/root/secant';
import newtonRaphson from './page/root/newtonRaphson';
import Graph from './page/root/Graph';
import falsePosition from './page/root/falsePosition';
import bisection from './page/root/bisec';

import admin from './page/Secure/admin';
import logout from './page/Secure/logout';
import register from './page/Secure/register';
import login from './page/Secure/login';

import gaussEliminate from './page/algebra/gaussEliminate';
import gaussJordan from './page/algebra/gaussJordan';
import LU from './page/algebra/LU';
import Matrix from './page/algebra/Matrix';
import cramer from './page/algebra/cramer';

import CompositeSimpson from './page/integration/CompositeSimpson';
import CompositeTrapzoidal from './page/integration/CompositeTrapzoidal';

import Backwardh from './page/diff/Backwardh';
import Backwardh2 from './page/diff/Backwardh2';
import Centralh from './page/diff/Centralh';
import Centralh2 from './page/diff/Centralh2';
import Forwardh from './page/diff/Forwardh';
import Forwardh2 from './page/diff/Forwardh2';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
cookies.set('username', 'Numerical', { path: '/' });
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/app" component={App} />
        <Route path="/" component={Home} />
        <Route path="/Matrix" component={Matrix} />
        <Route path="/logout" component={logout} />
        <Route path="/admin" component={admin} />
        <Route path="/Home" component={Home} />
        <Route path="/bisec" component={bisection} />
        <Route path="/newtonRaphson" component={newtonRaphson} />
        <Route path="/secant" component={secant} />
        <Route path="/onepoint" component={onepoint} />
        <Route path="/Graph" component={Graph} />
        <Route path="/gaussJordan" component={gaussJordan} />
        <Route path="/gaussEliminate" component={gaussEliminate} />
        <Route path="/falsePosition" component={falsePosition} />
        <Route path="/cramer" component={cramer} />
        <Route path="/register" component={register} />
        <Route path="/LU" component={LU} />
        <Route path="/login" component={login} />
        <Route path="/CompositeSimpson" component={CompositeSimpson} />
        <Route path="/CompositeTrapzoidal" component={CompositeTrapzoidal} />
        <Route path="/Backwardh" component={Backwardh} />
        <Route path="/Backwardh2" component={Backwardh2} />
        <Route path="/Centralh" component={Centralh} />
        <Route path="/Centralh2" component={Centralh2} />
        <Route path="/Forwardh" component={Forwardh} />
        <Route path="/Forwardh2" component={Forwardh2} />


    </Router>, document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
