import React, { Component } from 'react';
import mom from './mom.js';
import Menubar from '../../Component/Menubar';
import TableFunction from '../../Component/TableOneAns';
import Cookies from 'universal-cookie';
import Login from '../Secure/login';
import Template from './template';
const cookies = new Cookies();

class Composite_Trapezoidal extends mom {


  render() {
    return (
      <div className="bisec">
        <Template id={1}/>
      </div>
    );
  }
}
export default Composite_Trapezoidal;