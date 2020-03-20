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
        <Template id={1} name="Composite Trapezoidal Rule" message="The trapezoidal rule gives us a technique to approximate the integral on a given interval [a, b], but we cannot reduce the error because the error depends on the width of the interval over which we are integrating."/>
      </div>
    );
  }
}
export default Composite_Trapezoidal;