import React from 'react';
import '../../App.css';
import { Component } from 'react';
import Menubar from '../../Component/Menubar';
import Cookies from 'universal-cookie';
import databases from '../Secure/databases';
const cookies = new Cookies();
class Home extends databases {
  render() {
    return (
      <div className="Home " >
          <table className="NavBodyImg2">
            <Menubar title="Home" />
            <div className="myfontstye NavBoxText ">
              <h2 >Numerical method</h2>
              <p>
                is a mathematical tool designed to solve numerical problems.   <br /> The implementation of a numerical method with an appropriate convergence check in a programming language is called a numerical algorithm.<br />
              </p>
            </div>
          </table>
      </div>
    );
  }
}

export default Home;
