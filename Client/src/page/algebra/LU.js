import React from 'react';
import '../../App.css';
import Menubar from '../../Component/Menubar';
import algeMom from './mom';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
import Matrix from './Matrix';

const cookies = new Cookies();
class LU extends algeMom {
    constructor(props) {
        super(props)
        if (cookies.get('temp') == 'true') {
            //this.wait(4000)
            { cookies.set('temp', 'false', { path: '/bisec' }) }
        }
    }
    handleCheck = (event) => {
        if (event.target.checked) {

            this.serach(3)
        }
        this.setState({ rememberMe: event.target.checked });
    };

    render() {
        return (
            <div className="LU">
                {this.renderAuthen(cookies.get('username')) ?
                    <table className="NavBodyImg2">
                        <Menubar title="LU Decomposition" />
                        <div className="myfontstye NavBoxText">
                            <h2 >LU Decomposition</h2>
                            <p>
                                LU decomposition of a matrix is the factorization of a given square matrix into two triangular matrices, <br />one upper triangular matrix and one lower triangular matrix, <br />such that the product of these two matrices gives the original matrix.   <br />             </p>
                        </div>
                        {/* INPUT BOX*/}
                        <Matrix id="0" fname="LU Decomposition" />
                    </table>
                    : <Login />}
            </div>
        );
    }
}

export default LU;
