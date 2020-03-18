import React from 'react';
import '../../App.css';
import Menubar from '../../Component/Menubar';
import algeMom from './mom';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
import Matrix from './Matrix';
const cookies = new Cookies();
class gaussEliminate extends algeMom {
    constructor(props) {
        super(props)
        if (cookies.get('temp') == 'true') {
            //this.wait(4000)
            { cookies.set('temp', 'false', { path: '/gaussEliminate' }) }
        }
    }

    handleCheck = (event) => {
        if (event.target.checked) {
            this.serach(1)
        }
        this.setState({ rememberMe: event.target.checked });
    };


    render() {
        return (
            <div className="gaussEliminate">
                {this.renderAuthen(cookies.get('username')) ?
                    <table className="NavBodyImg2">
                        <Menubar title="Gauss Eliminate" />
                        <div className="myfontstye NavBoxText">
                            <h2 >Gauss-Eliminate method</h2>
                            <p>
                                Gaussian elimination, also known as row reduction, is an algorithm in linear algebra for solving a system of linear equations. <br /> It is usually understood as a sequence of operations performed on the corresponding matrix of coefficients. <br />This method can also be used to find the rank of a matrix, to calculate the determinant of a matrix, and to calculate the inverse of an invertible square matrix. <br />               </p>
                        </div>
                        <div class=" NavBox2">
                            <label for="ex3"> Matrix 3X3</label>
                        </div>
                        {/* INPUT BOX*/}
                        <Matrix id="0" fname="gaussEliminate" />
                    </table>
                    : <Login />}
            </div>
        );
    }
}

export default gaussEliminate;
