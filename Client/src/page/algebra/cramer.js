import React from 'react';
import '../../App.css';
import Menubar from '../../Component/Menubar';
import algeMom from './mom';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
import Matrix from './template';

const cookies = new Cookies();
class cramer extends algeMom {


    handleCheck = (event) => {
        if (event.target.checked) {
            this.serach(0)
        }
        this.setState({ rememberMe: event.target.checked });
    };


    render() {
        return (
            <div className="cramer">
                {this.renderAuthen(cookies.get('username')) ?
                    <table className="NavBodyImg2">
                        <Menubar title="Cramer's Rule" />
                        <div className="myfontstye NavBoxText">
                            <h2 >Cramer's Rule method </h2>
                            <p>
                                Cramer's Rule is a method that uses determinants to solve systems of equations that have the same number of equations as letiables.<br /> Consider a system of two linear equations in two letiables.<br /> If we are solving for x, the x column is replaced with the constant column.   <br />             </p>
                        </div>
                        {/* INPUT BOX*/}
                        {/*<Matrix id="0"/>*/}
                        <Matrix id="0" fname="cramer" />
                    </table>
                    : <Login />}
            </div >
        );
    }
}

export default cramer;
