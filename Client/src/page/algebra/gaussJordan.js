import React from 'react';
import '../../App.css';
import Menubar from '../../Component/Menubar';
import algeMom from './mom';
import TableLG from '../../Component/TableLG';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
import Matrix from './Matrix';
const cookies = new Cookies();
class gaussJordan extends algeMom {
    constructor(props) {
        super(props)
        if (cookies.get('temp') == 'true') {
            //this.wait(4000)
            { cookies.set('temp', 'false', { path: '/gaussJordan' }) }
        }
    }

    handleCheck = (event) => {
        if (event.target.checked) {
            this.serach(2)
        }
        this.setState({ rememberMe: event.target.checked });
    };


    render() {
        return (
            <div className="gaussJordan">
                {this.renderAuthen(cookies.get('username')) ?
                    <table className="NavBodyImg2">
                        <Menubar title="Gauss Jordan" />

                        <div className="myfontstye NavBoxText">
                            <h2 >Gauss-Jordan method</h2>
                            <p>
                                Gauss-Jordan Elimination is an algorithm that can be used to solve systems of linear equations and to find the inverse of any invertible matrix.<br /> It relies upon three elementary row operations one can use on a matrix: Swap the positions of two of the rows.<br /> Multiply one of the rows by a nonzero scalar.   <br />             </p>
                        </div>

                        {/* INPUT BOX*/}
                        <Matrix id="0" fname="gaussJordan"/>
                    </table>
                    : <Login />}
            </div>
        );
    }
}

export default gaussJordan;
